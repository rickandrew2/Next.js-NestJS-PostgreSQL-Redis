import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Eye, Grid3X3, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  published_at: string;
  view_count: number;
  category_id: number;
  author?: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

async function getCategoryData(slug: string): Promise<{ category: Category | null; posts: Post[]; categories: Category[] }> {
  try {
    const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
    const [categoriesRes, postsRes] = await Promise.all([
      fetch(`${api}/categories`, { 
        next: { 
          revalidate: 3600, // Cache for 1 hour
          tags: ['categories']
        }
      }),
      fetch(`${api}/posts`, { 
        next: { 
          revalidate: 300, // Cache for 5 minutes
          tags: ['posts']
        }
      })
    ]);

    if (!categoriesRes.ok || !postsRes.ok) {
      return { category: null, posts: [], categories: [] };
    }

    const [categories, posts] = await Promise.all([
      categoriesRes.json(),
      postsRes.json()
    ]);

    const category = categories.find((c: Category) => c.slug === slug);
    if (!category) {
      return { category: null, posts: [], categories };
    }

    // Use the category-specific endpoint for better performance
    const categoryPostsRes = await fetch(`${api}/posts/category/${category.id}`, { 
      next: { 
        revalidate: 300, // Cache for 5 minutes
        tags: ['posts', `category-${category.id}`]
      }
    });
    if (categoryPostsRes.ok) {
      const categoryPosts = await categoryPostsRes.json();
      return { category, posts: categoryPosts, categories };
    }

    // Fallback to filtering all posts
    const categoryPosts = posts.filter((post: Post) => post.category_id === category.id);
    return { category, posts: categoryPosts, categories };
  } catch (error) {
    console.error('Error fetching category data:', error);
    return { category: null, posts: [], categories: [] };
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { category, posts, categories } = await getCategoryData(slug);
  
  if (!category) {
    notFound();
  }

  // Get category emoji
  const getCategoryEmoji = (categoryName: string) => {
    const emojiMap: { [key: string]: string } = {
      'Roblox': '🎮',
      'Minecraft': '⛏️',
      'Anime': '🌸',
      'Gaming': '🎯',
      'Technology': '💻',
      'Entertainment': '🎬'
    };
    return emojiMap[categoryName] || '📝';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation categories={categories} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-red-700 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-medium">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              {category.image_url ? (
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={category.image_url}
                    alt={category.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  <span>{getCategoryEmoji(category.name)}</span>
                </div>
              )}
            </div>
            
            <h1 className="text-4xl sm:text-5xl text-hero text-slate-900 mb-4">
              {category.name}
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6 text-body">
              {category.description}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" />
                <span>{posts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Category</span>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {posts.length > 0 ? (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-[500px] flex flex-col">
                  <Link href={`/post/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      {post.featured_image ? (
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                          <span className="text-4xl">{getCategoryEmoji(category.name)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white border-0">
                          {category.name}
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
                       
                       <p className="text-slate-600 line-clamp-3 mb-4">
                         {post.excerpt || post.content.substring(0, 120)}...
                       </p>
                       
                       <div className="text-red-700 hover:text-red-800 transition-colors font-medium mt-auto">
                         Read More →
                       </div>
                     </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{getCategoryEmoji(category.name)}</span>
            </div>
            <h2 className="text-2xl text-heading text-slate-900 mb-4">No Articles Yet</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              We're working on creating amazing content for this category. Check back soon!
            </p>
            <Button asChild className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
              <Link href="/">
                Browse Other Categories
              </Link>
            </Button>
          </div>
        )}

        {/* Other Categories */}
        <section className="mb-12">
          <h2 className="text-2xl text-heading text-slate-900 mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories
              .filter(c => c.id !== category.id)
              .slice(0, 6)
              .map((otherCategory) => (
                <Link
                  key={otherCategory.id}
                  href={`/category/${otherCategory.slug}`}
                  className="group block"
                >
                  <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-red-200">
                    <div className="text-center">
                      {otherCategory.image_url ? (
                        <div className="w-12 h-12 mx-auto mb-3 rounded-lg overflow-hidden">
                          <Image
                            src={otherCategory.image_url}
                            alt={otherCategory.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center text-xl">
                          <span>{getCategoryEmoji(otherCategory.name)}</span>
                        </div>
                      )}
                      <h3 className="text-sm font-semibold text-slate-800 group-hover:text-red-700 transition-colors">
                        {otherCategory.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center py-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
          <h2 className="text-2xl text-heading text-slate-900 mb-4">Stay Updated with {category.name}!</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get the latest {category.name.toLowerCase()} content, tips, and news delivered straight to your inbox.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
            <Link href="/#newsletter">
              Subscribe to Newsletter
            </Link>
          </Button>
        </section>
      </div>
      <Footer categories={categories} />
    </div>
  );
}
