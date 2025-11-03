import { ArrowLeft, Calendar, MapPin, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ActivityDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ActivityDetailPage({ onNavigate }: ActivityDetailPageProps) {
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
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcG9zdGVyJTIwZGFya3xlbnwxfHx8fDE3NjE5ODc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="LE SSERAFIM Concert"
              className="w-full aspect-[2/3] object-cover rounded-lg"
            />
          </div>

          <div>
            <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm mb-4">
              ยอดนิยม
            </span>
            <h1 className="mb-4">LE SSERAFIM - UNFORGIVEN Tour Bangkok</h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>วันที่จัดงาน</p>
                  <p className="text-gray-600">31 ธันวาคม 2568 - 1 มกราคม 2569</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>เวลา</p>
                  <p className="text-gray-600">18:00 - 22:00 น.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>สถานที่</p>
                  <p className="text-gray-600">LOS LIVE, EUGENESIA</p>
                  <p className="text-gray-600">Bangkok, Thailand</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p>ราคาบัตร</p>
                  <p className="text-red-500">3,500 - 8,500 บาท</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4">รายละเอียดงาน</h2>
              <p className="text-gray-600 mb-4">
                LE SSERAFIM กำลังจะมาพร้อมกับทัวร์คอนเสิร์ต UNFORGIVEN ครั้งแรกในประเทศไทย! 
                เตรียมพบกับการแสดงสุดพิเศษจากสมาชิกทั้ง 5 คน ได้แก่ คิม แชวอน, ซากุระ มิยาวากิ, ฮอ ยุนจิน, คาซึฮา นากามูระ และฮง อึนแช 
                พร้อมด้วยเพลงฮิตมากมายที่จะทำให้คุณตื่นตาตื่นใจ
              </p>
              <p className="text-gray-600 mb-4">
                งานนี้จะมีการแสดงสดทั้งเพลงเก่าและเพลงใหม่ล่าสุด รวมถึงกิจกรรมพิเศษสำหรับแฟนคลับ 
                อาทิ Hi-Touch, Photo Time และกิจกรรม Surprise Special Stage ที่คุณจะได้ชมการแสดงพิเศษที่ไม่เหมือนใคร
              </p>
              <p className="text-gray-600 mb-4">
                เพลงที่จะได้ฟัง: ANTIFRAGILE, UNFORGIVEN, Eve Psyche & The Bluebeard's wife, 
                The Hydra, Perfect Night, Sour Grapes, Blue Flame และเพลงฮิตอื่นๆ อีกมากมาย
              </p>
              <p className="text-gray-600 mb-4">
                <strong>หมายเหตุ:</strong> ผู้เข้าชมต้องนำบัตรประชาชนมาแสดงเพื่อเปรียบเทียบกับชื่อผู้จองบัตร 
                และห้ามนำกล้องถ่ายรูปแบบมืออาชีพเข้างาน (อนุญาตให้ใช้โทรศัพท์มือถือถ่ายรูปได้)
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4">ข้อมูลการจองบัตร</h2>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">VIP Zone (รวม Hi-Touch & Photo)</span>
                  <span className="text-red-500">8,500 บาท</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">A Zone (นั่ง)</span>
                  <span className="text-red-500">6,500 บาท</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">B Zone (นั่ง)</span>
                  <span className="text-red-500">4,500 บาท</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">C Zone (ยืน)</span>
                  <span className="text-red-500">3,500 บาท</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>วันเปิดจองบัตร:</strong> 15 พฤศจิกายน 2568 เวลา 10:00 น.</p>
                <p className="mb-2"><strong>ช่องทางจอง:</strong> Thai Ticket Major, LINE MAN</p>
                <p><strong>จำนวนบัตรต่อคน:</strong> สูงสุด 4 ใบ</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                จองบัตรเลย
              </button>
              <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                เพิ่มเข้าปฏิทิน
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6">กิจกรรมที่คล้ายกัน</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'NCT DREAM Fansign', location: 'Central World' },
              { name: 'K-Pop Festival 2025', location: 'Impact Arena' },
              { name: 'ENHYPEN Fan Meeting', location: 'Thunder Dome' },
              { name: 'K-Pop Dance Workshop', location: 'Studio 99' }
            ].map((event, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1566331312619-5642b93028e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcG9zdGVyJTIwZGFya3xlbnwxfHx8fDE3NjE5ODc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={event.name}
                  className="w-full aspect-[2/3] object-cover"
                />
                <div className="p-3">
                  <p className="text-sm mb-1">{event.name}</p>
                  <p className="text-xs text-gray-600">{event.location}, Bangkok</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
