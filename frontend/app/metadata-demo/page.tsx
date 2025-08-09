import { Metadata } from 'next';

// This is the metadata API - replaces <head> tags
export const metadata: Metadata = {
  title: 'Metadata Demo - Next.js Learning',
  description: 'Learn how Next.js handles SEO and metadata',
  keywords: ['Next.js', 'React', 'SEO', 'Metadata'],
  openGraph: {
    title: 'Metadata Demo - Next.js Learning',
    description: 'Learn how Next.js handles SEO and metadata',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MetadataDemo() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Next.js Metadata API</h1>
      
      <div className="bg-green-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">✅ What's happening:</h2>
        <p>This page automatically generates proper HTML head tags:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-800 font-mono">
          <li>&lt;title&gt;Metadata Demo - Next.js Learning&lt;/title&gt;</li>
          <li>&lt;meta name="description" content="..."&gt;</li>
          <li>&lt;meta property="og:title" content="..."&gt;</li>
          <li>&lt;meta name="robots" content="index, follow"&gt;</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Traditional React:</h3>
          <pre className="text-sm bg-gray-200 p-3 rounded text-gray-800 font-mono">
{`// You'd need react-helmet or similar
<Helmet>
  <title>My Page</title>
  <meta name="description" content="..." />
</Helmet>`}
          </pre>
          <p className="text-sm text-gray-800 mt-2 font-medium">
            ❌ Requires extra library, more setup
          </p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Next.js Metadata:</h3>
          <pre className="text-sm bg-gray-200 p-3 rounded text-gray-800 font-mono">
{`// Just export metadata object
export const metadata = {
  title: 'My Page',
  description: '...',
}`}
          </pre>
          <p className="text-sm text-gray-800 mt-2 font-medium">
            ✅ Built-in, automatic, type-safe
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Metadata Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>🔍 Better SEO out of the box</li>
          <li>📱 Social media sharing (Open Graph)</li>
          <li>🎯 TypeScript support</li>
          <li>⚡ Server-side rendering</li>
          <li>🔄 Dynamic metadata based on data</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-blue-100 rounded">
        <h3 className="font-bold mb-2">🔍 Check the page source:</h3>
        <p>Right-click → "View Page Source" to see the generated HTML head tags!</p>
      </div>

      <a 
        href="/" 
        className="mt-8 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ← Back to Home
      </a>
    </div>
  );
}
