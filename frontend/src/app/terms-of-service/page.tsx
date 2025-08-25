import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { FileText, Shield, Users, Calendar } from 'lucide-react';

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

export default async function TermsOfServicePage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation categories={categories} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-red-50 border border-red-200 text-red-700 mb-6">
                Legal Information
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-hero text-slate-900 mb-6 leading-tight">
                Terms of Service
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  & User Agreement
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using FunVault. By accessing our website, you agree to be bound by these terms and conditions.
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

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl text-heading text-slate-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-slate-700 mb-6">
                  By accessing and using FunVault ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">2. Use License</h2>
                <p className="text-slate-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on FunVault's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-700">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on FunVault's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">3. Content and User Conduct</h2>
                <p className="text-slate-700 mb-4">
                  Users are responsible for their own content and behavior on our platform. We expect all users to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-700">
                  <li>Respect other users and their opinions</li>
                  <li>Not post harmful, offensive, or inappropriate content</li>
                  <li>Not engage in spam, harassment, or illegal activities</li>
                  <li>Follow community guidelines and gaming best practices</li>
                </ul>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">4. Privacy Policy</h2>
                <p className="text-slate-700 mb-6">
                  Your privacy is important to us. Please review our <Link href="/privacy-policy" className="text-red-600 hover:text-red-800">Privacy Policy</Link>, which also governs your use of the Website, to understand our practices.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">5. Disclaimer</h2>
                <p className="text-slate-700 mb-4">
                  The materials on FunVault's website are provided on an 'as is' basis. FunVault makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">6. Limitations</h2>
                <p className="text-slate-700 mb-6">
                  In no event shall FunVault or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FunVault's website, even if FunVault or a FunVault authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">7. Accuracy of Materials</h2>
                <p className="text-slate-700 mb-6">
                  The materials appearing on FunVault's website could include technical, typographical, or photographic errors. FunVault does not warrant that any of the materials on its website are accurate, complete, or current. FunVault may make changes to the materials contained on its website at any time without notice.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">8. Links</h2>
                <p className="text-slate-700 mb-6">
                  FunVault has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FunVault of the site. Use of any such linked website is at the user's own risk.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">9. Modifications</h2>
                <p className="text-slate-700 mb-6">
                  FunVault may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">10. Governing Law</h2>
                <p className="text-slate-700 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>

                <h2 className="text-3xl text-heading text-slate-900 mb-6">11. Contact Information</h2>
                <p className="text-slate-700 mb-6">
                  If you have any questions about these Terms of Service, please <Link href="/contact" className="text-red-600 hover:text-red-800">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl text-heading text-slate-900 mb-6">Questions About Our Terms?</h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                We're here to help! If you have any questions about our terms of service or need clarification on any points, don't hesitate to reach out to our team.
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
