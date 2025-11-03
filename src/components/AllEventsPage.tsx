import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ConcertCard } from './ConcertCard';

interface AllEventsPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function AllEventsPage({ onNavigate }: AllEventsPageProps) {
  const [eventFilter, setEventFilter] = useState<'ทั้งหมด' | 'คอนเสิร์ต' | 'แฟนไซน์' | 'ร้านอาหาร' | 'แฟนคาเฟ่' | 'ป๊อปอัพสโตร์' | 'งานอีเว้นท์' | 'งานแฟนมีตติ้ง' | 'งานอื่นเพิ่มเติม'>('ทั้งหมด');

  const concertData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
      category: 'คอนเสิร์ต' as const,
      title: 'LE SSERAFIM - UNFORGIVEN',
      priceRange: 'ค. 31 ธ.ค. - 01 ม.ค.',
      venue: 'LOS LIVE, EUGENESIA',
      location: 'Bangkok, Thailand',
      status: 'ยอดนิยม',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcG9zdGVyJTIwZGFya3xlbnwxfHx8fDE3NjE5ODc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'แฟนไซน์' as const,
      title: 'NCT DREAM Fansign',
      priceRange: 'ค. 15 ธ.ค.',
      venue: 'Central World',
      location: 'Bangkok, Thailand',
      status: 'ขายดี',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcG9zdGVyJTIwZGFya3xlbnwxfHx8fDE3NjE5ODc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'งานอีเว้นท์' as const,
      title: 'K-Pop Festival 2025',
      priceRange: 'ค. 20-22 ม.ค.',
      venue: 'Impact Arena',
      location: 'Bangkok, Thailand',
      status: 'ยอดนิยม',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcG9zdGVyJTIwZGFya3xlbnwxfHx8fDE3NjE5ODc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'งานแฟนมีตติ้ง' as const,
      title: 'ENHYPEN Fan Meeting',
      priceRange: 'ค. 10 ก.พ.',
      venue: 'Thunder Dome',
      location: 'Bangkok, Thailand',
      status: 'ยอดนิยม',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcG9zdGVyJTIwZGFya3xlbnwxfHx8fDE3NjE5ODc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'งานอื่นเพิ่มเติม' as const,
      title: 'K-Pop Dance Workshop',
      priceRange: 'ค. 5 ม.ค.',
      venue: 'Studio 99',
      location: 'Bangkok, Thailand',
      status: 'ขายดี',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'ร้านอาหาร' as const,
      title: 'BTS Themed Cafe & Restaurant',
      priceRange: 'ค. 1-31 ธ.ค.',
      venue: 'Siam Paragon',
      location: 'สยามพารากอน ชั้น 3',
      status: 'เปิดให้บริการ',
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'คอนเสิร์ต' as const,
      title: 'BLACKPINK World Tour Bangkok',
      priceRange: 'ค. 25-26 ม.ค.',
      venue: 'Rajamangala Stadium',
      location: 'Bangkok, Thailand',
      status: 'ยอดนิยม',
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'แฟนไซน์' as const,
      title: 'SEVENTEEN Fan Sign Event',
      priceRange: 'ค. 18 ธ.ค.',
      venue: 'CentralWorld',
      location: 'Bangkok, Thailand',
      status: 'ปิดรับสมัคร',
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'งานแฟนมีตติ้ง' as const,
      title: 'TWICE Hi-Touch Event',
      priceRange: 'ค. 5 ก.พ.',
      venue: 'Siam Paragon',
      location: 'Bangkok, Thailand',
      status: 'เปิดขาย',
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'ป๊อปอัพสโตร์' as const,
      title: 'BTS Pop-Up Store Bangkok',
      priceRange: 'ค. 1-15 ธ.ค.',
      venue: 'Siam Center',
      location: 'Bangkok, Thailand',
      status: 'เปิดแล้ว',
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'แฟนคาเฟ่' as const,
      title: 'NEWJEANS Fan Cafe Opening',
      priceRange: 'ค. 10 ธ.ค.',
      venue: 'Siam Square',
      location: 'Bangkok, Thailand',
      status: 'เปิดใหม่',
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'คอนเสิร์ต' as const,
      title: 'Stray Kids Maniac Tour',
      priceRange: 'ค. 8-9 ม.ค.',
      venue: 'Impact Arena',
      location: 'Bangkok, Thailand',
      status: 'ขายดี',
    },
    {
      id: 13,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'งานอีเว้นท์' as const,
      title: 'K-Pop Cover Dance Contest',
      priceRange: 'ค. 12 ธ.ค.',
      venue: 'Mega Bangna',
      location: 'Bangkok, Thailand',
      status: 'รับสมัคร',
    },
    {
      id: 14,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'ป๊อปอัพสโตร์' as const,
      title: 'BLACKPINK Official Store',
      priceRange: 'ค. 20-31 ธ.ค.',
      venue: 'CentralWorld',
      location: 'Bangkok, Thailand',
      status: 'เปิดแล้ว',
    },
    {
      id: 15,
      imageUrl: 'https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'ร้านอาหาร' as const,
      title: 'K-BBQ & K-Pop Restaurant',
      priceRange: 'ค. 1-31 ม.ค.',
      venue: 'Terminal 21',
      location: 'Bangkok, Thailand',
      status: 'เปิดให้บริการ',
    },
  ];

  const filteredEvents = eventFilter === 'ทั้งหมด'
    ? concertData
    : concertData.filter(event => event.category === eventFilter);

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

        <h1 className="mb-6">ตาราง Event - กิจกรรมทั้งหมด</h1>

        {/* Category Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button 
            onClick={() => setEventFilter('ทั้งหมด')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'ทั้งหมด' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            ทั้งหมด
          </button>
          <button 
            onClick={() => setEventFilter('คอนเสิร์ต')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'คอนเสิร์ต' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            คอนเสิร์ต
          </button>
          <button 
            onClick={() => setEventFilter('แฟนไซน์')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'แฟนไซน์' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            แฟนไซน์
          </button>
          <button 
            onClick={() => setEventFilter('ร้านอาหาร')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'ร้านอาหาร' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            ร้านอาหาร
          </button>
          <button 
            onClick={() => setEventFilter('แฟนคาเฟ่')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'แฟนคาเฟ่' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            แฟนคาเฟ่
          </button>
          <button 
            onClick={() => setEventFilter('ป๊อปอัพสโตร์')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'ป๊อปอัพสโตร์' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            ป๊อปอัพสโตร์
          </button>
          <button 
            onClick={() => setEventFilter('งานอีเว้นท์')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'งานอีเว้นท์' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            งานอีเว้นท์
          </button>
          <button 
            onClick={() => setEventFilter('งานแฟนมีตติ้ง')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'งานแฟนมีตติ้ง' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            งานแฟนมีตติ้ง
          </button>
          <button 
            onClick={() => setEventFilter('งานอื่นเพิ่มเติม')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              eventFilter === 'งานอื่นเพิ่มเติม' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            งานอื่นเพิ่มเติม
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredEvents.map((concert) => (
            <div key={concert.id} onClick={() => onNavigate('activity-detail', concert.id)}>
              <ConcertCard {...concert} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
