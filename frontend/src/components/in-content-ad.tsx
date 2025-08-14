import { Card, CardContent } from '@/components/ui/card';

interface InContentAdProps {
  position?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export default function InContentAd({ position = 'middle', className = '' }: InContentAdProps) {
  const getAdTitle = () => {
    switch (position) {
      case 'top':
        return 'Before You Continue';
      case 'middle':
        return 'Recommended Reading';
      case 'bottom':
        return 'Explore More';
      default:
        return 'Recommended';
    }
  };

  const getAdDescription = () => {
    switch (position) {
      case 'top':
        return 'Check out these amazing gaming products before diving into the article';
      case 'middle':
        return 'Take a quick break and discover something interesting';
      case 'bottom':
        return 'Continue your gaming journey with these recommendations';
      default:
        return 'Handpicked for you';
    }
  };

  return (
    <div className={`my-8 ${className}`}>
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{getAdTitle()}</h3>
            <p className="text-sm text-slate-600 mb-4">{getAdDescription()}</p>
            <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-lg p-4 border-2 border-dashed border-slate-300">
              <p className="text-sm text-slate-600 font-medium">In-Content AdSense</p>
              <p className="text-xs text-slate-500 mt-1">Responsive ad unit</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
