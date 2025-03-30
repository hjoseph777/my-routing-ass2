import Link from 'next/link';
import { posts } from './data/posts';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  return (
    <div>
      <PageHeader 
        title="Welcome to Our Blog"
        description="Explore our latest articles about web development, design patterns, and modern JavaScript frameworks."
      />
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post.id} className="card card-bordered p-6">
              <h2 className="text-xl font-bold mb-3 text-gray-100">{post.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-2">{post.content}</p>
              <Link 
                href={`/posts/${post.id}`}
                className="inline-flex items-center font-medium text-blue-400 hover:text-blue-300"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
