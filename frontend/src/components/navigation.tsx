'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MobileNav } from '@/components/mobile-nav';
import { Search } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

interface NavigationProps {
  categories: Category[];
}

export function Navigation({ categories }: NavigationProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">FunVault</h1>
                <p className="text-xs text-slate-500 hidden sm:block">Your Gaming Adventure Starts Here</p>
              </div>
            </Link>
          </div>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-2 max-w-md w-full mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-red-600 transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-slate-700 hover:text-red-700 transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <details className="relative group">
              <summary className="text-slate-700 hover:text-red-700 transition-colors font-medium inline-flex items-center gap-1 cursor-pointer list-none relative">
                Games <span className="text-xs">▼</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
              </summary>
              <div className="absolute z-50 left-0 mt-2 w-48 p-2 rounded-xl bg-white shadow-xl border border-slate-200">
                {categories.slice(0, 6).map((c) => (
                  <Link 
                    key={c.id} 
                    href={`/category/${c.slug}`} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <span className="text-lg">{getCategoryEmoji(c)}</span>
                    <div>
                      <p className="font-medium text-sm">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.description}</p>
                    </div>
                  </Link>
                ))}
                <div className="border-t mt-2 pt-2">
                  <Link href="#categories" className="block text-sm text-red-700 hover:text-red-800 font-medium">
                    View All Categories →
                  </Link>
                </div>
              </div>
            </details>
            <Link href="/about" className="text-slate-700 hover:text-red-700 transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-red-700 transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#newsletter" className="inline-flex items-center rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 hover:from-red-700 hover:to-red-900 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Subscribe
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <MobileNav categories={categories} />
        </div>
      </div>
    </header>
  );
}

// Helper function for category emojis
function getCategoryEmoji(category: Category): string {
  const emojiMap: { [key: string]: string } = {
    'Roblox': '🧱',
    'Minecraft': '⛏️',
    'Anime': '🎌',
    'Gaming': '🎯',
    'Technology': '💻',
    'Entertainment': '🎬'
  };
  return emojiMap[category.name] || '🎮';
}
