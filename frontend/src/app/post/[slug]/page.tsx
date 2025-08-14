import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Eye, User, Calendar, Share2, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import ArticleSidebar from '@/components/article-sidebar';

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
  tags?: string[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
}

async function getPostData(slug: string): Promise<{ post: Post | null; categories: Category[] }> {
  try {
    const [postRes, categoriesRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/slug/${slug}`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { cache: 'no-store' })
    ]);

    if (!postRes.ok || !categoriesRes.ok) {
      return { post: null, categories: [] };
    }

    const [post, categories] = await Promise.all([
      postRes.json(),
      categoriesRes.json()
    ]);

    return { post: post || null, categories };
  } catch (error) {
    console.error('Error fetching post data:', error);
    return { post: null, categories: [] };
  }
}

async function getRelatedPosts(categoryId: number, currentPostId: number): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: 'no-store' });
    if (!res.ok) return [];
    
    const posts = await res.json();
    return posts
      .filter((post: Post) => post.category_id === categoryId && post.id !== currentPostId)
      .slice(0, 3);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

async function getPopularPosts(currentPostId: number): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: 'no-store' });
    if (!res.ok) return [];
    
    const posts = await res.json();
    return posts
      .filter((post: Post) => post.id !== currentPostId)
      .sort((a: Post, b: Post) => b.view_count - a.view_count)
      .slice(0, 5);
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { post, categories } = await getPostData(params.slug);
  
  if (!post) {
    notFound();
  }

  const category = categories.find(c => c.id === post.category_id);
  const [relatedPosts, popularPosts] = await Promise.all([
    getRelatedPosts(post.category_id, post.id),
    getPopularPosts(post.id)
  ]);

  // Parse content into sections for better readability
  const contentSections = post.content.split('\n\n').filter(section => section.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
                FunVault
              </span>
            </Link>
            
            <Button variant="ghost" asChild className="text-slate-700 hover:text-red-700">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-3">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-red-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              {category && (
                <>
                  <li>
                    <Link href={`/category/${category.slug}`} className="hover:text-red-700 transition-colors">
                      {category.name}
                    </Link>
                  </li>
                  <li>/</li>
                </>
              )}
              <li className="text-slate-900 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <article className="mb-12">
            {/* Category Badge */}
            {category && (
              <div className="mb-6">
                <Badge className="bg-red-50 border border-red-200 text-red-700 hover:bg-red-100">
                  <Link href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </Badge>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-hero text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author || 'FunVault Team'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.view_count} views</span>
              </div>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative h-64 sm:h-80 lg:h-96 mb-8 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-lg">
                <p className="text-lg text-slate-700 italic text-body">
                  &ldquo;{post.excerpt}&rdquo;
                </p>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {contentSections.map((section, index) => (
                <div key={index} className="mb-6">
                  {section.startsWith('# ') ? (
                    <h2 className="text-2xl text-heading text-slate-900 mb-4 mt-8 first:mt-0">
                      {section.replace('# ', '')}
                    </h2>
                  ) : section.startsWith('## ') ? (
                    <h3 className="text-xl text-heading text-slate-800 mb-3 mt-6">
                      {section.replace('## ', '')}
                    </h3>
                  ) : section.startsWith('### ') ? (
                    <h4 className="text-lg text-heading text-slate-700 mb-2 mt-4">
                      {section.replace('### ', '')}
                    </h4>
                  ) : (
                    <p className="text-slate-700 text-body mb-4">
                      {section}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-slate-600 border-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </article>

          <Separator className="my-12" />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                    <Link href={`/post/${relatedPost.slug}`}>
                      <div className="relative h-48">
                        {relatedPost.featured_image ? (
                          <Image
                            src={relatedPost.featured_image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                            <span className="text-3xl">🎮</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg font-bold text-slate-800 mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="h-3 w-3" />
                          <span>{new Date(relatedPost.published_at).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="text-center py-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Stay Updated!</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get the latest gaming tips, tutorials, and news delivered straight to your inbox.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
              <Link href="/#newsletter">
                Subscribe to Newsletter
              </Link>
            </Button>
          </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ArticleSidebar
                relatedPosts={relatedPosts}
                popularPosts={popularPosts}
                categories={categories}
                currentPostId={post.id}
                currentCategoryId={post.category_id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
