import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Eye, BookOpen, ArrowRight } from 'lucide-react';

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

interface ArticleSidebarProps {
  relatedPosts: Post[];
  popularPosts: Post[];
  categories: Category[];
  currentPostId?: number;
  currentCategoryId?: number;
}

export default function ArticleSidebar({
  relatedPosts,
  popularPosts,
  categories,
  currentPostId,
  currentCategoryId
}: ArticleSidebarProps) {
  // Filter out current post from popular posts
  const filteredPopularPosts = popularPosts.filter(post => post.id !== currentPostId);

  return (
    <div className="space-y-8">
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-bold text-slate-900">Related Articles</h3>
          </div>
          <div className="space-y-4">
            {relatedPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                <Link href={`/post/${post.slug}`} className="flex gap-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    {post.featured_image ? (
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                        sizes="80px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center rounded-l-lg">
                        <span className="text-lg">🎮</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3 flex-1">
                    <CardTitle className="text-sm font-bold text-slate-800 group-hover:text-red-700 transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      <span>•</span>
                      <Eye className="h-3 w-3" />
                      <span>{post.view_count}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Popular Articles */}
      {filteredPopularPosts.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-bold text-slate-900">Popular Articles</h3>
          </div>
          <div className="space-y-3">
            {filteredPopularPosts.slice(0, 5).map((post, index) => (
              <Card key={post.id} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                <Link href={`/post/${post.slug}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-700 font-bold text-xs">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm font-bold line-clamp-2 group-hover:text-red-700 transition-colors">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                          <Eye className="h-3 w-3" />
                          <span>{post.view_count} views</span>
                          <span>•</span>
                          <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                currentCategoryId === category.id
                  ? 'bg-red-50 border border-red-200 text-red-700'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                currentCategoryId === category.id ? 'text-red-600' : 'text-slate-400'
              }`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
        <div className="text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Stay Updated!</h3>
          <p className="text-sm text-slate-600 mb-4">
            Get the latest gaming tips and tutorials delivered to your inbox.
          </p>
          <Button asChild size="sm" className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white">
            <Link href="/#newsletter">
              Subscribe to Newsletter
            </Link>
          </Button>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-xl p-6 border border-slate-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Recommended for You</h3>
          <p className="text-sm text-slate-600 mb-4">
            Handpicked gaming products and services
          </p>
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-slate-300">
            <p className="text-sm text-slate-600 font-medium">AdSense Sidebar</p>
            <p className="text-xs text-slate-500 mt-1">300x250 or 300x600</p>
          </div>
        </div>
      </div>
    </div>
  );
}
