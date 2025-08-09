import Image from 'next/image';

export default function ImageDemo() {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Next.js Image Optimization</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Regular HTML img - No optimization */}
        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">Regular HTML img:</h3>
          <img 
            src="https://picsum.photos/400/300" 
            alt="Regular image"
            className="w-full rounded"
          />
          <p className="text-sm text-gray-300 mt-2 font-medium">
            ❌ No optimization, loads full size
          </p>
        </div>

        {/* Next.js Image - Optimized */}
        <div className="border border-gray-600 p-4 rounded bg-gray-800">
          <h3 className="font-bold mb-2 text-white">Next.js Image:</h3>
          <Image 
            src="https://picsum.photos/400/300" 
            alt="Optimized image"
            width={400}
            height={300}
            className="w-full rounded"
            priority
          />
          <p className="text-sm text-gray-300 mt-2 font-medium">
            ✅ Automatic optimization, lazy loading, responsive
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Benefits of Next.js Image:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>🔄 Automatic format conversion (WebP, AVIF)</li>
          <li>📱 Responsive images for different screen sizes</li>
          <li>⚡ Lazy loading (only loads when visible)</li>
          <li>🎯 Blur placeholder while loading</li>
          <li>📦 Smaller file sizes</li>
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
