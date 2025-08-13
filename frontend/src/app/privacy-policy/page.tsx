import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Lock, Users, Calendar, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎮</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Kids Gaming Hub</h1>
                  <p className="text-xs text-muted-foreground">Roblox • Minecraft • Anime</p>
                </div>
              </Link>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-red-600 transition-colors">About</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="text-red-600 font-medium">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            🔒 Privacy & Security
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Privacy Policy
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              & Data Protection
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Your privacy and safety are our top priorities. Learn how we protect your information.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: January 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>COPPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <Card className="border-red-100 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Matters</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      At Kids Gaming Hub, we are committed to protecting your privacy and ensuring a safe online experience 
                      for children and families. This Privacy Policy explains how we collect, use, and protect your information 
                      when you visit our website.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-100">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-red-600" />
                    <span>Information You Provide</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Email address (for newsletter subscription)</li>
                    <li>• Name (when contacting us)</li>
                    <li>• Comments and feedback</li>
                    <li>• Contact form submissions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-red-600" />
                    <span>Automatically Collected</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP address and location</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Device information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
            <div className="space-y-4">
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">To Provide Our Services</h3>
                  <p className="text-muted-foreground">
                    We use your information to deliver gaming content, respond to your questions, and improve our website experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">To Send Updates</h3>
                  <p className="text-muted-foreground">
                    With your permission, we may send you newsletters with gaming tips, new content, and updates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">To Improve Our Website</h3>
                  <p className="text-muted-foreground">
                    We analyze how visitors use our site to make it better and more user-friendly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Information Sharing</h2>
            <Card className="border-red-100">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  <strong>We do not sell, trade, or rent your personal information to third parties.</strong> 
                  We may share information only in these limited circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Service Providers:</strong> We work with trusted companies to help us run our website (like hosting and analytics)</li>
                  <li>• <strong>Legal Requirements:</strong> If required by law or to protect our rights and safety</li>
                  <li>• <strong>With Your Consent:</strong> Only when you explicitly agree</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Cookies and Tracking</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-100">
                <CardHeader>
                  <CardTitle>Essential Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These cookies are necessary for our website to function properly. They help with security, 
                    navigation, and basic site features.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardHeader>
                  <CardTitle>Analytics Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use Google Analytics to understand how visitors use our site. This helps us improve 
                    our content and user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Children's Privacy (COPPA)</h2>
            <Card className="border-red-100 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Special Protection for Children</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      We are committed to protecting children's privacy and comply with the Children's Online Privacy 
                      Protection Act (COPPA). We do not knowingly collect personal information from children under 13 
                      without parental consent.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• We do not collect personal information from children under 13</li>
                      <li>• Parents can review, delete, or refuse further collection of their child's information</li>
                      <li>• We use reasonable efforts to verify parental consent when required</li>
                      <li>• All content is family-friendly and appropriate for children</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Data Security</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-red-100 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Secure Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is stored securely using industry-standard encryption and security measures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Limited Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Only authorized personnel have access to your personal information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Regular Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    We continuously monitor our systems for security threats and vulnerabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Your Rights</h2>
            <div className="space-y-4">
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Access Your Information</h3>
                  <p className="text-muted-foreground">
                    You can request a copy of the personal information we have about you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Update Your Information</h3>
                  <p className="text-muted-foreground">
                    You can ask us to correct or update your personal information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Delete Your Information</h3>
                  <p className="text-muted-foreground">
                    You can request that we delete your personal information from our records.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Opt Out</h3>
                  <p className="text-muted-foreground">
                    You can unsubscribe from our newsletter or opt out of certain data collection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Third-Party Services</h2>
            <Card className="border-red-100">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to third-party services. We are not responsible for the privacy 
                  practices of these external sites. We encourage you to read their privacy policies.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Services we use include:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Google Analytics (website analytics)</li>
                    <li>• Google AdSense (advertising)</li>
                    <li>• Social media platforms (sharing buttons)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Changes to This Policy</h2>
            <Card className="border-red-100">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes 
                  by posting the new policy on this page and updating the "Last Updated" date. We encourage you to 
                  review this policy periodically.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
            <Card className="border-red-100 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Questions About Privacy?</h3>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@kidsgaminghub.com</p>
                      <p><strong>Contact Form:</strong> <Link href="/contact" className="text-red-600 hover:text-red-700">Visit our Contact page</Link></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="border-red-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Explore?</h2>
                <p className="text-muted-foreground mb-6">
                  Now that you understand how we protect your privacy, start exploring our family-friendly gaming content!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-red-600 hover:bg-red-700" asChild>
                    <Link href="/">Start Exploring</Link>
                  </Button>
                  <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎮</span>
                </div>
                <h3 className="text-lg font-bold">Kids Gaming Hub</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted source for family-friendly gaming content, tips, and entertainment.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-red-600 transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-red-600 transition-colors">YouTube</a>
                <a href="#" className="text-muted-foreground hover:text-red-600 transition-colors">Discord</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><Link href="/category/roblox" className="text-muted-foreground hover:text-red-600 transition-colors">Roblox</Link></li>
                <li><Link href="/category/minecraft" className="text-muted-foreground hover:text-red-600 transition-colors">Minecraft</Link></li>
                <li><Link href="/category/anime" className="text-muted-foreground hover:text-red-600 transition-colors">Anime</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-red-600 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">Contact</Link></li>
                <li><Link href="/privacy-policy" className="text-red-600 font-medium">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">
                Get the latest gaming content delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button size="sm" className="bg-red-600 hover:bg-red-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Kids Gaming Hub. All rights reserved. | Built with Next.js & shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
