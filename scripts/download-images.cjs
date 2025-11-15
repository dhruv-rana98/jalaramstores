/*
CommonJS version of download-images script for projects using "type": "module" in package.json
*/
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function downloadWithRedirects(url, destPath, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const request = lib.get(url, (res) => {
      // Redirects
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        if (maxRedirects <= 0) return reject(new Error("Too many redirects"));
        const nextUrl = res.headers.location.startsWith("http")
          ? res.headers.location
          : new URL(res.headers.location, url).toString();
        res.resume();
        return resolve(
          downloadWithRedirects(nextUrl, destPath, maxRedirects - 1)
        );
      }

      if (res.statusCode !== 200) {
        res.resume();
        return reject(
          new Error("Failed to download " + url + " status " + res.statusCode)
        );
      }

      const contentType = (res.headers["content-type"] || "").toLowerCase();
      if (!contentType.startsWith("image")) {
        res.resume();
        return reject(
          new Error(
            "URL did not return an image: " +
              url +
              " content-type=" +
              contentType
          )
        );
      }

      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
      file.on("error", (err) => reject(err));
    });

    request.on("error", (err) => reject(err));
    request.setTimeout(30_000, () => {
      request.abort();
      reject(new Error("Request timeout " + url));
    });
  });
}

async function processItems(type, dataPath, outDir) {
  const text = fs.readFileSync(dataPath, "utf8");
  const items = JSON.parse(text);

  ensureDir(outDir);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const query = (item.name || item.title || item.slug || "grocery").replace(
      /\s+/g,
      ","
    );
    const unsplashUrl = `https://source.unsplash.com/800x800/?${encodeURIComponent(
      query
    )}`;
    const filename = `${item.id}.jpg`;
    const destPath = path.join(outDir, filename);
    try {
      console.log(
        `[${type}] (${i + 1}/${items.length}) downloading image for: ${
          item.name
        } → ${destPath}`
      );
      await downloadWithRedirects(unsplashUrl, destPath);
      item.image = `/images/${type}/${filename}`;
      await sleep(600);
    } catch (err) {
      console.error(
        `[${type}] failed to download image for ${item.name}: ${err.message}`
      );
      // try fallback to loremflickr
      try {
        const fallbackUrl = `https://loremflickr.com/800/800/${encodeURIComponent(
          query
        )}`;
        console.log(
          `[${type}] attempting fallback for ${item.name} → ${fallbackUrl}`
        );
        await downloadWithRedirects(fallbackUrl, destPath);
        item.image = `/images/${type}/${filename}`;
        console.log(`[${type}] fallback succeeded for ${item.name}`);
      } catch (fallbackErr) {
        console.error(
          `[${type}] fallback failed for ${item.name}: ${fallbackErr.message}`
        );
        if (!item.image) item.image = "";
      }
      await sleep(400);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(items, null, 2), "utf8");
  console.log(`[${type}] updated json written to ${dataPath}`);
}

(async function main() {
  try {
    console.log("Starting image download script...");

    const projectRoot = path.resolve(__dirname, "..");
    const dataDir = path.join(projectRoot, "src", "data");
    const publicImagesDir = path.join(projectRoot, "public", "images");

    await processItems(
      "products",
      path.join(dataDir, "products.json"),
      path.join(publicImagesDir, "products")
    );
    await processItems(
      "categories",
      path.join(dataDir, "categories.json"),
      path.join(publicImagesDir, "categories")
    );
    await processItems(
      "brands",
      path.join(dataDir, "brands.json"),
      path.join(publicImagesDir, "brands")
    );

    console.log("All done. Images downloaded and JSON files updated.");
  } catch (err) {
    console.error("Script failed:", err);
    process.exitCode = 1;
  }
})();
