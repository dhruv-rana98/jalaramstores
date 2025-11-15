# Component Architecture & Usage Guide

## Overview

JalaRam Stores uses a **component-based architecture** with **6 reusable components** and **6 page components** connected via **React Router**.

---

## Reusable Components

### 1. Header Component

**File:** `src/components/Header.jsx`
**CSS:** `src/styles/Header.css`

**Props:** None (uses React Router hooks internally)

**Features:**

- Logo with link to home
- Navigation menu (Home, Categories, Brands, About, Contact)
- Search, cart, and account icons
- Sticky positioning
- Responsive hamburger menu ready

**Usage:**

```jsx
import Header from "./components/Header";
<Header />;
```

---

### 2. Footer Component

**File:** `src/components/Footer.jsx`
**CSS:** `src/styles/Footer.css`

**Props:** None

**Features:**

- 4 footer sections (About, Service, Policies, Social)
- Copyright information
- Multiple links organized by category
- Responsive grid layout

**Usage:**

```jsx
import Footer from "./components/Footer";
<Footer />;
```

---

### 3. Hero Component

**File:** `src/components/Hero.jsx`
**CSS:** `src/styles/Hero.css`

**Props:** None

**Features:**

- Welcome message and tagline
- 4 feature cards (Farm Fresh, Free Delivery, Quick Checkout, Support)
- Hero image section
- Responsive two-column layout

**Usage:**

```jsx
import Hero from "./components/Hero";
<Hero />;
```

---

### 4. ProductCard Component

**File:** `src/components/ProductCard.jsx`
**CSS:** `src/styles/ProductCard.css`

**Props:**

```jsx
product: {
  id: number,
  name: string,
  brand: string,
  price: number,
  image: string,
  size: string,
  description: string,
  offer: {
    originalPrice: number,
    discountPercent: number
  } | null
}
```

**Features:**

- Product image with hover zoom
- Product name and brand
- Size and description
- Price display (with strikethrough for discounts)
- "Add to Cart" button
- Offer badge (when applicable)
- Hover animations

**Usage:**

```jsx
import ProductCard from "./components/ProductCard";
import products from "../data/products.json";

{
  products.map((product) => <ProductCard key={product.id} product={product} />);
}
```

---

### 5. CategoryCard Component

**File:** `src/components/CategoryCard.jsx`
**CSS:** `src/styles/CategoryCard.css`

**Props:**

```jsx
category: {
  id: number,
  name: string,
  slug: string,
  image: string
}
```

**Features:**

- Category image with overlay
- Category name overlay
- Link to category page (via React Router)
- Hover animations with zoom effect
- Responsive sizing

**Usage:**

```jsx
import CategoryCard from "./components/CategoryCard";
import categories from "../data/categories.json";

{
  categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));
}
```

---

### 6. BrandCard Component

**File:** `src/components/BrandCard.jsx`
**CSS:** `src/styles/BrandCard.css`

**Props:**

```jsx
brand: {
  id: number,
  name: string,
  slug: string,
  image: string
}
```

**Features:**

- Brand logo/image
- Brand name
- Link to brand page (via React Router)
- Hover effects
- Centered layout

**Usage:**

```jsx
import BrandCard from "./components/BrandCard";
import brands from "../data/brands.json";

{
  brands.map((brand) => <BrandCard key={brand.id} brand={brand} />);
}
```

---

## Page Components

### 1. Home Page

**File:** `src/pages/Home.jsx`
**CSS:** `src/styles/Home.css`

**Features:**

- Hero section at top
- 8 featured categories
- 6 featured products
- 6 featured brands
- Newsletter signup section
- "View All" links to other pages

**Data Used:**

- products.json (first 6)
- categories.json (first 8)
- brands.json (first 6)

---

### 2. CategoriesPage

**File:** `src/pages/CategoriesPage.jsx`
**CSS:** `src/styles/CategoriesPage.css`

**Features:**

- Page header with description
- Breadcrumb navigation
- All 12 categories in grid
- Responsive layout

**Data Used:**

- categories.json (all)

---

### 3. CategoryPage (Dynamic)

**File:** `src/pages/CategoryPage.jsx`
**CSS:** `src/styles/CategoryPage.css`

**Route Params:**

```jsx
const { slug } = useParams();
```

**Features:**

- Dynamic category header with image
- Category name displayed
- Breadcrumb navigation
- All products in category shown
- Product count displayed
- "No products" fallback

**Data Logic:**

```jsx
const category = categories.find((c) => c.slug === slug);
const categoryProducts = products.filter((p) => p.category === slug);
```

---

### 4. BrandsPage

**File:** `src/pages/BrandsPage.jsx`
**CSS:** `src/styles/BrandsPage.css`

**Features:**

- Page header
- Breadcrumb navigation
- All 6 brands in grid
- Responsive layout

**Data Used:**

- brands.json (all)

---

### 5. About Page

**File:** `src/pages/About.jsx`
**CSS:** `src/styles/About.css`

**Features:**

- About story section
- Mission statement
- Why choose us list (6 points)
- Contact page link
- Breadcrumb navigation

---

### 6. Contact Page

**File:** `src/pages/Contact.jsx`
**CSS:** `src/styles/Contact.css`

**Features:**

- Contact information (address, phone, email, hours)
- Contact form with validation
- Form fields: Name, Email, Subject, Message
- Submit button with success message
- Breadcrumb navigation
- Two-column layout on desktop, single column on mobile

---

## Routing Structure

**File:** `src/App.jsx`

```jsx
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/category/:slug" element={<CategoryPage />} />
    <Route path="/brands" element={<BrandsPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</BrowserRouter>
```

---

## Data Flow

### Product to Display

1. **Data Source:** `src/data/products.json`
2. **Import:** `import products from '../data/products.json'`
3. **Filter (if needed):** `products.filter(p => p.category === slug)`
4. **Map to Components:** `products.map(p => <ProductCard product={p} />)`
5. **Display:** ProductCard renders with all product info

### Category Selection Flow

1. User clicks CategoryCard
2. Link navigates to `/category/:slug`
3. CategoryPage loads with params
4. Products filtered by category slug
5. ProductCards display filtered products

---

## Styling Strategy

### Global Styles

- **File:** `src/index.css`
- Font family, colors, defaults
- Applied to all components

### Component Styles

- Each component has its own CSS file
- Self-contained styles
- Media queries for responsive design
- Breakpoint: 768px for mobile

### Color Scheme

```
Primary Green:  #2d5016
Dark Green:     #1f3710
Gold Accent:    #ffd700
Light Gray:     #f5f5f5
Border Gray:    #e0e0e0
Text Color:     #333333
```

---

## Responsive Design

### Grid Layouts

- Desktop: Full grid display
- Tablet: Reduced grid columns
- Mobile: Single column or 2-column grid

### Example from ProductCard Grid

```css
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
```

### Mobile Breakpoint

```css
@media (max-width: 768px) {
  /* Adjust layouts for mobile */
}
```

---

## Component Reusability

### ProductCard

Used in:

- Home page (featured section)
- CategoryPage (filtered by category)

### CategoryCard

Used in:

- Home page (featured categories)
- CategoriesPage (all categories)

### BrandCard

Used in:

- Home page (featured brands)
- BrandsPage (all brands)

### Header & Footer

Used in:

- All pages (via App.jsx)

---

## Adding New Pages

### Template

```jsx
import { Link } from "react-router-dom";
import "../styles/NewPage.css";

export default function NewPage() {
  return (
    <div className="new-page">
      <div className="page-header">
        <h1>Page Title</h1>
      </div>
      {/* Content here */}
    </div>
  );
}
```

### Steps to Add

1. Create file in `src/pages/NewPage.jsx`
2. Create CSS in `src/styles/NewPage.css`
3. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add link in Header or other pages:
   ```jsx
   <Link to="/new-page">New Page</Link>
   ```

---

## Best Practices Used

1. **Component Composition** - Small, focused components
2. **Prop Passing** - Data flows down via props
3. **JSON Data** - Easy to add/modify content
4. **CSS Organization** - One file per component
5. **React Router** - Clean URL structure
6. **Responsive Design** - Mobile-first approach
7. **Semantic HTML** - Proper HTML structure
8. **Accessibility** - Links, buttons, forms

---

## Performance Optimizations

1. **External Images** - Using Unsplash URLs (no local assets)
2. **Efficient Rendering** - Components only re-render when needed
3. **CSS Optimization** - Minimal CSS, efficient selectors
4. **Lazy Routes** - Pages loaded on demand via Router
5. **JSON Data** - No API calls, instant data access

---

## Testing Components Locally

### Test ProductCard

```jsx
import ProductCard from "./components/ProductCard";

const testProduct = {
  id: 1,
  name: "Test Product",
  price: 10.99,
  image: "image-url",
  brand: "Brand",
  size: "500g",
  description: "Test",
  offer: null,
};

<ProductCard product={testProduct} />;
```

### Test Routing

```bash
npm run dev
# Navigate to http://localhost:5173/category/fruits-vegetables
```

---

## Common Customizations

### Change Product Grid Columns

Edit `src/styles/Home.css`:

```css
.products-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

### Change Button Color

Edit `src/styles/ProductCard.css`:

```css
.add-to-cart-btn {
  background: #your-color;
}
```

### Add New Category Section

Edit `src/pages/Home.jsx`:

```jsx
<section>{/* Your new section */}</section>
```

---

## Troubleshooting

### Products not showing on category page?

- Check product `category` field matches page slug
- Verify JSON syntax

### Route not working?

- Check route in App.jsx matches link href
- Check component name is correct

### Styles not applied?

- Verify CSS file is imported
- Check class names match between JSX and CSS
- Clear browser cache

---

## Summary

✅ **6 Reusable Components** with clear responsibilities
✅ **6 Page Components** for each section
✅ **React Router** for seamless navigation
✅ **JSON Data** for easy content management
✅ **Responsive CSS** for all devices
✅ **Clean Architecture** for maintainability

This structure makes it easy to:

- Add new products
- Add new categories
- Add new pages
- Customize styling
- Extend functionality

**Happy building! 🚀**
