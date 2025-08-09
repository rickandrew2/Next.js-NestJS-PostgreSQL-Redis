// This is a Server Component that fetches data
async function getData() {
  // Simulate API call
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store' // Don't cache this request
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function DataFetchingPage() {
  const data = await getData();
  
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Next.js Data Fetching</h1>
      
      <div className="bg-green-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">✅ Server-Side Data Fetching:</h2>
        <p className="text-gray-800">This data was fetched on the server before the page was sent to your browser!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">React (MERN) Way:</h3>
          <pre className="text-sm bg-gray-700 p-3 rounded text-gray-200 font-mono">
{`// Client-side fetching
useEffect(() => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);`}
          </pre>
          <p className="text-sm text-gray-300 mt-2 font-medium">
            ❌ Fetches in browser, slower, no SEO
          </p>
        </div>

        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">Next.js Way:</h3>
          <pre className="text-sm bg-gray-700 p-3 rounded text-gray-200 font-mono">
{`// Server-side fetching
async function getData() {
  const res = await fetch('...');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}`}
          </pre>
          <p className="text-sm text-gray-300 mt-2 font-medium">
            ✅ Fetches on server, faster, better SEO
          </p>
        </div>
      </div>

      <div className="mt-8 border border-gray-600 p-6 rounded bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">Fetched Data:</h2>
        <div className="bg-white p-4 rounded border">
          <h3 className="font-bold text-lg mb-2 text-gray-800">{data.title}</h3>
          <p className="text-gray-700">{data.body}</p>
          <p className="text-sm text-gray-500 mt-2">User ID: {data.userId}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Data Fetching Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>⚡ Faster page loads (data ready on server)</li>
          <li>🔍 Better SEO (content in HTML)</li>
          <li>🔒 Secure (API keys stay on server)</li>
          <li>📱 Better mobile performance</li>
          <li>🔄 Automatic caching and revalidation</li>
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
