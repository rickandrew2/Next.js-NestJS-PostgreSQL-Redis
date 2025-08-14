import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

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

export default async function ContactPage() {
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
                Get in Touch
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-hero text-slate-900 mb-6 leading-tight">
                Let's Connect
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you! 
                Our team is here to help and always excited to connect with fellow gamers.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl text-heading text-slate-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <Input 
                          type="text" 
                          placeholder="Your first name"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <Input 
                          type="text" 
                          placeholder="Your last name"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                      <Input 
                        type="text" 
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you.
                  </p>
                  
                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg mb-2">Email Us</CardTitle>
                            <p className="text-slate-600 mb-2">We usually respond within 24 hours</p>
                            <a href="mailto:hello@funvault.com" className="text-red-600 hover:text-red-700 font-medium">
                              hello@funvault.com
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg mb-2">Live Chat</CardTitle>
                            <p className="text-slate-600 mb-2">Available during business hours</p>
                            <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50">
                              Start Chat
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg mb-2">Business Hours</CardTitle>
                            <p className="text-slate-600">
                              Monday - Friday: 9:00 AM - 6:00 PM<br />
                              Saturday: 10:00 AM - 4:00 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-slate-600">
                  Quick answers to common questions
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-3">How can I submit content suggestions?</CardTitle>
                    <p className="text-slate-600">
                      We love hearing from our community! You can submit content suggestions through our contact form above, 
                      or reach out to us via email. We review all suggestions and will get back to you if we decide to feature your idea.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-3">Do you accept guest posts?</CardTitle>
                    <p className="text-slate-600">
                      Yes! We welcome guest contributions from gaming enthusiasts. Please send us a message with your idea 
                      and we'll discuss the details. We're looking for high-quality, family-friendly content that adds value to our community.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-3">How can I report inappropriate content?</CardTitle>
                    <p className="text-slate-600">
                      If you find any content that doesn't meet our community standards, please contact us immediately. 
                      We take all reports seriously and will review them promptly to maintain a safe environment for all users.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-3">Can I advertise on FunVault?</CardTitle>
                    <p className="text-slate-600">
                      We offer advertising opportunities for gaming-related products and services that align with our values. 
                      Please contact us to discuss partnership opportunities and advertising rates.
                    </p>
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
                Join Our Gaming Community
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Connect with fellow gamers, share your experiences, and be part of something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-red-900 hover:bg-slate-100">
                  <a href="#newsletter">
                    Subscribe to Newsletter
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="/about">
                    Learn More About Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
