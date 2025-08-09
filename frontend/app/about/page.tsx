import AboutHeader from './header';
import AboutFooter from './footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <AboutHeader />
      
      <div className="flex items-center justify-center flex-1">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">About Page</h1>
          <p className="text-lg text-gray-300">
            This is the about page. Notice how the URL is /about!
          </p>
          <p className="text-sm text-gray-400 mt-2">
            This page uses components from the same folder
          </p>
          <a 
            href="/" 
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go back home
          </a>
        </div>
      </div>
      
      <AboutFooter />
    </div>
  );
}
