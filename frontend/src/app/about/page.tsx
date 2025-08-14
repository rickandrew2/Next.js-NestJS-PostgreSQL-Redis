import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Users, Target, Heart, Award, Gamepad2, BookOpen, Globe, Shield } from 'lucide-react';

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

export default async function AboutPage() {
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
                About FunVault
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-hero text-slate-900 mb-6 leading-tight">
                Your Ultimate Gaming
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Content Hub
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're passionate about bringing you the best gaming content, tips, and entertainment. 
                From Roblox adventures to Minecraft masterpieces, we've got everything you need to level up your gaming experience.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl text-heading text-slate-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    At FunVault, we believe gaming is more than just entertainment—it's a way to connect, learn, and grow. 
                    Our mission is to create a safe, engaging platform where gamers of all ages can discover new worlds, 
                    learn valuable skills, and share their passion for gaming.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We're committed to providing high-quality, family-friendly content that educates, entertains, 
                    and inspires the next generation of gamers.
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
                    <Link href="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">Community</CardTitle>
                        </div>
                        <p className="text-slate-600">Building a vibrant gaming community</p>
                      </CardContent>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">Education</CardTitle>
                        </div>
                        <p className="text-slate-600">Teaching valuable gaming skills</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4 mt-8">
                    <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">Passion</CardTitle>
                        </div>
                        <p className="text-slate-600">Driven by love for gaming</p>
                      </CardContent>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">Quality</CardTitle>
                        </div>
                        <p className="text-slate-600">Delivering excellence in content</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  What We Cover
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  From popular games to emerging trends, we cover everything that matters to the gaming community.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                        <Gamepad2 className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Gaming Guides</CardTitle>
                    </div>
                    <p className="text-slate-600">
                      Comprehensive tutorials, tips, and strategies for popular games like Roblox, Minecraft, and more.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Educational Content</CardTitle>
                    </div>
                    <p className="text-slate-600">
                      Learn valuable skills like problem-solving, creativity, and teamwork through gaming.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Gaming News</CardTitle>
                    </div>
                    <p className="text-slate-600">
                      Stay updated with the latest gaming trends, updates, and industry news.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Safety & Security</CardTitle>
                    </div>
                    <p className="text-slate-600">
                      Important tips for staying safe online and protecting your gaming accounts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Community</CardTitle>
                    </div>
                    <p className="text-slate-600">
                      Connect with fellow gamers, share experiences, and build lasting friendships.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Reviews & Recommendations</CardTitle>
                    </div>
                    <p className="text-slate-600">
                      Honest reviews and recommendations for the best games and gaming accessories.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  These core values guide everything we do at FunVault.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Safety First</h3>
                  <p className="text-slate-600">
                    We prioritize the safety and well-being of our community, especially younger gamers.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Passion for Gaming</h3>
                  <p className="text-slate-600">
                    We're gamers ourselves, and we understand what makes gaming special.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Content</h3>
                  <p className="text-slate-600">
                    We're committed to delivering high-quality, accurate, and engaging content.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Community Focus</h3>
                  <p className="text-slate-600">
                    We believe in building a positive, inclusive gaming community.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Education</h3>
                  <p className="text-slate-600">
                    We believe gaming can be both fun and educational.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
                  <p className="text-slate-600">
                    We strive for excellence in everything we create and share.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Join the FunVault Community
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Ready to explore amazing gaming content? Start your journey with FunVault today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-red-900 hover:bg-slate-100">
                  <Link href="/">
                    Explore Content
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">
                    Contact Us
                  </Link>
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
