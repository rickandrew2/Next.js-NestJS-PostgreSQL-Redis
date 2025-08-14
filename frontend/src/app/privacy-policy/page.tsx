import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Shield, Eye, Lock, Users, FileText, Calendar } from 'lucide-react';

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

export default async function PrivacyPolicyPage() {
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
                Privacy & Security
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-hero text-slate-900 mb-6 leading-tight">
                Privacy Policy
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  & Data Protection
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information 
                when you visit FunVault and use our services.
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

        {/* Privacy Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">Data Protection</CardTitle>
                    <p className="text-slate-600 text-sm">
                      We use industry-standard security measures to protect your personal information.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">Transparency</CardTitle>
                    <p className="text-slate-600 text-sm">
                      We're transparent about what data we collect and how we use it.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">Your Control</CardTitle>
                    <p className="text-slate-600 text-sm">
                      You have control over your data and can request changes or deletion.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* Information We Collect */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Information We Collect</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        We collect information you provide directly to us, such as when you:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us through our contact form</li>
                        <li>Leave comments on our articles</li>
                        <li>Participate in our community features</li>
                      </ul>
                      <p>
                        We also automatically collect certain information when you visit our website, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>IP address and browser information</li>
                        <li>Pages you visit and time spent on each page</li>
                        <li>Device information and operating system</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* How We Use Information */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>We use the information we collect to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide and improve our services</li>
                        <li>Send you newsletters and updates (with your consent)</li>
                        <li>Respond to your questions and comments</li>
                        <li>Analyze website usage and improve user experience</li>
                        <li>Ensure the security and safety of our platform</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Information Sharing */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Information Sharing</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>With your explicit consent</li>
                        <li>To trusted service providers who assist us in operating our website</li>
                        <li>To comply with legal requirements or protect our rights</li>
                        <li>In connection with a business transfer or merger</li>
                      </ul>
                      <p>
                        All third-party service providers are required to maintain the confidentiality of your information.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Cookies */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                        <Lock className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Cookies and Tracking</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        We use cookies and similar technologies to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Remember your preferences and settings</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Provide personalized content and advertisements</li>
                        <li>Improve website functionality and performance</li>
                      </ul>
                      <p>
                        You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Children's Privacy */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Children's Privacy (COPPA)</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        We are committed to protecting the privacy of children under 13 years of age. Our website complies with the Children's Online Privacy Protection Act (COPPA).
                      </p>
                      <p>
                        We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.
                      </p>
                      <p>
                        Parents can review, request deletion of, or refuse further collection of their child's information by contacting us.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Security */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Data Security</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <p>
                        These measures include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments and updates</li>
                        <li>Access controls and authentication</li>
                        <li>Secure hosting and infrastructure</li>
                      </ul>
                      <p>
                        However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Your Rights */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Your Rights</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Object to processing of your information</li>
                        <li>Withdraw consent for data processing</li>
                        <li>Request data portability</li>
                      </ul>
                      <p>
                        To exercise these rights, please contact us using the information provided below.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Contact Us</CardTitle>
                    </div>
                    <div className="space-y-4 text-slate-700">
                      <p>
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <p><strong>Email:</strong> privacy@funvault.com</p>
                        <p><strong>Address:</strong> FunVault Privacy Team</p>
                        <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                We're here to help! Contact us if you have any questions about our privacy practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@funvault.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-900 hover:bg-slate-100 rounded-xl font-medium transition-colors"
                >
                  Contact Privacy Team
                </a>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-xl font-medium transition-colors"
                >
                  General Contact
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
