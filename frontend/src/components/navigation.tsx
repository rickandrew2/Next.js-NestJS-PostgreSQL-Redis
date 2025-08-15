'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, Sparkles } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
}

interface NavigationProps {
  categories: Category[];
}

export function Navigation({ categories }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Simple Clean Navigation Bar */}
      <nav className="bg-gradient-to-r from-red-900 to-red-800 text-white shadow-xl border-b-2 border-white/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group" prefetch={true}>
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-lg p-1 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/Website_logo-removebg-preview.png"
                    alt="FunVault Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-1.5 h-1.5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  FunVault
                </span>
                <span className="text-xs text-red-200 font-medium -mt-1 tracking-wide">Gaming & Anime</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Navigation Links */}
              <div className="flex items-center gap-1">
                <Link 
                  href="/" 
                  className="px-4 py-2 text-white hover:text-red-200 transition-all duration-200 font-medium rounded-lg hover:bg-white/10"
                  prefetch={true}
                >
                  Home
                </Link>
                
                <Link 
                  href="/about" 
                  className="px-4 py-2 text-white hover:text-red-200 transition-all duration-200 font-medium rounded-lg hover:bg-white/10"
                  prefetch={true}
                >
                  About
                </Link>
                
                <Link 
                  href="/contact" 
                  className="px-4 py-2 text-white hover:text-red-200 transition-all duration-200 font-medium rounded-lg hover:bg-white/10"
                  prefetch={true}
                >
                  Contact
                </Link>
                
                {/* Categories Dropdown */}
                <div className="relative group">
                  <button className="px-4 py-2 text-white hover:text-red-200 transition-all duration-200 font-medium rounded-lg hover:bg-white/10 flex items-center gap-2">
                    Categories
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-red-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                   <div className="p-3">
                     <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                       <Sparkles className="w-3 h-3" />
                       Explore Categories
                     </div>
                     <div className="space-y-1">
                       {categories.map((category) => (
                         <Link
                           key={category.id}
                           href={`/category/${category.slug}`}
                           className="flex items-center gap-3 px-3 py-3 text-slate-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group/item"
                           prefetch={true}
                         >
                           <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center text-sm font-bold text-red-700 group-hover/item:scale-110 transition-transform duration-200">
                             {getCategoryEmoji(category.name)}
                           </div>
                           <div className="flex-1">
                             <div className="font-semibold">{category.name}</div>
                             <div className="text-xs text-slate-500 line-clamp-1">{category.description}</div>
                           </div>
                         </Link>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

                       {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-red-200 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <div className="lg:hidden bg-red-800 border-t border-red-700">
             <div className="container mx-auto px-4 py-4 space-y-2">
               <Link 
                 href="/" 
                 className="block px-4 py-3 text-white hover:text-red-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                 onClick={() => setIsMobileMenuOpen(false)}
                 prefetch={true}
               >
                 Home
               </Link>
               <Link 
                 href="/about" 
                 className="block px-4 py-3 text-white hover:text-red-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                 onClick={() => setIsMobileMenuOpen(false)}
                 prefetch={true}
               >
                 About
               </Link>
               <Link 
                 href="/contact" 
                 className="block px-4 py-3 text-white hover:text-red-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                 onClick={() => setIsMobileMenuOpen(false)}
                 prefetch={true}
               >
                 Contact
               </Link>
               
               {/* Mobile Categories */}
               <div className="pt-2 border-t border-red-700">
                 <div className="text-xs font-bold text-red-200 uppercase tracking-wider mb-3 px-4">
                   Categories
                 </div>
                 <div className="space-y-1">
                   {categories.map((category) => (
                     <Link
                       key={category.id}
                       href={`/category/${category.slug}`}
                       className="flex items-center gap-3 px-4 py-3 text-white hover:text-red-200 hover:bg-white/10 rounded-lg transition-all duration-200"
                       onClick={() => setIsMobileMenuOpen(false)}
                       prefetch={true}
                     >
                       <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm font-bold">
                         {getCategoryEmoji(category.name)}
                       </div>
                       <span className="font-medium">{category.name}</span>
                     </Link>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         )}
       </nav>
     </>
   );
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
