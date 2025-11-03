import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsDetailPageProps {
  onNavigate: (page: string) => void;
}

export function NewsDetailPage({ onNavigate }: NewsDetailPageProps) {
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

        <article>
          <div className="mb-6">
            {/* <span className="inline-block bg-green-400 text-black px-3 py-1 rounded-full text-sm mb-4">
              ข่าว K-pop
            </span> */}
            <p className="text-gray-600">เผยแพร่เมื่อ 1 พฤศจิกายน 2568</p>
            <h1 className="mb-4">I'm so (So, Hot 6! Even!) - Aespa Comeback</h1>
          </div>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1566477712363-3c75dd39b416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcG9wJTIwY29uY2VydCUyMHN0YWdlfGVufDF8fHx8MTc2MTk4Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Aespa Comeback"
            className="w-full aspect-video object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="mb-4">
              วงเกิร์ลกรุ๊ป Aespa ได้ประกาศคัมแบ็คอัลบั้มใหม่ในชื่อ "I'm so (So, Hot 6! Even!)" ซึ่งจะวางจำหน่ายในเดือนธันวาคมนี้ 
              โดยอัลบั้มชุดนี้จะมีทั้งหมด 10 เพลง พร้อมด้วยเพลงนำที่มีชื่อเดียวกับชื่ออัลบั้ม
            </p>
            <p className="mb-4">
              สมาชิกทั้ง 4 คน ได้แก่ คารีน่า, จีเซล, วินเทอร์ และนิงนิง ได้เผยรายละเอียดเพิ่มเติมผ่านทางสื่อสังคมออนไลน์ 
              โดยบอกว่าอัลบั้มชุดนี้จะมีคอนเซ็ปต์ที่แตกต่างจากเดิม และมีการทดลองดนตรีในแนวใหม่ๆ
            </p>
            <p className="mb-4">
              นอกจากนี้ยังมีการเปิดเผยว่าจะมีงาน Showcase พิเศษที่กรุงเทพฯ ในเดือนมกราคม 2569 
              โดยแฟนคลับสามารถติดตามข่าวสารเพิ่มเติมได้ทางเว็บไซต์อย่างเป็นทางการ
            </p>
            
            <h2 className="mt-8 mb-4">รายละเอียดอัลบั้ม</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>ชื่ออัลบั้ม: I'm so (So, Hot 6! Even!)</li>
              <li>วันวางจำหน่าย: ธันวาคม 2568</li>
              <li>จำนวนเพลง: 10 เพลง</li>
              <li>ค่าย: SM Entertainment</li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                #Aespa #AespaComeback #KPop #SMEntertainment #NewAlbum
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
