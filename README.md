# Next.js Routing Demo [Visit the project](https://hjoseph777.github.io/my-routing-ass2/)

## Project Overview

This project demonstrates modern routing capabilities in Next.js using the App Router pattern. It was created as a student assignment to showcase understanding of routing concepts, page layouts, and data handling in Next.js applications.

The demo blog includes multiple pages with different routing patterns including static routes (Home, About, Contact) and dynamic routes (individual blog posts), all styled with a consistent dark theme with glossy white headers and footers.

## App Router vs Pages Router
While the assignment originally suggested using the Pages Router (with index.js files), this project implements the newer App Router pattern because:

 **Layouts**: Easily create nested layouts that preserve state and avoid re-rendering ([View Code](./app/layout.tsx))
- **Server Components**: Better performance through automatic server rendering ([View Example](./app/page.tsx))
- **Industry Standard**: The App Router is now the recommended approach for all new Next.js applications

## Key Files

- [**app/layout.tsx**](./app/layout.tsx): Root layout with navigation and footer that wraps all pages
- [**app/page.tsx**](./app/page.tsx): Home page displaying all blog posts
- [**app/posts/[id]/page.tsx**](./app/posts/[id]/page.tsx): Dynamic page for individual blog posts
- [**app/about/page.tsx**](./app/about/page.tsx): About page with team information
- [**app/contact/page.tsx**](./app/contact/page.tsx): Contact form page
- [**app/globals.css**](./app/globals.css): Global styles for the application
- [**components/Navigation.tsx**](./components/Navigation.tsx): Navigation component with active link highlighting
- [**components/PageHeader.tsx**](./components/PageHeader.tsx): Reusable page header component
- [**app/data/posts.ts**](./app/data/posts.ts): Blog post data

## Features

- **Dynamic Routing**: Individual blog posts with dynamic paths
- **Data Fetching**: Simulated data fetching from local data source
- **Form Handling**: Client-side form with validation and submission
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Visual Design**: Dark theme with glossy white headers and custom card styling

## Project Structure
````
my-routing-ass2/
├── app/                         # Main application directory (App Router)
│   ├── about/                   # About page route
│   │   └── page.tsx             # About page component
│   ├── contact/                 # Contact page route
│   │   └── page.tsx             # Contact page component
│   ├── data/                    # Data directory
│   │   └── posts.ts             # Blog post data
│   ├── posts/                    # Posts routes
│   │   └── [id]/                # Dynamic route for individual posts
│   │       └── page.tsx         # Post detail page component
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page component (root route)
├── components/                  # Reusable components
│   ├── Navigation.tsx           # Navigation bar component
│   └── PageHeader.tsx           # Page header component
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies and scripts
````
