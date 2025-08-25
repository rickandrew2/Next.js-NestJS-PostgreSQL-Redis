import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { AlertTriangle, Calendar } from 'lucide-react';

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

export default async function DisclaimerPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation categories={categories} />
      
      <main>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6">
                Legal Notice
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-hero text-slate-900 mb-6 leading-tight">
                Disclaimer
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  & Legal Information
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Important information about the content, accuracy, and use of information on FunVault.
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
                <h2 className="text-3xl text-heading text-slate-900 mb-6">General Information</h2>
                <p className="text-slate-700 mb-6">
                  The information provided on FunVault is for general informational and entertainment purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the information.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Gaming Content Disclaimer</h2>
                <p className="text-slate-700 mb-4">Our gaming content is provided for educational and entertainment purposes:</p>
                <ul className="list-disc pl-6 mb-6 text-slate-700">
                  <li>Gaming strategies may not work for all players</li>
                  <li>Game mechanics may change with updates</li>
                  <li>Individual results may vary</li>
                  <li>We are not affiliated with game developers unless stated</li>
                </ul>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">External Links</h2>
                <p className="text-slate-700 mb-6">
                  FunVault contains links to external websites. We have no control over their content and are not responsible for external website content.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Health and Safety</h2>
                <p className="text-slate-700 mb-6">
                  Gaming should be enjoyed responsibly. Take regular breaks, maintain proper posture, and balance gaming with other activities.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Limitation of Liability</h2>
                <p className="text-slate-700 mb-6">
                  In no event shall FunVault be liable for any loss or damage arising from the use of this website.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-700 mb-6">
                  If you have questions about this disclaimer, please <Link href="/contact" className="text-red-600 hover:text-red-800">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl text-heading text-slate-900 mb-6">Questions About Our Disclaimer?</h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                We're committed to transparency and legal compliance. If you have any questions, please reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-lg font-medium transition-all duration-300">
                  Contact Us
                </Link>
                <Link href="/terms-of-service" className="inline-flex items-center justify-center px-8 py-3 border border-red-600 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all duration-300">
                  Terms of Service
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
