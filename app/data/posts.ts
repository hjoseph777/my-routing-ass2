export interface Post {
  id: number;
  title: string;
  content: string;
  date?: string;
  author?: string;
  excerpt?: string;
}

export const posts: Post[] = [
  { 
    id: 1, 
    title: "Getting Started with Next.js", 
    content: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application. You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.",
    date: "2023-05-15",
    author: "Jane Doe",
    excerpt: "Learn the basics of Next.js and how to create your first application."
  },
  { 
    id: 2, 
    title: "Understanding the App Router in Next.js 13", 
    content: "The App Router is a new paradigm in Next.js that allows you to create routes by defining directories and files. This approach provides a more intuitive way to structure your application and enables advanced features like layout nesting, loading states, error handling, and more. The App Router works with both server and client components, giving you fine-grained control over which parts of your application should be rendered where.",
    date: "2023-06-22", 
    author: "John Smith",
    excerpt: "Dive deep into the new routing system in Next.js 13 and beyond."
  },
  { 
    id: 3, 
    title: "Server Components vs Client Components", 
    content: "React Server Components allow you to write UI that can be rendered and cached on the server. They reduce the client-side JavaScript bundle size, which leads to improved performance. Client Components are the traditional React components that we're all familiar with. They have full interactivity, access to browser APIs and maintain state. Next.js 13 gives you the flexibility to choose the right component for each use case in your application.",
    date: "2023-07-10",
    author: "Alex Johnson",
    excerpt: "Learn when to use Server vs Client components for optimal performance."
  }
];
