export default function ComponentsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Components Page</h1>
      
      <div className="bg-yellow-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 Important Discovery:</h2>
        <p className="text-gray-800">This page exists because there's a <code className="bg-gray-200 px-1 rounded text-gray-800">page.tsx</code> file in the components folder!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">✅ This Works:</h3>
          <p className="text-sm text-gray-300">
            <code className="bg-gray-700 px-1 rounded text-gray-200">app/components/page.tsx</code> → <code className="bg-gray-700 px-1 rounded text-gray-200">/components</code>
          </p>
        </div>

        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">❌ This Doesn't Work:</h3>
          <p className="text-sm text-gray-300">
            <code className="bg-gray-700 px-1 rounded text-gray-200">app/components/Header.tsx</code> → <code className="bg-gray-700 px-1 rounded text-gray-200">/components/Header</code> (404 error)
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">The Rule:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>📁 Folders create URL structure</li>
          <li>📄 Only <code className="bg-gray-700 px-1 rounded text-gray-200">page.tsx</code> files become routes</li>
          <li>🔧 Other files are just components/utilities</li>
          <li>🚫 No <code className="bg-gray-700 px-1 rounded text-gray-200">page.tsx</code> = no route</li>
        </ul>
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
