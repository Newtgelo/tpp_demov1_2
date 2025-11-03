import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  onViewAll?: () => void;
}

export function SectionHeader({ title, icon, onViewAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        {icon && <div className="w-1 h-8 bg-[rgb(0,68,255)] rounded"></div>}
        <h2 className="text-[20px] font-bold">{title}</h2>
      </div>
      <button 
        onClick={onViewAll}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
      >
        ดูทั้งหมด
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
