import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
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
              <Link href="/contact" className="text-red-600 font-medium">Contact</Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-red-600 transition-colors">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            📞 Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We'd Love to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Hear from You
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or just want to say hello? We're here to help!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <Card className="border-red-100">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's on your mind..."
                      className="mt-1 min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for gaming tips and updates
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-2">
                        We typically respond within 24 hours
                      </p>
                      <a 
                        href="mailto:hello@kidsgaminghub.com" 
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        hello@kidsgaminghub.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Social Media</h3>
                      <p className="text-muted-foreground mb-2">
                        Follow us for updates and gaming content
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-red-600 hover:text-red-700 font-medium">Twitter</a>
                        <a href="#" className="text-red-600 hover:text-red-700 font-medium">YouTube</a>
                        <a href="#" className="text-red-600 hover:text-red-700 font-medium">Discord</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Response Time</h3>
                      <p className="text-muted-foreground mb-2">
                        We're here to help you quickly
                      </p>
                      <div className="space-y-1 text-sm">
                        <p><strong>Email:</strong> Within 24 hours</p>
                        <p><strong>Social Media:</strong> Within 2-4 hours</p>
                        <p><strong>Weekends:</strong> Slightly longer response times</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-lg">How can I suggest a game to review?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We love hearing game suggestions! Send us an email with the game name and why you think 
                      it would be great for our readers. We review all suggestions and add the best ones to our content calendar.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-lg">Can I contribute content to your site?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! We welcome guest contributors who share our values of family-friendly, educational content. 
                      Please email us with your idea and writing samples.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-100">
                  <CardHeader>
                    <CardTitle className="text-lg">How do you ensure content is safe for kids?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every piece of content goes through a thorough review process by our team of parents and educators. 
                      We follow strict guidelines to ensure all content is appropriate for children and families.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed help with any questions or concerns
                </p>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-100 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Join our Discord server for real-time discussions
                </p>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Join Discord
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-100 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">📺</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Video Content</h3>
                <p className="text-muted-foreground mb-4">
                  Watch our YouTube channel for gaming tutorials
                </p>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
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
                <li><Link href="/contact" className="text-red-600 font-medium">Contact</Link></li>
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-red-600 transition-colors">Privacy Policy</Link></li>
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
