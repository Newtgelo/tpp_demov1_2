import { useState } from 'react';
import { HeroSection } from './HeroSection';
import { SectionHeader } from './SectionHeader';
import { NewsCard } from './NewsCard';
import { ConcertCard } from './ConcertCard';
import { FancafeCard } from './FancafeCard';

import { XPostEmbed } from "./components/XPostEmbed";

interface HomePageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [newsFilter, setNewsFilter] = useState<'ทั้งหมด' | 'K-pop' | 'T-pop'>('ทั้งหมด'); 
  const [eventFilter, setEventFilter] = useState<'ทั้งหมด' | 'คอนเสิร์ต' | 'แฟนไซน์' | 'ร้านอาหาร' | 'แฟนคาเฟ่' | 'ป๊อปอัพสโตร์' | 'งานอีเว้นท์' | 'งานแฟนมีตติ้ง' | 'งานอื่นเพิ่มเติม'>('ทั้งหมด');


  
  const newsData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "I'm so (So, Hot 6! Even!)",
      date: '1 พ.ย. 2025',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'T-pop' as const,
      tag: 'ข่าวด่วน',
      title: "4EVE The Series พร้อมออกอากาศ",
      date: '31 ต.ค. 2025',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "BLACKPINK World Tour Bangkok",
      date: '30 ต.ค. 2025',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'T-pop' as const,
      tag: 'ข่าวด่วน',
      title: "BNK48 ประกาศคอนเสิร์ตใหม่",
      date: '29 ต.ค. 2025',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "NewJeans Comeback Stage",
      date: '28 ต.ค. 2025',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "Stray Kids Maniac Tour",
      date: '27 ต.ค. 2025',
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'T-pop' as const,
      tag: 'ข่าวด่วน',
      title: "TRINITY ปล่อยเพลงใหม่",
      date: '26 ต.ค. 2025',
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "BTS Comeback Announcement",
      date: '25 ต.ค. 2025',
    },
  ];

  const concertData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
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
  ];

  const fancafeData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Chill Out Corner',
      description: 'คาเฟ่สไตล์มินิมอลสำหรับแฟนคลับ K-Pop พร้อมมุมถ่ายรูปสวยๆ และเมนูเครื่องดื่มพิเศษที่ตั้งชื่อตามศิลปิน',
      date: 'วันเสาร์ที่ 2 พ.ย. พ.ศ.2568',
      time: 'เวลา 13:00 - 18:00 น.',
      location: 'ใกล้ สามย่าน, กรุงเทพฯ',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'K-Pop Lovers Cafe',
      description: 'ร้านกาแฟธีม K-Pop พร้อมมุมจัดแสดงสินค้าของศิลปิน และพื้นที่สำหรับนั่งพูดคุยแลกเปลี่ยนกับแฟนคลับคนอื่นๆ',
      date: 'วันอาทิตย์ที่ 3 พ.ย. พ.ศ.2568',
      time: 'เวลา 10:00 - 20:00 น.',
      location: 'ใกล้ สยาม, กรุงเทพฯ',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Stan Cafe Bangkok',
      description: 'แหล่งรวมแฟนคลับทุกวง มีกิจกรรมเล่น MV และจำหน่ายสินค้าไอดอลหลากหลาย บรรยากาศสบายๆ เหมาะกับการนั่งทำงาน',
      date: 'วันจันทร์ที่ 4 พ.ย. พ.ศ.2568',
      time: 'เวลา 12:00 - 22:00 น.',
      location: 'ใกล้ อารีย์, กรุงเทพฯ',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Idol Dream Cafe',
      description: 'คาเฟ่ธีมไอดอลเกาหลี มีห้องคาราโอเกะส่วนตัว สำหรับร้องเพลง K-Pop กับเพื่อนๆ พร้อมเครื่องดื่มและขนมหวานน่ารักๆ',
      date: 'วันอังคารที่ 5 พ.ย. พ.ศ.2568',
      time: 'เวลา 11:00 - 21:00 น.',
      location: 'ใกล้ เอกมัย, กรุงเทพฯ',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'K-Vibe Coffee',
      description: 'คาเฟ่เล็กๆ น่ารัก มีมุมถ่ายรูปสไตล์เกาหลีเยอะมาก เหมาะกับการมานั่งชิลๆ ฟังเพลง K-Pop กับเพื่อนๆ',
      date: 'วันพุธที่ 6 พ.ย. พ.ศ.2568',
      time: 'เวลา 09:00 - 19:00 น.',
      location: 'ใกล้ ทองหล่อ, กรุงเทพฯ',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Seoul Vibes Cafe',
      description: 'คาเฟ่สไตล์เกาหลีแท้ๆ มีเมนูอาหารเกาหลีให้เลือกมากมาย บรรยากาศเหมือนอยู่ที่เกาหลีจริงๆ พร้อมเพลง K-Pop ฮิต',
      date: 'วันพฤหัสที่ 7 พ.ย. พ.ศ.2568',
      time: 'เวลา 10:00 - 22:00 น.',
      location: 'ใกล้ พร้อมพงษ์, กรุงเทพฯ',
    },
  ];

  // กรองข่าว
  const filteredNews = newsFilter === 'ทั้งหมด' 
    ? newsData  // แสดงทั้งหมด
    : newsData.filter(news => news.category === newsFilter); // กรองตาม category

  // กรองอีเว้นท์
  const filteredEvents = eventFilter === 'ทั้งหมด'
    ? concertData
    : concertData.filter(event => event.category === eventFilter);

  return (
    <main>
      <HeroSection />

      {/* Latest News Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Latest News" 
            icon={true} 
            onViewAll={() => onNavigate('all-news')}
          />
          
          {/* Category Filters */}
          <div className="flex gap-2 mb-6">
            <button 
              onClick={() => setNewsFilter('ทั้งหมด')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                newsFilter === 'ทั้งหมด' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              ข่าวทั้งหมด
            </button>
            <button 
              onClick={() => setNewsFilter('K-pop')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                newsFilter === 'K-pop' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              K-pop
            </button>
            <button 
              onClick={() => setNewsFilter('T-pop')}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                newsFilter === 'T-pop' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              T-pop
            </button>
          </div>

          {/* News Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {filteredNews.map((news) => (
      <div key={news.id} onClick={() => onNavigate('news-detail', news.id)}>
        <NewsCard {...news} />
      </div>
    ))}
  </div>

</div>
      </section>

      {/* Concert Tickets Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="ตาราง Event" 
            icon={true}
            onViewAll={() => onNavigate('all-events')}
          />
          
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

          {/* Concert Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredEvents.slice(0, 5).map((concert) => (
              <div key={concert.id} onClick={() => onNavigate('activity-detail', concert.id)}>
                <ConcertCard {...concert} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fancafe Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="แนะนำสถานที่ Fancafe" 
            icon={true}
            onViewAll={() => onNavigate('all-fancafe')}
          />
          
          {/* Fancafe Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fancafeData.slice(0,4).map((cafe) => (
              <div key={cafe.id} onClick={() => onNavigate('cafe-detail', cafe.id)}>
                <FancafeCard {...cafe} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Topic X" icon={true} />
          
        
        </div>
      </section>

    </main>
  );
}
