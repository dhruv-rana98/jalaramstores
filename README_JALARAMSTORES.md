- **Header** - Navigation with logo and icons
- **Footer** - Links and company information
- **Product Cards** - Display products with prices, offers, and add-to-cart buttons
- **Category Cards** - Browse product categories with images
- **Brand Cards** - Shop by trusted brands
- **Hero Section** - Welcome banner with features

### 🛣️ React Router Navigation

- **Home Page** - Featured products and categories
- **Categories Page** - Browse all product categories
- **Dynamic Category Pages** - Products filtered by category slug
- **Brands Page** - Shop by brands
- **About Page** - Company information
- **Contact Page** - Contact form and store details

### 📊 Data Management

- **JSON-based products** - Easy to add/modify products
- **JSON-based categories** - Organise products into categories
- **JSON-based brands** - Featured brand listings
- No backend required - purely display site

### 🎨 Responsive Design

- Mobile-first approach
- Fully responsive layouts
- CSS Grid and Flexbox
- Touch-friendly interface
- Smooth animations and transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── Footer.jsx              # Footer component
│   ├── Hero.jsx                # Hero section
│   ├── ProductCard.jsx         # Product card component
│   ├── CategoryCard.jsx        # Category card component
│   └── BrandCard.jsx           # Brand card component
│
├── pages/
│   ├── Home.jsx                # Home page
│   ├── CategoriesPage.jsx      # All categories listing
│   ├── CategoryPage.jsx        # Single category view
│   ├── BrandsPage.jsx          # All brands listing
│   ├── About.jsx               # About us page
│   └── Contact.jsx             # Contact page
│
├── data/
│   ├── products.json           # Product catalogue
│   ├── categories.json         # Category data
│   └── brands.json             # Brand data
│
├── styles/
│   ├── Header.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── ProductCard.css
│   ├── CategoryCard.css
│   ├── BrandCard.css
│   ├── Home.css
│   ├── CategoriesPage.css
│   ├── BrandsPage.css
│   ├── CategoryPage.css
│   ├── About.css
│   └── Contact.css
│
├── App.jsx                     # Main app with routes
├── App.css                     # App layout styles
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📊 Data Formats

### Product Format (src/data/products.json)

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "category-slug",
  "price": 10.99,
  "image": "image-url",
  "size": "Package size",
  "brand": "Brand Name",
  "offer": {
    "originalPrice": 12.99,
    "discountPercent": 15
  },
  "description": "Product description"
}
```

### Category Format (src/data/categories.json)

```json
{
  "id": 1,
  "name": "Category Name",
  "slug": "category-slug",
  "image": "image-url"
}
```

### Brand Format (src/data/brands.json)

```json
{
  "id": 1,
  "name": "Brand Name",
  "slug": "brand-slug",
  "image": "image-url"
}
```

## 🗺️ Routes

| Route             | Component      | Description                     |
| ----------------- | -------------- | ------------------------------- |
| `/`               | Home           | Homepage with featured products |
| `/categories`     | CategoriesPage | Browse all categories           |
| `/category/:slug` | CategoryPage   | Products in category            |
| `/brands`         | BrandsPage     | Browse all brands               |
| `/about`          | About          | About us information            |
| `/contact`        | Contact        | Contact form                    |

## 🎨 Customization

### Adding Products

1. Edit `src/data/products.json`
2. Add new product objects
3. Products appear on category pages automatically

### Adding Categories

1. Edit `src/data/categories.json`
2. Add new category objects with unique slugs
3. Categories appear on categories page

### Styling

- Each component has its own CSS file in `src/styles/`
- Global styles in `src/index.css`
- Color scheme: Green (#2d5016) and Gold (#ffd700)

### Colors Used

- Primary Green: `#2d5016`
- Dark Green: `#1f3710`
- Gold Accent: `#ffd700`
- Background: `#ffffff`
- Text: `#333333`

## 🛠️ Technologies

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool & dev server
- **CSS3** - Styling (Flexbox & Grid)
- **JSON** - Data storage

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ✅ Features Implemented

- ✅ Reusable React components
- ✅ React Router navigation
- ✅ JSON-based product mapping
- ✅ Responsive design
- ✅ Product filtering by category
- ✅ Brand browsing
- ✅ Contact form
- ✅ About page
- ✅ Smooth animations
- ✅ Mobile-optimized
- ✅ Newsletter signup
- ✅ Product offer badges

## 🚫 What's NOT Included

- Shopping cart functionality (display only)
- Payment processing
- User authentication
- Backend API
- Database integration
- Order management

## 📝 Notes

This is a **display-only website** designed to showcase products and categories similar to Gayatri Store UK. It focuses on:

- Beautiful product presentation
- Easy category browsing
- Responsive user experience
- Clean, maintainable code structure

Perfect for:

- E-commerce storefronts
- Product catalogues
- Portfolio projects
- Learning React Router & components

## 🔄 Next Steps

To extend this project:

1. Add a shopping cart feature
2. Integrate payment gateway
3. Add user authentication
4. Connect to backend API
5. Implement search functionality
6. Add product filtering and sorting
7. Add customer reviews
8. Implement admin dashboard

## 📄 Licence

This project is open source and available under the MIT Licence.

---

**Happy Shopping! 🛒**
