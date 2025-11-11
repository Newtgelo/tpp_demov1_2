import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { NewsCard } from './NewsCard';

interface AllNewsPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function AllNewsPage({ onNavigate }: AllNewsPageProps) {
  const [newsFilter, setNewsFilter] = useState<'ทั้งหมด' | 'K-pop' | 'T-pop'>('ทั้งหมด');
  const [showAll, setShowAll] = useState(false); // เพิ่ม state สำหรับจัดการการแสดงข่าว

  const newsData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าว PR',
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
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "aespa Next Level Tour 2025",
      date: '24 ต.ค. 2025',
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'T-pop' as const,
      tag: 'ข่าวด่วน',
      title: "ATLAS จัดงานแฟนมีตติ้ง",
      date: '23 ต.ค. 2025',
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'K-pop' as const,
      tag: 'ข่าวด่วน',
      title: "SEVENTEEN Ready to Love Tour",
      date: '22 ต.ค. 2025',
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'T-pop' as const,
      tag: 'ข่าวด่วน',
      title: "CGM48 เปิดตัวเพลงใหม่",
      date: '21 ต.ค. 2025',
    },
  ];

  const filteredNews = newsFilter === 'ทั้งหมด' 
    ? newsData 
    : newsData.filter(news => news.category === newsFilter);

  // จำนวนข่าวที่จะแสดงในมือถือ (2 คอลัมน์ x 3 แถว = 6 ข่าว)
  const displayedNews = showAll ? filteredNews : filteredNews.slice(0, 6);
  const hasMoreNews = filteredNews.length > 6;

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

        <h1 className="mb-6">Latest News - ข่าวทั้งหมด</h1>

        {/* Category Filters */}
        <div className="flex gap-2 mb-6">
          <button 
            onClick={() => {
              setNewsFilter('ทั้งหมด');
              setShowAll(false); // Reset เมื่อเปลี่ยน filter
            }}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              newsFilter === 'ทั้งหมด' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            ข่าวทั้งหมด
          </button>
          <button 
            onClick={() => {
              setNewsFilter('K-pop');
              setShowAll(false); // Reset เมื่อเปลี่ยน filter
            }}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              newsFilter === 'K-pop' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            K-pop
          </button>
          <button 
            onClick={() => {
              setNewsFilter('T-pop');
              setShowAll(false); // Reset เมื่อเปลี่ยน filter
            }}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              newsFilter === 'T-pop' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            T-pop
          </button>
        </div>

        {/* News Grid - Responsive: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedNews.map((news) => (
            <div key={news.id} onClick={() => onNavigate('news-detail', news.id)}>
              <NewsCard {...news} />
            </div>
          ))}
        </div>

        {/* Load More Button - แสดงเฉพาะมือถือและเมื่อมีข่าวเหลือ */}
        {!showAll && hasMoreNews && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full 
                          bg-white text-orange-500 border border-orange-500 
                          font-semibold shadow-md 
                          transition-colors duration-200 
                          hover:bg-orange-500 hover:text-white
                          "
            >
              ดูเพิ่มเติม
            </button>
          </div>
        )}

        {/* Show Less Button - แสดงเมื่อกดดูเพิ่มเติมแล้ว */}
        {showAll && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => {
                setShowAll(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors font-medium shadow-md"
            >
              แสดงน้อยลง
            </button>
          </div>
        )}
      </div>
    </main>
  );
}