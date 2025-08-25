import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Cookie, Shield, Settings, Calendar } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function CookiePolicyPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation categories={categories} />
      
      <main>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6">
                Privacy & Cookies
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-hero text-slate-900 mb-6 leading-tight">
                Cookie Policy
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  & Data Usage
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Learn how we use cookies and similar technologies to enhance your browsing experience on FunVault.
              </p>
              <div className="flex items-center justify-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Last updated: January 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl text-heading text-slate-900 mb-6">What Are Cookies?</h2>
                <p className="text-slate-700 mb-6">
                  Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering your preferences and analyzing site usage.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">How We Use Cookies</h2>
                <ul className="list-disc pl-6 mb-6 text-slate-700">
                  <li><strong>Essential Functionality:</strong> Website operation and security</li>
                  <li><strong>Performance:</strong> Analyze usage and improve performance</li>
                  <li><strong>Personalization:</strong> Remember preferences and provide personalized content</li>
                  <li><strong>Advertising:</strong> Show relevant advertisements and measure effectiveness</li>
                  <li><strong>Analytics:</strong> Understand user behavior and improve content</li>
                </ul>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Third-Party Cookies</h2>
                <p className="text-slate-700 mb-4">We use third-party services that also use cookies:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700">
                  <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                  <li><strong>Google AdSense:</strong> Display relevant advertisements</li>
                  <li><strong>Social Media:</strong> Social sharing and integration</li>
                </ul>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Managing Cookie Preferences</h2>
                <p className="text-slate-700 mb-4">You can control cookies through:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700">
                  <li>Browser settings to refuse or delete cookies</li>
                  <li>Our cookie consent banner</li>
                  <li>Third-party opt-out mechanisms</li>
                </ul>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Your Rights</h2>
                <p className="text-slate-700 mb-6">
                  You have the right to accept/decline cookies, delete them from your device, request information about our cookie usage, and withdraw consent at any time.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Contact Us</h2>
                <p className="text-slate-700 mb-6">
                  If you have questions about our cookie usage, please <Link href="/contact" className="text-red-600 hover:text-red-800">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl text-heading text-slate-900 mb-6">Questions About Cookies?</h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                We're committed to transparency about how we use cookies. If you have any questions, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-lg font-medium transition-all duration-300">
                  Contact Us
                </Link>
                <Link href="/privacy-policy" className="inline-flex items-center justify-center px-8 py-3 border border-red-600 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all duration-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
