import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Gamepad2, Users, Target, Shield, Heart, Star } from 'lucide-react';

export default function AboutPage() {
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
              <Link href="/about" className="text-red-600 font-medium">About</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-red-600 transition-colors">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            🎮 About Us
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Kids Gaming Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Your trusted source for family-friendly gaming content, tips, and entertainment
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Kids Gaming Hub, we believe that gaming should be fun, educational, and safe for everyone. 
                Our mission is to provide high-quality, family-friendly content that helps kids and parents 
                navigate the exciting world of gaming together.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We focus on popular games like Roblox, Minecraft, and anime content that kids love, 
                while ensuring all our content is appropriate and educational. Our team of gaming experts 
                and parents work together to create content that's both entertaining and informative.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Explore Games
                </Button>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  <Users className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Family-Friendly</h3>
                    <p className="text-sm text-muted-foreground">All content carefully curated for kids</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
                    <p className="text-sm text-muted-foreground">Your safety is our top priority</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Educational</h3>
                    <p className="text-sm text-muted-foreground">Learn while having fun</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Quality Content</h3>
                    <p className="text-sm text-muted-foreground">Expert-written articles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What We Cover</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎮</span>
                </div>
                <CardTitle className="text-xl">Roblox Games</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Discover the best Roblox games, learn tips and tricks, and stay updated with the latest releases.
                </p>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Family-Friendly
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">⛏️</span>
                </div>
                <CardTitle className="text-xl">Minecraft Guides</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Master Minecraft with our comprehensive guides, from redstone engineering to building tips.
                </p>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Educational
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">📺</span>
                </div>
                <CardTitle className="text-xl">Anime Content</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Explore the world of anime with reviews, recommendations, and family-friendly content.
                </p>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Entertainment
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize the safety and well-being of our young readers. All content is carefully 
                  reviewed to ensure it's appropriate for children and families. We never promote harmful 
                  content or unsafe gaming practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Quality Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Every article on our site is written by experienced gamers and content creators who 
                  understand what kids love. We focus on creating engaging, informative content that 
                  helps kids learn and grow through gaming.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Family-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our content is designed to bring families together through gaming. We provide tips 
                  for parents, safe gaming guidelines, and content that everyone can enjoy together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Community Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in building a positive gaming community. Our site encourages respectful 
                  discussion, helpful tips sharing, and a supportive environment for young gamers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Team</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team consists of passionate gamers, parents, educators, and content creators who 
              understand the importance of safe, educational gaming content for children. We work 
              together to create the best possible experience for our young readers and their families.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">👨‍💻</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Gaming Experts</h3>
                <p className="text-sm text-muted-foreground">Experienced players and content creators</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Parents</h3>
                <p className="text-sm text-muted-foreground">Understanding family needs and concerns</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📚</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Educators</h3>
                <p className="text-sm text-muted-foreground">Creating educational content</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-red-100 bg-gradient-to-r from-red-50 to-orange-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Gaming Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start exploring our content today and discover amazing games, tips, and entertainment 
                that the whole family can enjoy together.
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
                <li><Link href="/about" className="text-red-600 font-medium">About</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">Contact</Link></li>
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
