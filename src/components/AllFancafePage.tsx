import { ArrowLeft } from 'lucide-react';
import { FancafeCard } from './FancafeCard';

interface AllFancafePageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function AllFancafePage({ onNavigate }: AllFancafePageProps) {
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
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'The K-Fan Hub',
      description: 'ศูนย์รวมแฟนคลับ K-Pop ทุกวง มีของสะสม photocard และอัลบั้มให้ดูเต็มไปหมด พร้อมพื้นที่สำหรับ trade card',
      date: 'วันศุกร์ที่ 8 พ.ย. พ.ศ.2568',
      time: 'เวลา 12:00 - 21:00 น.',
      location: 'ใกล้ ห้วยขวาง, กรุงเทพฯ',
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Purple Star Cafe',
      description: 'คาเฟ่สีม่วงสวยงาม ธีม BTS โดยเฉพาะ มีมุมถ่ายรูปสวยๆ มากมาย และเมนูเครื่องดื่มสีม่วงสุดพิเศษ',
      date: 'วันเสาร์ที่ 9 พ.ย. พ.ศ.2568',
      time: 'เวลา 10:00 - 20:00 น.',
      location: 'ใกล้ รามคำแหง, กรุงเทพฯ',
    },
  ];

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

        <h1 className="mb-6">แนะนำสถานที่ Fancafe - ทั้งหมด</h1>

        {/* Fancafe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fancafeData.map((cafe) => (
            <div key={cafe.id} onClick={() => onNavigate('cafe-detail', cafe.id)}>
              <FancafeCard {...cafe} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
