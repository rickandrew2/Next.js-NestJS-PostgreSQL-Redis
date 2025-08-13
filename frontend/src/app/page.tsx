import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp, Clock, Eye, Zap, Shield, Smartphone, Sparkles } from 'lucide-react';
import { Carousel } from '@/components/ui/carousel';

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

// Cute mascot emoji per category with fallback
const categoryEmoji: Record<string, string> = {
  roblox: '🧱',
  minecraft: '⛏️',
  anime: '🎌',
  fortnite: '🎯',
  genshin: '✨',
  pokemon: '⚡',
};

function getCategoryEmoji(category: Category): string {
  const key = (category.slug || category.name || '').toLowerCase();
  return categoryEmoji[key] || '🎮';
}

// Fetch blog data
async function getBlogData() {
  try {
    const [postsRes, categoriesRes] = await Promise.all([
      fetch('http://localhost:3002/posts', { cache: 'no-store' }),
      fetch('http://localhost:3002/categories', { cache: 'no-store' })
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">FunVault</h1>
                  <p className="text-xs text-muted-foreground">Fun for Roblox • Minecraft • Anime</p>
                </div>
              </Link>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-2 max-w-md w-full mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-muted/50 border-0 focus:bg-background"
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors font-medium">Home</Link>
              <details className="relative">
                <summary className="list-none cursor-pointer text-muted-foreground hover:text-red-600 transition-colors font-medium inline-flex items-center gap-1">
                  Games <span className="text-xs">▼</span>
                </summary>
                <div className="absolute z-50 right-2 sm:right-0 mt-2 w-[calc(100vw-2rem)] sm:w-[420px] md:w-[500px] p-3 rounded-lg bg-card shadow-lg border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.slice(0, 6).map((c) => (
                      <Link key={c.id} href={`/category/${c.slug}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-red-50">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-red-600/10 to-orange-500/10 flex items-center justify-center text-lg">
                          <span>{getCategoryEmoji(c)}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-sm truncate">{c.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{c.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 text-right">
                    <Link href="#categories" className="text-xs sm:text-sm text-red-600 hover:text-red-700">All categories →</Link>
                  </div>
                </div>
              </details>
              <Link href="/blog" className="text-muted-foreground hover:text-red-600 transition-colors font-medium">Blog</Link>
              <Link href="/about" className="text-muted-foreground hover:text-red-600 transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors font-medium">Contact</Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-red-600 transition-colors font-medium">Privacy</Link>
            </nav>
          </div>
        </div>
        {/* Mobile nav */}
        <div className="lg:hidden border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <details className="w-full">
              <summary className="list-none cursor-pointer text-sm text-muted-foreground flex items-center justify-between">
                Menu <span className="text-xs">▼</span>
              </summary>
              <div className="mt-3 grid gap-1">
                <Link href="/" className="p-2 rounded hover:bg-red-50">Home</Link>
                <Link href="/blog" className="p-2 rounded hover:bg-red-50">Blog</Link>
                <details>
                  <summary className="p-2 rounded hover:bg-red-50 cursor-pointer">Games</summary>
                  <div className="mt-1 grid grid-cols-2 sm:grid-cols-3 gap-1">
                    {categories.map((c) => (
                      <Link key={c.id} href={`/category/${c.slug}`} className="p-2 rounded hover:bg-red-50 flex items-center gap-2 text-sm">
                        <span className="text-base">{getCategoryEmoji(c)}</span>
                        <span className="truncate">{c.name}</span>
                      </Link>
                    ))}
                  </div>
                </details>
                <Link href="/about" className="p-2 rounded hover:bg-red-50">About</Link>
                <Link href="/contact" className="p-2 rounded hover:bg-red-50">Contact</Link>
                <Link href="/privacy-policy" className="p-2 rounded hover:bg-red-50">Privacy</Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-red-500/30 to-orange-500/30 text-white border-white/30 backdrop-blur-sm">
            🎉 Welcome to FunVault
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unlock the Fun with
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Family‑Friendly Guides & Picks
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Safe, speedy, and kid‑approved guides for games, shows, and creative fun—no pop‑ups, just play.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button asChild className="bg-white text-red-600 hover:bg-white/90">
              <Link href="/blog">Explore Posts</Link>
            </Button>
            <Button variant="outline" asChild className="border-white/40 text-white hover:bg-white/10">
              <Link href="#categories">Browse Categories</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> Fast Loads</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> No Pop‑ups</div>
            <div className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> Mobile Ready</div>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm opacity-75 mt-6">
            <div className="flex items-center space-x-2"><TrendingUp className="h-4 w-4" /><span>{posts.length}+ Articles</span></div>
            <div className="flex items-center space-x-2"><Eye className="h-4 w-4" /><span>Updated Regularly</span></div>
          </div>
        </div>
      </section>

      {/* Trending Strip */}
      {trendingPosts.length > 0 && (
        <section className="border-b bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-red-600" />
              <p className="text-sm font-medium text-foreground">Trending Now</p>
            </div>
            <div className="flex gap-3 overflow-x-auto py-1">
              {trendingPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="flex-shrink-0 px-3 py-2 rounded-full bg-muted hover:bg-red-50 text-sm text-foreground transition-colors border border-transparent hover:border-red-200"
                  title={post.title}
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AdSense Banner - Top */}
      <div className="bg-muted py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-dashed border-2">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-muted-foreground font-medium">AdSense Banner - Top</p>
              <p className="text-xs text-muted-foreground mt-1">728x90 or 320x50 for mobile</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center space-x-2 mb-8">
              <Badge variant="destructive" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg">🔥 Featured</Badge>
              <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-red-200 hover:border-red-300 bg-gradient-to-br from-white to-red-50">
              <div className="grid md:grid-cols-2 gap-0">
                {featuredPost.featured_image && (
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 hover:from-red-200 hover:to-red-300 border-red-300">
                      {categories.find((c) => c.id === featuredPost.category_id)?.name || 'Gaming'}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(featuredPost.published_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-4 leading-tight">
                    <Link href={`/post/${featuredPost.slug}`} className="hover:text-red-600 transition-colors group">
                      <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent group-hover:from-red-700 group-hover:to-red-600">
                        {featuredPost.title}
                      </span>
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt || featuredPost.content.substring(0, 200)}...
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.view_count} views</span>
                      </div>
                    </div>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={`/post/${featuredPost.slug}`}>
                        Read Full Article →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* AdSense Banner - Middle */}
        <div className="bg-muted py-6 mb-16">
          <Card className="border-dashed border-2">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-muted-foreground font-medium">AdSense Banner - Middle</p>
              <p className="text-xs text-muted-foreground mt-1">728x90 or 320x50 for mobile</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts & Popular Posts */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Editor's Picks */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 px-2 md:px-0">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-red-600" />
                <h2 className="text-2xl font-bold text-foreground">Editor’s Picks</h2>
              </div>
              <Link href="/blog" className="text-sm text-red-600 hover:text-red-700">See all</Link>
            </div>
          <Carousel ariaLabel="Editors Picks Carousel" className="-mx-3" itemClassName="min-w-[280px] sm:min-w-[320px]">
            {editorsPicks.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-red-100">
                {post.featured_image && (
                  <div className="relative h-40">
                    <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
                  </div>
                )}
                <CardHeader className="py-4">
                  <CardTitle className="text-base line-clamp-2">
                    <Link href={`/post/${post.slug}`} className="hover:text-red-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </Carousel>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <Clock className="h-5 w-5 text-red-600" />
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-red-50">
                  {post.featured_image && (
                    <div className="relative h-48">
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300">
                        {categories.find((c) => c.id === post.category_id)?.name || 'Gaming'}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      <Link href={`/post/${post.slug}`} className="hover:text-red-600 transition-colors group">
                        <span className="group-hover:text-red-600">{post.title}</span>
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {post.excerpt || post.content.substring(0, 120)}...
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        <span>{post.view_count}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-300">
                        <Link href={`/post/${post.slug}`}>
                          Read More →
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Posts Sidebar */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <TrendingUp className="h-5 w-5 text-red-600" />
              <h2 className="text-2xl font-bold text-foreground">Popular Posts</h2>
            </div>
            <div className="space-y-6">
              {popularPosts.map((post, index) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-red-100 hover:border-red-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center border border-red-300">
                        <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base line-clamp-2">
                          <Link href={`/post/${post.slug}`} className="hover:text-red-600 transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-2 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          <span>{post.view_count} views</span>
                          <span>•</span>
                          <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Categories Sidebar */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-300 border border-transparent hover:border-red-200"
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {posts.filter(p => p.category_id === category.id).length}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Reel */}
        {imagePosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/globe.svg" alt="fun vault" width={20} height={20} />
              <h3 className="text-lg font-bold text-foreground">Image Highlights</h3>
            </div>
            <Carousel ariaLabel="Image Highlights Carousel" className="-mx-3" itemClassName="min-w-[180px] sm:min-w-[220px] md:min-w-[240px]">
              {imagePosts.map((post) => (
                <Link key={post.id} href={`/post/${post.slug}`} className="group block">
                  <div className="relative h-24 md:h-32 rounded-lg overflow-hidden ring-1 ring-red-100 group-hover:ring-red-300 transition">
                    <Image src={post.featured_image!} alt={post.title} fill className="object-cover" />
                  </div>
                  <p className="mt-2 text-xs md:text-sm line-clamp-2 text-foreground/80 group-hover:text-red-600 transition">
                    {post.title}
                  </p>
                </Link>
              ))}
            </Carousel>
          </section>
        )}

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
        <section id="categories" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow group border-red-50">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4 w-24 h-24 rounded-xl overflow-hidden ring-1 ring-red-200 group-hover:ring-red-300 transition">
                    {category.image_url ? (
                      <Image src={category.image_url} alt={category.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center text-3xl">
                        <span>{getCategoryEmoji(category)}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-center">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild className="w-full border-red-200 text-red-600 hover:bg-red-50">
                    <Link href={`/category/${category.slug}`}>
                      View {posts.filter(p => p.category_id === category.id).length} Posts →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Gaming Community!</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay updated with the latest Roblox tips, Minecraft guides, and anime recommendations. 
              Never miss out on exciting gaming content!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg">
                🎮 Start Gaming Now
              </Button>
              <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50">
                📧 Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <h3 className="text-lg font-bold">FunVault</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your ultimate source for Roblox, Minecraft, and Anime content. Stay updated with the latest family‑friendly trends and tips.
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
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/category/${category.slug}`}
                      className="text-muted-foreground hover:text-red-600 transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-red-600 transition-colors">About</Link></li>
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
                <Input placeholder="Your email" className="flex-1 border-red-200 focus:border-red-500" />
                <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg">Subscribe</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 FunVault. All rights reserved. | Built with Next.js & shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
