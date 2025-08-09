// Dynamic route - [id] means it can be any value
export default function BlogPost({ params }: { params: { id: string } }) {
  // Even though TypeScript shows 'string', it can actually be any value
  // Next.js converts everything to string in the URL
  
  // Let's check what type of value we received
  const isNumber = !isNaN(Number(params.id));
  const isString = typeof params.id === 'string';
  
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Dynamic Routes Explained</h1>
      
      <div className="bg-blue-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">🎯 How [id] Works:</h2>
        <p className="text-gray-800">You visited: <code className="bg-gray-200 px-2 py-1 rounded font-mono text-gray-800">/blog/{params.id}</code></p>
        <p className="text-gray-800">The <code className="bg-gray-200 px-2 py-1 rounded font-mono text-gray-800">[id]</code> folder captured: <code className="bg-gray-200 px-2 py-1 rounded font-mono text-gray-800">"{params.id}"</code></p>
        
        <div className="mt-4 p-3 bg-white rounded border">
          <h3 className="font-bold text-gray-800 mb-2">Value Analysis:</h3>
          <ul className="text-sm text-gray-800 space-y-1">
            <li>• <strong>Raw value:</strong> <code className="bg-gray-200 px-1 rounded text-gray-800">{params.id}</code></li>
            <li>• <strong>Type:</strong> <code className="bg-gray-200 px-1 rounded text-gray-800">{typeof params.id}</code></li>
            <li>• <strong>Is number?</strong> <code className="bg-gray-200 px-1 rounded text-gray-800">{isNumber ? 'Yes' : 'No'}</code></li>
            <li>• <strong>Length:</strong> <code className="bg-gray-200 px-1 rounded text-gray-800">{params.id.length}</code> characters</li>
          </ul>
        </div>
      </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-600 p-4 rounded bg-gray-800">
            <h3 className="font-bold mb-2 text-white">📁 File Structure:</h3>
            <pre className="text-sm bg-gray-700 p-3 rounded text-gray-200 font-mono">
{`app/
├── blog/
│   └── [id]/           # ← Accepts ANY value
│       └── page.tsx    # ← String, number, text, etc.`}
            </pre>
            <p className="text-sm text-gray-300 mt-2 font-medium">
              The [id] folder = "any value can go here"
            </p>
          </div>

          <div className="border border-gray-600 p-4 rounded bg-gray-800">
            <h3 className="font-bold mb-2 text-white">🔗 URL Examples:</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div><code className="bg-gray-700 px-1 rounded text-gray-200">/blog/123</code> → <code className="bg-gray-700 px-1 rounded text-gray-200">params.id = "123"</code> (number as string)</div>
              <div><code className="bg-gray-700 px-1 rounded text-gray-200">/blog/hello</code> → <code className="bg-gray-700 px-1 rounded text-gray-200">params.id = "hello"</code> (string)</div>
              <div><code className="bg-gray-700 px-1 rounded text-gray-200">/blog/my-post</code> → <code className="bg-gray-700 px-1 rounded text-gray-200">params.id = "my-post"</code> (string)</div>
              <div><code className="bg-gray-700 px-1 rounded text-gray-200">/blog/abc123</code> → <code className="bg-gray-700 px-1 rounded text-gray-200">params.id = "abc123"</code> (alphanumeric)</div>
            </div>
          </div>
        </div>

      <div className="mt-8 border border-gray-600 p-6 rounded bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">Type Handling:</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-white">1. Everything is a String</h3>
            <p className="text-gray-300">URLs are always strings, so <code className="bg-gray-700 px-1 rounded text-gray-200">params.id</code> is always a string, even if it looks like a number!</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">2. You Can Convert Types</h3>
            <p className="text-gray-300">If you need a number: <code className="bg-gray-700 px-1 rounded text-gray-200">const numId = parseInt(params.id)</code></p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">3. Validation is Up to You</h3>
            <p className="text-gray-300">Next.js doesn't validate types - you handle validation in your component</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Test Different Types:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/blog/123" className="block p-4 border border-gray-600 rounded hover:bg-gray-700 text-center bg-gray-800">
            <div className="font-bold text-white">/blog/123</div>
            <div className="text-sm text-gray-300">Number</div>
          </a>
          <a href="/blog/hello-world" className="block p-4 border border-gray-600 rounded hover:bg-gray-700 text-center bg-gray-800">
            <div className="font-bold text-white">/blog/hello-world</div>
            <div className="text-sm text-gray-300">String</div>
          </a>
          <a href="/blog/abc123" className="block p-4 border border-gray-600 rounded hover:bg-gray-700 text-center bg-gray-800">
            <div className="font-bold text-white">/blog/abc123</div>
            <div className="text-sm text-gray-300">Alphanumeric</div>
          </a>
          <a href="/blog/special@#$%" className="block p-4 border border-gray-600 rounded hover:bg-gray-700 text-center bg-gray-800">
            <div className="font-bold text-white">/blog/special@#$%</div>
            <div className="text-sm text-gray-300">Special chars</div>
          </a>
        </div>
        <p className="text-sm text-gray-300 mt-4 text-center">
          All these URLs work with the same component!
        </p>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 rounded">
        <h3 className="font-bold mb-2 text-gray-800">💡 Key Points:</h3>
        <ul className="text-gray-800 space-y-1">
          <li>• <code className="bg-gray-200 px-1 rounded text-gray-800">[id]</code> accepts <strong>any value</strong> (string, number, special characters)</li>
          <li>• Everything becomes a <strong>string</strong> in <code className="bg-gray-200 px-1 rounded text-gray-800">params.id</code></li>
          <li>• You handle <strong>type conversion</strong> and <strong>validation</strong> yourself</li>
          <li>• URLs are <strong>case-sensitive</strong> and <strong>space-sensitive</strong></li>
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
