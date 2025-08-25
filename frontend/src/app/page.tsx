import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { TrendingUp, Clock, Eye, Zap, Shield, Smartphone, Sparkles, Menu, X } from 'lucide-react';
import { Carousel } from '@/components/ui/carousel';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSearch } from '@/components/hero-search';
import { StructuredData } from '@/components/structured-data';

// Types for our data
interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  author_id: number;
  category_id: number;
  status: 'draft' | 'published';
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}

// Fetch blog data
async function getBlogData() {
  try {
    const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
    const [postsRes, categoriesRes] = await Promise.all([
      fetch(`${api}/posts`, { 
        next: { 
          revalidate: 300, // Cache for 5 minutes
          tags: ['posts', 'categories']
        }
      }),
      fetch(`${api}/categories`, { 
        next: { 
          revalidate: 3600, // Cache for 1 hour
          tags: ['categories']
        }
      })
    ]);

    if (!postsRes.ok || !categoriesRes.ok) {
      throw new Error('Failed to fetch blog data');
    }

    const posts: Post[] = await postsRes.json();
    const categories: Category[] = await categoriesRes.json();

    return { posts, categories };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return { posts: [], categories: [] };
  }
}

export default async function HomePage() {
  const { posts, categories } = await getBlogData();

  // Get featured post (first post)
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7); // Next 6 posts
  const popularPosts = posts.slice(0, 3); // Top 3 by views
  const trendingPosts = [...posts].sort((a, b) => b.view_count - a.view_count).slice(0, 10);
  const editorsPicks = [...posts]
    .sort((a, b) => b.view_count - a.view_count)
    .slice(0, 4);
  const imagePosts = posts.filter((p) => Boolean(p.featured_image)).slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <StructuredData type="website" data={{}} />
      <StructuredData type="organization" data={{}} />
      <Navigation categories={categories} />

      {/* Hero Section - Magazine Style */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo Section */}
            <div className="flex items-center justify-center gap-3 mb-8 group">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/Website_logo-removebg-preview.png"
                    alt="FunVault Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  FunVault
                </span>
                <span className="text-sm text-red-200 font-medium -mt-1 tracking-wide">Gaming & Anime</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">🔥 New: Latest Gaming Tips & Anime Reviews Just Added</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-hero mb-6 leading-tight">
              Level Up Your
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent mt-2">
                Gaming & Anime Journey
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-12 text-slate-200 max-w-3xl mx-auto text-body">
              Get exclusive Roblox tips, Minecraft redstone guides, and anime recommendations that actually work. 
              Join 10,000+ gamers and anime fans who&apos;ve already discovered amazing content with our proven guides.
            </p>
            
            {/* Hero Search Component */}
            <HeroSearch posts={posts} categories={categories} />
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">{posts.length}+</div>
                <div className="text-sm text-slate-300 font-medium">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">{categories.length}</div>
                <div className="text-sm text-slate-300 font-medium">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-300 mb-2">24/7</div>
                <div className="text-sm text-slate-300 font-medium">Updated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-sm text-slate-300 font-medium">Family Safe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Latest content updated daily</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Free gaming guides & tips</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Family-friendly content</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post - Magazine Style */}
      {featuredPost && (
        <section id="featured" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-4">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span className="text-sm font-medium text-red-700">Featured Article</span>
                </div>
                <h2 className="text-3xl sm:text-4xl text-heading text-slate-800 mb-4">Today's Top Story</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Discover our most popular content and latest gaming insights</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="relative group">
                  {featuredPost.featured_image && (
                    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <Image
                        src={featuredPost.featured_image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-700 text-white border-0">
                          {categories.find((c) => c.id === featuredPost.category_id)?.name || 'Featured'}
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(featuredPost.published_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.view_count} views</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                    <Link href={`/post/${featuredPost.slug}`} className="hover:text-red-700 transition-colors" prefetch={true}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {featuredPost.excerpt || featuredPost.content.substring(0, 200)}...
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href={`/post/${featuredPost.slug}`}>
                        Read Full Article →
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-700 hover:bg-red-50 px-8 py-3 rounded-xl">
                      <Link href={`/category/${categories.find((c) => c.id === featuredPost.category_id)?.slug}`}>
                        More {categories.find((c) => c.id === featuredPost.category_id)?.name} →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AdSense Banner - Top */}
      <div className="bg-slate-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-dashed border-2 border-slate-300 bg-white/50">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-slate-600 font-medium">AdSense Banner - Top</p>
              <p className="text-xs text-slate-500 mt-1">728x90 or 320x50 for mobile</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Editor's Picks - Magazine Style */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-4">
              <Sparkles className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Editor's Picks</span>
            </div>
                            <h2 className="text-3xl sm:text-4xl text-heading text-slate-800 mb-4">Must-Read Articles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Handpicked content from our gaming experts</p>
          </div>
          
          <Carousel ariaLabel="Editors Picks Carousel" className="-mx-3" itemClassName="min-w-[320px] sm:min-w-[380px]">
            {editorsPicks.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group h-[500px] flex flex-col">
                <Link href={`/post/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    {post.featured_image ? (
                      <Image 
                        src={post.featured_image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 320px, 380px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                        <span className="text-4xl">🎮</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-700 text-white border-0">
                        {categories.find((c) => c.id === post.category_id)?.name || 'Featured'}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      <span>•</span>
                      <Eye className="h-4 w-4" />
                      <span>{post.view_count} views</span>
                    </div>
                    <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-red-700 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-slate-600 flex-1">
                      {post.excerpt || post.content.substring(0, 120)}...
                    </CardDescription>
                    <div className="text-red-700 hover:text-red-800 transition-colors font-medium mt-4">
                      Read More →
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Carousel>
        </section>

        {/* Latest Articles & Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Latest Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></div>
              <div>
                <h2 className="text-2xl sm:text-3xl text-heading text-slate-800">Latest Articles</h2>
                <p className="text-slate-600">Fresh content from our gaming community</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {recentPosts.map((post, index) => (
                <article key={post.id} className="group">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {post.featured_image && (
                      <Link href={`/post/${post.slug}`}>
                        <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <Image
                            src={post.featured_image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-700 text-white border-0">
                              {categories.find((c) => c.id === post.category_id)?.name || 'Gaming'}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                    )}
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{new Date(post.published_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span>{post.view_count} views</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-red-700 transition-colors leading-tight">
                        <Link href={`/post/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt || post.content.substring(0, 150)}...
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <Button asChild size="sm" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-lg">
                          <Link href={`/post/${post.slug}`}>
                            Read Article →
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-red-700">
                          <Link href={`/category/${categories.find((c) => c.id === post.category_id)?.slug}`}>
                            More {categories.find((c) => c.id === post.category_id)?.name}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {index < recentPosts.length - 1 && (
                    <div className="border-b border-slate-200 mt-8"></div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Posts */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-800">Popular Posts</h3>
              </div>
              
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-slate-200 group">
                    <Link href={`/post/${post.slug}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center border border-red-300">
                            <span className="text-red-700 font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-sm font-semibold line-clamp-2 group-hover:text-red-700 transition-colors">
                              {post.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                              <Eye className="h-3 w-3" />
                              <span>{post.view_count} views</span>
                              <span>•</span>
                              <span>{new Date(post.published_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-800">Categories</h3>
              </div>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-red-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🎮</span>
                      <span className="font-medium text-slate-700 group-hover:text-red-700 transition-colors">{category.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs bg-red-50 border-red-200 text-red-700">
                      {posts.filter(p => p.category_id === category.id).length}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📧</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Stay Updated</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Get the latest gaming content delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email" className="border-red-300 focus:border-red-600" />
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-lg">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Topics */}
        {trendingPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></div>
              <div>
                <h2 className="text-2xl sm:text-3xl text-heading text-slate-800">Trending Now</h2>
                <p className="text-slate-600">Most popular articles this week</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingPosts.slice(0, 4).map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <Link href={`/post/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      {post.featured_image ? (
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                          <span className="text-3xl">🎮</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-700 text-white border-0">
                          {categories.find((c) => c.id === post.category_id)?.name || 'Trending'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <CardTitle className="text-sm font-bold text-slate-800 mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Eye className="h-3 w-3" />
                        <span>{post.view_count} views</span>
                        <span>•</span>
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* AdSense Banner - Natural Integration */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-8 border border-slate-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Sponsored Content</h3>
              <p className="text-sm text-slate-600 mb-4">Discover amazing gaming products and services</p>
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-slate-300">
                <p className="text-sm text-slate-600 font-medium">AdSense Banner - 728x90</p>
                <p className="text-xs text-slate-500 mt-1">Responsive ad unit</p>
              </div>
            </div>
          </div>
        </div>

        {/* AdSense Banner - Bottom */}
        <div className="bg-muted py-6 mb-16">
          <Card className="border-dashed border-2">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-muted-foreground font-medium">AdSense Banner - Bottom</p>
              <p className="text-xs text-muted-foreground mt-1">728x90 or 320x50 for mobile</p>
            </CardContent>
          </Card>
        </div>

        {/* Categories Section */}
        <section id="categories" className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-4">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span className="text-sm font-medium text-red-700">Explore Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Browse by Topic</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Find exactly what you&apos;re looking for in our organized content sections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-80 relative">
                <div className="relative h-full">
                  {category.image_url ? (
                    <Image 
                      src={category.image_url} 
                      alt={category.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
                        <span>🎮</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                          {category.name.toUpperCase()}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                          {category.description}
                        </p>
                      </div>
                      
                      {/* Article Count Badge */}
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <span className="text-white font-bold text-sm">
                            {posts.filter(p => p.category_id === category.id).length}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm font-medium">
                        {posts.filter(p => p.category_id === category.id).length} Articles
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild 
                        className="text-white hover:text-red-200 hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                      >
                        <Link href={`/category/${category.slug}`}>
                          Explore →
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>
          
          {/* View All Categories Button */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#featured">
                View All Categories
              </Link>
            </Button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎮</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Gaming Community!</h2>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Stay updated with the latest Roblox tips, Minecraft guides, and anime recommendations. 
                Never miss out on exciting gaming content!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="bg-white text-red-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link href="#featured">Start Reading Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm">
                  <Link href="#newsletter">Subscribe to Newsletter</Link>
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
