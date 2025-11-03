interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <h2>The Popup Plan</h2>
            </div>
            <p className="text-sm text-gray-400">
              Minimalist K-Pop Hub & Event Planner
            </p>
          </div>

          <div>
            <h3 className="mb-4">เมนูหลัก</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  หน้าหลัก
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors">
                  ข่าวสาร
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-white transition-colors">
                  กิจกรรม
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fancafe')} className="hover:text-white transition-colors">
                  แฟนคาเฟ่
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">ติดต่อเรา</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>ติดต่อโฆษณาได้ที่</p>
              <p>อีเมล: pr@thepopupplan.com</p>
              <p>โทร: 02-XXX-XXXX</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 The Popup Plan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
