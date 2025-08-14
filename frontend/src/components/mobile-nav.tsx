'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

interface MobileNavProps {
  categories: Category[];
}

export function MobileNav({ categories }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button 
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-red-50 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-muted-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-muted-foreground" />
        )}
      </button>

      {/* Mobile Navigation - Simple Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-t bg-card shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-muted-foreground hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-muted-foreground hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-muted-foreground hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#newsletter" 
              className="block py-2 text-red-600 font-medium hover:text-red-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
