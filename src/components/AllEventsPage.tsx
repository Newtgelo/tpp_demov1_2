import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ConcertCard } from './ConcertCard';

interface AllEventsPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function AllEventsPage({ onNavigate }: AllEventsPageProps) {
  const [eventFilter, setEventFilter] = useState<
    | 'ทั้งหมด'
    | 'คอนเสิร์ต'
    | 'แฟนไซน์'
    | 'ร้านอาหาร'
    | 'แฟนคาเฟ่'
    | 'เวิร์คช็อป'
    | 'ป๊อปอัพสโตร์'
    | 'งานอีเว้นท์'
    | 'งานแฟนมีตติ้ง'
    | 'งานอื่นเพิ่มเติม'
  >('ทั้งหมด');

  const categories = [
    'ทั้งหมด',
    'คอนเสิร์ต',
    'แฟนไซน์',
    'ร้านอาหาร',
    'แฟนคาเฟ่',
    'เวิร์คช็อป',
    'ป๊อปอัพสโตร์',
    'งานอีเว้นท์',
    'งานแฟนมีตติ้ง',
    'งานอื่นเพิ่มเติม',
  ];

  const concertData = [
  {
    id: 1,
    title: 'LE SSERAFIM - UNFORGIVEN',
    category: 'คอนเสิร์ต',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
    priceRange: 'ค. 31 ธ.ค. - 01 ม.ค.',
    venue: 'LOS LIVE, EUGENESIA',
    location: 'Bangkok, Thailand',
    status: 'ยอดนิยม',
  },
  {
    id: 2,
    title: 'NCT DREAM Fansign',
    category: 'แฟนไซน์',
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa34b25db71b?w=400', // เปลี่ยนรูป
    priceRange: 'ค. 15 ธ.ค.',
    venue: 'Central World',
    location: 'Bangkok, Thailand',
    status: 'ขายดี',
  },
  {
    id: 3,
    title: 'BTS Themed Cafe & Restaurant',
    category: 'ร้านอาหาร',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    priceRange: 'ค. 1-31 ธ.ค.',
    venue: 'Siam Paragon ชั้น 3',
    location: 'Bangkok, Thailand',
    status: 'เปิดให้บริการ',
  },
  {
    id: 4,
    title: 'Seventeen Fan Café',
    category: 'แฟนคาเฟ่',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
    priceRange: 'ค. 12-28 ม.ค.',
    venue: 'K-Village',
    location: 'Bangkok, Thailand',
    status: 'ใหม่ล่าสุด',
  },
  {
    id: 5,
    title: 'K-Pop Dance Workshop',
    category: 'เวิร์คช็อป',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e535f9f7f?w=400', // รูปเต้น
    priceRange: 'ค. 15 ม.ค.',
    venue: 'The Hub BTS',
    location: 'Bangkok, Thailand',
    status: 'เปิดให้บริการ',
  },
  {
    id: 6,
    title: 'BTS Pop-Up Store Bangkok',
    category: 'ป๊อปอัพสโตร์',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', // รูปหน้าร้าน
    priceRange: 'ค. 1-15 ธ.ค.',
    venue: 'Siam Center',
    location: 'Bangkok, Thailand',
    status: 'เปิดแล้ว',
  },
  
];

  // กรองตามหมวดหมู่
  const filteredEvents =
    eventFilter === 'ทั้งหมด'
      ? concertData
      : concertData.filter((event) => event.category === eventFilter);

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          กลับไปหน้าหลัก
        </button>

        <h1 className="mb-6 text-lg font-semibold">
          ตาราง Event - กิจกรรมทั้งหมด
        </h1>

        {/* ปุ่มกรอง */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setEventFilter(category as typeof eventFilter)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                eventFilter === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* แสดงผลการ์ด */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredEvents.map((concert) => (
            <div
              key={concert.id}
              onClick={() => onNavigate('activity-detail', concert.id)}
              className="cursor-pointer"
            >
              <ConcertCard {...concert} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
