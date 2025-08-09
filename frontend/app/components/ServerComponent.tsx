// This is a Server Component (default in Next.js)
export default function ServerComponent() {
  // This runs on the SERVER
  const serverTime = new Date().toISOString();
  
  return (
    <div className="bg-green-100 p-4 rounded">
      <h3>Server Component</h3>
      <p>This renders on the server</p>
      <p>Server time: {serverTime}</p>
      <p className="text-sm text-gray-600">
        ✅ Better SEO, faster loading, smaller bundle
      </p>
    </div>
  );
}
