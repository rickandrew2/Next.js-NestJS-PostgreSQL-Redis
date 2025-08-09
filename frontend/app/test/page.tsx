export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="text-lg text-gray-600 mb-4">
          This page was created automatically just by creating a file!
        </p>
        <p className="text-sm text-gray-500">
          File: app/test/page.tsx → URL: /test
        </p>
        <a 
          href="/" 
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
