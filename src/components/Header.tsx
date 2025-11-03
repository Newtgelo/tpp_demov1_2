import { Search } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <h1 className="font-bold">The Popup Plan</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Minimalist K-Pop Hub & Event Planner</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ค้นหากิจกรรม/ศิลปิน..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
