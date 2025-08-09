import Image from "next/image";
import Link from "next/link";
import ServerComponent from "./components/ServerComponent";
import ClientComponent from "./components/ClientComponent";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <ServerComponent />
          <ClientComponent />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          <Link 
            href="/image-demo"
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold mb-2">📸 Image Optimization</h3>
            <p className="text-sm text-gray-600">Learn about Next.js Image component</p>
          </Link>
          
          <Link 
            href="/link-demo"
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold mb-2">🔗 Link Component</h3>
            <p className="text-sm text-gray-600">Client-side navigation with Link</p>
          </Link>
          
          <Link 
            href="/metadata-demo"
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold mb-2">📝 Metadata API</h3>
            <p className="text-sm text-gray-600">SEO and page metadata</p>
          </Link>
          
          <Link 
            href="/about"
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold mb-2">📁 File-based Routing</h3>
            <p className="text-sm text-gray-600">See how folders become routes</p>
          </Link>
          
          <Link 
            href="/test"
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold mb-2">🧪 Test Page</h3>
            <p className="text-sm text-gray-600">Automatic route creation</p>
          </Link>
          
          <Link 
            href="/api/hello"
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold mb-2">⚡ API Routes</h3>
            <p className="text-sm text-gray-600">Backend endpoints in Next.js</p>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
