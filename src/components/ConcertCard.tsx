import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin } from 'lucide-react'

interface ConcertCardProps {
  imageUrl: string;
  category?: string;
  title: string;
  priceRange: string;
  venue: string;
  location: string;
  status: string;
}

export function ConcertCard({ imageUrl, category, title, priceRange, venue, location, status }: ConcertCardProps) {
  const getCategoryColor = () => {
    switch(category) {
      case 'คอนเสิร์ต': return 'bg-purple-400';
      case 'แฟนไซน์': return 'bg-pink-400';
      case 'ร้านอาหาร': return 'bg-orange-400';
      case 'แฟนคาเฟ่': return 'bg-blue-400';
      case 'เวิร์คช็อป': return 'bg-yellow-400';
      case 'ป๊อปอัพสโตร์': return 'bg-green-400';
      case 'งานอีเว้นท์': return 'bg-indigo-400';
      case 'งานแฟนมีตติ้ง': return 'bg-teal-400';
      case 'งานอื่นเพิ่มเติม': return 'bg-gray-400';
      default: return 'bg-yellow-400';
    }
  };
  
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full aspect-[2/3] object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="mb-1 font-bold">{title}</h3>
        <p className="text-red-500 mb-2 font-bold">{priceRange}</p>
        
        {/* <p className="text-sm text-gray-600 mb-1">{venue}</p> */}
        {/* ✨ เพิ่ม MapPin ที่นี่ */}
          <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {venue}
          </p>
        
        <p className="text-sm text-gray-600 mb-3">{location}</p>
        <span className={`inline-block ${getCategoryColor()} text-white px-3 py-1 rounded-full text-xs`}>
          {category || status}
        </span>
      </div>
    </div>
  );
}
