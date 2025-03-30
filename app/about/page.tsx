import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <div>
      <PageHeader 
        title="About Us"
        description="Learn more about our company and mission"
      />
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            This is a demonstration of Next.js App Router capabilities.
            We're showcasing routing features including static and dynamic routes.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide a clear and comprehensive example of Next.js routing
            capabilities, helping developers understand modern web application architecture.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md card card-bordered">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Jane Doe</h3>
              <p className="text-gray-300">Front-end Developer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md card card-bordered">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">John Smith</h3>
              <p className="text-gray-300">Back-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
