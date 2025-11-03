import { ArrowLeft, Calendar, MapPin, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CafeDetailPageProps {
  onNavigate: (page: string) => void;
}

export function CafeDetailPage({ onNavigate }: CafeDetailPageProps) {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          กลับไปหน้าหลัก
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1604266190639-ef8c24cfa1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzYxOTg4OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="K-Pop Lovers Cafe"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div className="grid grid-cols-3 gap-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cafe view 2"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604266190639-ef8c24cfa1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzYxOTg4OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cafe view 3"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cafe view 4"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <span className="inline-block bg-pink-400 text-white px-3 py-1 rounded-full text-sm mb-4">
              K-Pop Cafe
            </span>
            <h1 className="mb-4">K-Pop Lovers Cafe</h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>เวลาทำการ</p>
                  <p className="text-gray-600">จันทร์ - ศุกร์: 10:00 - 22:00 น.</p>
                  <p className="text-gray-600">เสาร์ - อาทิตย์: 09:00 - 23:00 น.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>ที่อยู่</p>
                  <p className="text-gray-600">123 ถนนสยาม แขวงปทุมวัน</p>
                  <p className="text-gray-600">กรุงเทพมหานคร 10330</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>ราคาเฉลี่ย</p>
                  <p className="text-orange-500">150 - 350 บาท/คน</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>กิจกรรมพิเศษ</p>
                  <p className="text-gray-600">ทุกวันเสาร์ - มีกิจกรรม K-Pop Quiz</p>
                  <p className="text-gray-600">รับส่วนลด 20%</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4">รายละเอียดคาเฟ่</h2>
              <p className="text-gray-600 mb-4">
                คาเฟ่สไตล์เกาหลีที่ออกแบบมาเพื่อแฟนเพลง K-Pop โดยเฉพาะ! 
                บรรยากาศสบายๆ พร้อมตกแต่งด้วยโปสเตอร์ศิลปินชื่อดัง มีมุมถ่ายรูปสวยๆ มากมาย 
                ทั้งมุม Lightstick Wall, Photo Booth สไตล์เกาหลี และมุม Cupsleeve Display ที่อัพเดทตลอด
              </p>
              <p className="text-gray-600 mb-4">
                เมนูแนะนำ: กระเพราหมูสับ, ข้าวผัดคิมจิ, ทอปปิกกี, บิงซูสตรอเบอร์รี่, Korean Corn Dog, 
                และเครื่องดื่มพิเศษที่ตั้งชื่อตามศิลปินดัง เช่น "Butter Latte", "Dynamite Frappe" และ "Sweet Night Coffee" 
                พร้อมเล่นเพลง K-Pop และ MV ตลอดทั้งวัน
              </p>
              <p className="text-gray-600 mb-4">
                มีอุปกรณ์และอัลบั้มให้ชม สามารถนำอัลบั้มตัวเองมาฟังและดูได้ 
                พร้อมบริการ Wi-Fi ฟรี, ปลั๊กไฟสำหรับชาร์จเครื่อง และพื้นที่สำหรับนั่งทำงานหรืออ่านหนังสือ
              </p>
              <p className="text-gray-600 mb-4">
                <strong>กิจกรรมพิเศษ:</strong> ทุกสัปดาห์จะมี Cupsleeve Event, Photocard Trade และ K-Pop Trivia Quiz ที่ชนะรับส่วนลดและของรางวัล
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4">เมนูแนะนำ</h2>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div>
                  <p className="text-sm mb-2">🍜 <strong>อาหารจานหลัก</strong></p>
                  <div className="pl-4 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">กระเพราหมูสับ</span>
                      <span className="text-orange-500">120 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ข้าวผัดคิมจิ</span>
                      <span className="text-orange-500">150 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ทอปปิกกี (ต๊อกบอกกี)</span>
                      <span className="text-orange-500">135 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Korean Corn Dog</span>
                      <span className="text-orange-500">85 บาท</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">🍧 <strong>ของหวาน</strong></p>
                  <div className="pl-4 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">บิงซูสตรอเบอร์รี่</span>
                      <span className="text-orange-500">180 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">มะม่วงบิงซู</span>
                      <span className="text-orange-500">200 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Honey Bread</span>
                      <span className="text-orange-500">150 บาท</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">☕ <strong>เครื่องดื่ม</strong></p>
                  <div className="pl-4 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Butter Latte (BTS Theme)</span>
                      <span className="text-orange-500">95 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pink Venom Bubble Tea</span>
                      <span className="text-orange-500">85 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dynamite Frappe</span>
                      <span className="text-orange-500">110 บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sweet Night Coffee</span>
                      <span className="text-orange-500">90 บาท</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                ดูแผนที่
              </button>
              <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                โทรติดต่อร้าน
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6">คาเฟ่แนะนำอื่นๆ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Chill Out Corner', location: 'สามย่าน' },
              { name: 'Stan Cafe Bangkok', location: 'อารีย์' },
              { name: 'Idol Dream Cafe', location: 'เอกมัย' },
              { name: 'K-Vibe Coffee', location: 'ทองหล่อ' }
            ].map((cafe, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MTk3ODc1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={cafe.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-3">
                  <p className="text-sm mb-1">{cafe.name}</p>
                  <p className="text-xs text-gray-600">{cafe.location}, กรุงเทพฯ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
