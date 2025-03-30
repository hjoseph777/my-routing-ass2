import { posts } from '@/app/data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

// Update the props type to match Next.js 13+ expectations
type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Add generateStaticParams function
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Post({ params }: Props) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return notFound();
  }

  const basePath = '/my-routing-ass2';

  return (
    <div>
      <PageHeader 
        title={post.title}
        description={post.author ? `Written by ${post.author} on ${post.date}` : undefined}
      />
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-6">
          <Link 
            href={`${basePath}/`}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600">{post.content}</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium mb-3">Share this post</h3>
          <div className="flex space-x-4">
            <button className="text-blue-600 hover:text-blue-800">Twitter</button>
            <button className="text-blue-600 hover:text-blue-800">Facebook</button>
            <button className="text-blue-600 hover:text-blue-800">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}
