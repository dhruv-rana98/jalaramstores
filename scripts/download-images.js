// This project uses "type": "module" in package.json, which makes
// `.js` files be treated as ES modules. The original script used
// CommonJS `require()` and would error with "require is not defined".
//
// To avoid accidental runs of the old CommonJS script, this file is
// now a small ES-module shim that prints instructions and exits.

console.error(
  "The script 'scripts/download-images.js' is deprecated in this project."
);
console.error('Your project is ESM (package.json contains "type": "module").');
console.error(
  "Run the CommonJS version instead: node scripts/download-images.cjs"
);
console.error(
  "Or convert the script to ESM if you prefer (use 'import' instead of 'require')."
);
process.exitCode = 1;
