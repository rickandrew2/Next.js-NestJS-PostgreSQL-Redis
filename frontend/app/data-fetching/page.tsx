// This is a Server Component that fetches data
async function getData() {
  // Fetch from our NestJS backend instead of external API
  const res = await fetch('http://localhost:3001/published/1', {
    cache: 'no-store' // Don't cache this request
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data from NestJS backend');
  }
  
  return res.json();
}

async function getAllPublished() {
  // Fetch all published items from our backend
  const res = await fetch('http://localhost:3001/published', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch all published items');
  }
  
  return res.json();
}

export default async function DataFetchingPage() {
  const data = await getData();
  const allPublished = await getAllPublished();
  
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Next.js + NestJS Data Fetching</h1>
      
      <div className="bg-green-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">✅ Connected to NestJS Backend!</h2>
        <p className="text-gray-800">This data is now coming from your own NestJS backend instead of an external API!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">MERN (Express.js) Way:</h3>
          <pre className="text-sm bg-gray-700 p-3 rounded text-gray-200 font-mono">
{`// Manual validation
app.post('/posts', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ 
      error: 'Title is required' 
    });
  }
  // ... more validation
});`}
          </pre>
          <p className="text-sm text-gray-300 mt-2 font-medium">
            ❌ Manual validation, repetitive code
          </p>
        </div>

        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">NestJS Way:</h3>
          <pre className="text-sm bg-gray-700 p-3 rounded text-gray-200 font-mono">
{`// Automatic validation with decorators
@Post()
create(@Body() createDto: CreatePublishedDto) {
  // Validation happens automatically!
  return this.service.create(createDto);
}`}
          </pre>
          <p className="text-sm text-gray-300 mt-2 font-medium">
            ✅ Automatic validation, clean code
          </p>
        </div>
      </div>

      <div className="mt-8 border border-gray-600 p-6 rounded bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">Fetched Data from NestJS Backend:</h2>
        <div className="bg-white p-4 rounded border">
          <h3 className="font-bold text-lg mb-2 text-gray-800">{data.title}</h3>
          <p className="text-gray-700">{data.body}</p>
          <p className="text-sm text-gray-500 mt-2">User ID: {data.userId}</p>
          <p className="text-sm text-gray-500">Created: {new Date(data.createdAt).toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-8 border border-gray-600 p-6 rounded bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">All Published Items:</h2>
        <div className="space-y-4">
          {allPublished.map((item: any) => (
            <div key={item.id} className="bg-white p-4 rounded border">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-700">{item.body}</p>
              <p className="text-sm text-gray-500 mt-2">ID: {item.id} | User ID: {item.userId}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">NestJS Backend Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>🛡️ <strong>Validation:</strong> Automatic data validation with decorators</li>
          <li>🔐 <strong>Authentication:</strong> Guards protect your endpoints</li>
          <li>⚡ <strong>Type Safety:</strong> TypeScript prevents runtime errors</li>
          <li>🏗️ <strong>Modular:</strong> Clean, organized code structure</li>
          <li>🔄 <strong>Dependency Injection:</strong> Automatic service wiring</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-blue-100 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">🔧 Test Your Backend:</h3>
        <p className="text-blue-700 text-sm">
          Try these endpoints in your browser or Postman:
        </p>
        <ul className="text-blue-700 text-sm mt-2 space-y-1">
          <li>• <code>GET http://localhost:3001/published</code> - Get all items (Public)</li>
          <li>• <code>GET http://localhost:3001/published/1</code> - Get item by ID (Public)</li>
          <li>• <code>POST http://localhost:3001/published</code> - Create new item (Protected - needs auth)</li>
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
