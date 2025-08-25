import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

interface FooterProps {
  categories?: Category[];
}

export function Footer({ categories = [] }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image
                  src="/Website_logo-removebg-preview.png"
                  alt="FunVault Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">FunVault</h3>
                <p className="text-slate-400 text-sm">Your Gaming Adventure</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your ultimate source for Roblox, Minecraft, and Anime content. Stay updated with the latest family‑friendly trends and tips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">YouTube</a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Discord</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <span>{getCategoryEmoji(category)}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Pages</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-red-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-red-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-red-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-slate-400 hover:text-red-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-slate-400 hover:text-red-400 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="text-slate-400 hover:text-red-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Get the latest gaming content delivered to your inbox.
            </p>
            <div id="newsletter" className="space-y-3">
              <Input placeholder="Your email" className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-red-500" />
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-800" />
        <div className="text-center text-slate-400">
          <p>&copy; 2024 FunVault. All rights reserved. | Built with Next.js & shadcn/ui</p>
        </div>
      </div>
    </footer>
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
