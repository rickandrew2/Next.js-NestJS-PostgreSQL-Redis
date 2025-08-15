'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, Sparkles, Search, ArrowRight } from 'lucide-react';

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

// Helper function for category emojis
function getCategoryEmoji(categoryName: string): string {
  const emojiMap: { [key: string]: string } = {
    'Roblox': '🧱',
    'Minecraft': '⛏️',
    'Anime': '🌸',
    'Gaming': '🎯',
    'Technology': '💻',
    'Entertainment': '🎬'
  };
  return emojiMap[categoryName] || '🎮';
}

// Search component for hero section
export function HeroSearch({ posts, categories }: { posts: Post[]; categories: Category[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Search functionality
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results.slice(0, 6)); // Limit to 6 results
  };

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery, posts]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  return (
    <div className="relative" ref={searchContainerRef}>
      {/* Hero Search Input */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-300" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search for Roblox tips, Minecraft guides, anime reviews..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchOpen(true);
            }}
            onFocus={() => setIsSearchOpen(true)}
            className="w-full pl-16 pr-20 py-6 bg-white/15 border-white/30 text-white placeholder:text-red-200 rounded-2xl focus:ring-2 focus:ring-white/40 focus:border-white/40 text-xl backdrop-blur-sm"
          />
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
            <kbd className="px-3 py-1 text-sm bg-white/20 rounded-lg text-red-200 font-mono">⌘K</kbd>
          </div>
        </div>

        {/* Search Results Dropdown */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden z-[100] max-h-[80vh] overflow-y-auto">
            {searchQuery ? (
              <div className="p-6">
                <div className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  {searchResults.length > 0 ? `${searchResults.length} results found` : 'No results found'}
                </div>
                
                {searchResults.length > 0 ? (
                  <div className="space-y-3">
                    {searchResults.map((post) => (
                      <Link
                        key={post.id}
                        href={`/post/${post.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center text-lg font-bold text-red-700">
                          {categories.find(c => c.id === post.category_id)?.name.charAt(0) || 'A'}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-700 group-hover:text-red-700 line-clamp-1 text-lg">
                            {post.title}
                          </div>
                          <div className="text-sm text-slate-500 line-clamp-2 mt-1">
                            {post.excerpt || post.content.substring(0, 80)}...
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <Search className="w-16 h-16 mx-auto mb-6 opacity-50" />
                    <p className="text-lg font-medium mb-2">No articles found for "{searchQuery}"</p>
                    <p className="text-sm">Try different keywords or browse categories below</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-6">
                  {/* Popular Searches */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Popular Searches
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['Roblox tips', 'Minecraft redstone', 'Anime recommendations', 'Gaming guides'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="text-left p-4 rounded-xl hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-700 group-hover:text-red-700 font-medium">{term}</span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Browse Categories
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {categories.slice(0, 4).map((category) => (
                        <Link
                          key={category.id}
                          href={`/category/${category.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="p-4 rounded-xl hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center text-sm font-bold text-red-700">
                              {getCategoryEmoji(category.name)}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-700 group-hover:text-red-700">{category.name}</div>
                              <div className="text-xs text-slate-500">{category.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
