# Site Structure & Navigation Map

## Visual Hierarchy

```
HOME PAGE (/)
├── Header (sticky)
│   ├── Logo → Home
│   ├── Navigation Menu
│   │   ├── Home
│   │   ├── Categories
│   │   ├── Brands
│   │   ├── About
│   │   └── Contact
│   └── Icons (Search, Cart, Account)
│
├── Hero Section
│   ├── Welcome Title
│   ├── 4 Feature Cards
│   │   ├── 🌾 Farm Fresh
│   │   ├── 🚚 Free Delivery
│   │   ├── ⚡ Quick Checkout
│   │   └── 💬 Support
│   └── Hero Image
│
├── Featured Categories Section
│   ├── Title + "View All →" Link
│   └── 8 Category Cards (first 8 of 12)
│       └── Each Links to: /category/:slug
│
├── Featured Products Section
│   ├── Title + "View All →" Link
│   └── 6 Product Cards (first 6 of 14)
│       ├── Product Image
│       ├── Product Name
│       ├── Brand Name
│       ├── Price (with offer badge if applicable)
│       └── Add to Cart Button
│
├── Featured Brands Section
│   ├── Title + "View All →" Link
│   └── 6 Brand Cards (first 6 of 6)
│       └── Each Links to: /brand/:slug (expandable)
│
├── Newsletter Section
│   ├── Title
│   ├── Description
│   └── Email Input + Subscribe Button
│
└── Footer
    ├── About Section (Links)
    ├── Customer Service (Links)
    ├── Policies (Links)
    ├── Social Links
    └── Copyright Info


CATEGORIES PAGE (/categories)
├── Header (same)
├── Page Header
│   ├── Title: "All Categories"
│   └── Description
├── Breadcrumb: Home / Categories
├── All 12 Categories Grid
│   └── Each Category Card Links to: /category/:slug
└── Footer (same)


CATEGORY PAGE (/category/:slug)
├── Header (same)
├── Category Header
│   ├── Category Banner Image
│   └── Category Title Overlay
├── Breadcrumb: Home / Category Name
├── Product Count
└── Products Grid (filtered by category)
    └── All matching Product Cards
└── Footer (same)


BRANDS PAGE (/brands)
├── Header (same)
├── Page Header
│   ├── Title: "Shop By Brands"
│   └── Description
├── Breadcrumb: Home / Brands
├── All 6 Brands Grid
│   └── Brand Cards (expandable for brand pages)
└── Footer (same)


ABOUT PAGE (/about)
├── Header (same)
├── Page Header
│   ├── Title: "About JalaRam Stores"
│   └── Description
├── Breadcrumb: Home / About
├── Content Sections
│   ├── Our Story
│   ├── Our Mission
│   ├── Why Choose Us (bullet list)
│   └── Get in Touch (link to /contact)
└── Footer (same)


CONTACT PAGE (/contact)
├── Header (same)
├── Page Header
│   ├── Title: "Contact Us"
│   └── Description
├── Breadcrumb: Home / Contact
├── Two-Column Layout
│   ├── Left: Contact Information
│   │   ├── 📍 Address
│   │   ├── 📞 Phone
│   │   ├── ✉️ Email
│   │   └── 🕐 Hours
│   └── Right: Contact Form
│       ├── Name Input
│       ├── Email Input
│       ├── Subject Input
│       ├── Message Textarea
│       └── Send Button
└── Footer (same)
```

---

## Navigation Flow

### From Home Page

```
Home
├─→ /categories (View All link or nav menu)
├─→ /category/fruits-vegetables (Click any category)
├─→ /brands (View All or nav menu)
├─→ /about (Nav menu)
├─→ /contact (Newsletter form or nav menu)
└─→ / (Click logo)
```

### From Any Category Page

```
/category/:slug
├─→ / (Click logo)
├─→ /categories (Breadcrumb)
├─→ /category/other-slug (Click other category card)
└─→ Back arrow or nav menu
```

### From Brands Page

```
/brands
├─→ / (Click logo)
├─→ Home (Breadcrumb)
└─→ /brand/:slug (Click brand - when implemented)
```

### From About/Contact

```
/about  or  /contact
├─→ / (Click logo)
├─→ Any nav link
└─→ /contact link on About page
```

---

## URL Structure

```
Base URL: http://localhost:5173/

Routes:
┌─────────────────────────────────────┐
│ Home Page                           │
│ http://localhost:5173/              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Categories (Browse All)             │
│ http://localhost:5173/categories    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Single Category (Dynamic)           │
│ http://localhost:5173/              │
│  category/fruits-vegetables         │
│ http://localhost:5173/              │
│  category/indian-snacks             │
│ http://localhost:5173/              │
│  category/dals-beans                │
│ ... (any category slug)             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Brands (Browse All)                 │
│ http://localhost:5173/brands        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ About Us                            │
│ http://localhost:5173/about         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Contact Us                          │
│ http://localhost:5173/contact       │
└─────────────────────────────────────┘
```

---

## Component Usage Map

```
Header Component
├── Used in: ALL pages (via App.jsx)
└── Contains: Navigation, Logo, Icons

Footer Component
├── Used in: ALL pages (via App.jsx)
└── Contains: Links, Info, Social

Hero Component
├── Used in: Home page only
└── Contains: Title, Features, Image

ProductCard Component
├── Used in:
│   ├── Home (featured products section)
│   └── CategoryPage (filtered products)
└── Props: product object

CategoryCard Component
├── Used in:
│   ├── Home (featured categories)
│   └── CategoriesPage (all categories)
└── Props: category object
└── Links to: /category/:slug

BrandCard Component
├── Used in:
│   ├── Home (featured brands)
│   └── BrandsPage (all brands)
└── Props: brand object
```

---

## Data Flow

```
DATA FILES (JSON)
│
├── products.json
│   └── Flows to:
│       ├── ProductCard (displays product)
│       ├── Home (featured products)
│       └── CategoryPage (filtered products)
│
├── categories.json
│   └── Flows to:
│       ├── CategoryCard (displays category)
│       ├── Home (featured categories)
│       └── CategoriesPage (all categories)
│
└── brands.json
    └── Flows to:
        ├── BrandCard (displays brand)
        ├── Home (featured brands)
        └── BrandsPage (all brands)
```

---

## Responsive Layout

### Desktop View (1024px+)

```
┌─────────────────────────────────────────┐
│          HEADER (sticky)                │
├─────────────────────────────────────────┤
│                HERO                     │
├─────────────────────────────────────────┤
│  Category 1  Category 2  Category 3 ... │
│  Category 5  Category 6  Category 7 ... │
├─────────────────────────────────────────┤
│ Product 1 Product 2 Product 3 Product 4 │
│ Product 5 Product 6                     │
├─────────────────────────────────────────┤
│   Brand 1    Brand 2    Brand 3 ...    │
├─────────────────────────────────────────┤
│          NEWSLETTER SECTION             │
├─────────────────────────────────────────┤
│            FOOTER                       │
└─────────────────────────────────────────┘
```

### Tablet View (768px - 1024px)

```
┌─────────────────────────────┐
│      HEADER (sticky)        │
├─────────────────────────────┤
│           HERO              │
├─────────────────────────────┤
│  Category 1  Category 2     │
│  Category 3  Category 4     │
├─────────────────────────────┤
│  Product 1   Product 2      │
│  Product 3   Product 4      │
├─────────────────────────────┤
│   Brand 1    Brand 2        │
│   Brand 3    Brand 4        │
├─────────────────────────────┤
│   NEWSLETTER SECTION        │
├─────────────────────────────┤
│        FOOTER               │
└─────────────────────────────┘
```

### Mobile View (<768px)

```
┌──────────────────┐
│  HEADER (sticky) │
├──────────────────┤
│      HERO        │
├──────────────────┤
│   Category 1     │
│   Category 2     │
│   Category 3     │
│      ...         │
├──────────────────┤
│   Product 1      │
│   Product 2      │
│   Product 3      │
│      ...         │
├──────────────────┤
│    Brand 1       │
│    Brand 2       │
│      ...         │
├──────────────────┤
│   NEWSLETTER     │
├──────────────────┤
│      FOOTER      │
└──────────────────┘
```

---

## Feature Locations

### Products with Offers

```
Locations where products appear:
├── Home Page - Featured section (6 products)
│   └── ProductCard shows offer badges
├── CategoryPage - Filtered products
│   └── ProductCard shows offer badges
└── Only 2 products have offers:
    ├── Okra (25% OFF)
    └── Aashirvaad Flour (20% OFF)
```

### Newsletter Signup

```
Locations:
├── Home Page
│   └── Newsletter Section with email input
└── (Only on home page)
```

### Contact Form

```
Locations:
├── Contact Page (/contact)
│   └── Full contact form
└── About Page (/about)
    └── Link to Contact Page
```

---

## Interactive Elements

### Clickable Elements

**Navigation:**

- Logo → Home
- Nav menu links → Pages
- Breadcrumb links → Previous pages

**Product Browsing:**

- Category cards → Category page
- "View All" links → Full category/brand pages
- Product cards → (Expandable for detail page)

**Forms:**

- Newsletter input → Subscribe
- Contact form → Send message

**Hover Effects:**

- All cards have hover animations
- Buttons have hover states
- Links have color changes

---

## Category Slug Reference

Used for dynamic routing:

```
/category/fruits-vegetables       → 5 products
/category/indian-snacks           → 3 products
/category/frozen                  → 0 products (expandable)
/category/ghee-oils               → 0 products (expandable)
/category/ready-mixes             → 1 product
/category/sweets                  → 0 products (expandable)
/category/dry-fruits-nuts         → 0 products (expandable)
/category/flours                  → 2 products
/category/dals-beans              → 1 product
/category/ground-spices           → 2 products
/category/whole-spices            → 0 products (expandable)
/category/health-beauty           → 0 products (expandable)
```

---

## Color Scheme Usage

```
Primary Green (#2d5016):
├── Header background
├── Buttons
├── Links
├── Titles
└── Accents

Dark Green (#1f3710):
├── Hover states
├── Button hover
└── Active links

Gold (#ffd700):
├── Subscribe button
├── Accent elements
└── Hover highlights

White & Gray:
├── Backgrounds
├── Text
├── Borders
└── Cards
```

---

## This visualization shows:

✅ How pages connect
✅ Where components appear
✅ Navigation flow
✅ URL structure
✅ Responsive breakpoints
✅ Data relationships
✅ Component usage

**Perfect for understanding the complete site structure!**
