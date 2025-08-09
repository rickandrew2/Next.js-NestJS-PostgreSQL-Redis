import Link from 'next/link';

export default function LinkDemo() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Next.js Link Component</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Regular anchor tag */}
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Regular &lt;a&gt; tag:</h3>
          <a 
            href="/" 
            className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Go to Home (Full page reload)
          </a>
          <p className="text-sm text-gray-800 mt-2 font-medium">
            ❌ Full page reload, slower navigation
          </p>
        </div>

        {/* Next.js Link */}
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Next.js Link:</h3>
          <Link 
            href="/" 
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Home (Client-side navigation)
          </Link>
          <p className="text-sm text-gray-800 mt-2 font-medium">
            ✅ Instant navigation, no page reload
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Link Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>⚡ Instant navigation (no page reload)</li>
          <li>🎯 Prefetching (loads pages in background)</li>
          <li>📱 Better mobile performance</li>
          <li>🔄 Maintains app state</li>
          <li>🎨 Smooth transitions</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 rounded">
        <h3 className="font-bold mb-2">💡 Pro Tip:</h3>
        <p>Use <code className="bg-gray-200 px-1 rounded">Link</code> for internal navigation, use <code className="bg-gray-200 px-1 rounded">&lt;a&gt;</code> for external links.</p>
      </div>

      <Link 
        href="/" 
        className="mt-8 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
