import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp, Clock, Eye } from 'lucide-react';

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

export default async function BlogPage() {
  const { posts, categories } = await getBlogData();

  // Get featured post (first post)
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7); // Next 6 posts
  const popularPosts = posts.slice(0, 3); // Top 3 by views

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/blog" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Gaming Blog</h1>
                  <p className="text-xs text-muted-foreground">Roblox • Minecraft • Anime</p>
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

            <nav className="hidden lg:flex space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
            🎮 Your Ultimate Gaming Resource
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Level Up Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Gaming Knowledge
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the best Roblox games, master Minecraft redstone, and explore amazing anime content
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="secondary"
                asChild
                className="bg-white/20 hover:bg-white/30 border-white/20 text-white"
              >
                <Link href={`/blog/category/${category.slug}`}>
                  {category.name}
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>{posts.length}+ Articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </section>

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
              <Badge variant="destructive">Featured</Badge>
              <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <Badge variant="secondary">
                      {categories.find((c) => c.id === featuredPost.category_id)?.name || 'Gaming'}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(featuredPost.published_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-4 leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
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
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
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
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Badge variant="secondary" className="text-xs">
                        {categories.find((c) => c.id === post.category_id)?.name || 'Gaming'}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
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
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
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
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Popular Posts</h2>
            </div>
            <div className="space-y-6">
              {popularPosts.map((post, index) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
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
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-center">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/blog/category/${category.slug}`}>
                      View {posts.filter(p => p.category_id === category.id).length} Posts →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <h3 className="text-lg font-bold">Gaming Blog</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your ultimate source for Roblox, Minecraft, and Anime content. Stay updated with the latest gaming trends and tips.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/blog/category/${category.slug}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
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
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/blog/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/blog/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/blog/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">
                Get the latest gaming content delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Gaming Blog. All rights reserved. | Built with Next.js & shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
