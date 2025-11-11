import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock } from "lucide-react";

interface NewsCardProps {
  imageUrl: string;
  category?: string;
  tag: string;
  title: string;
  date: string;
}

export function NewsCard({
  imageUrl,
  category,
  tag,
  title,
  date,
}: NewsCardProps) {
  const tagColor =
    category === "K-pop"
      ? "bg-pink-400"
      : category === "T-pop"
        ? "bg-blue-400"
        : "bg-green-400";

  return (
    <div className="relative rounded-lg overflow-hidden group cursor-pointer hover:scale-105 shadow-md transition-transform duration-300 ease-in-out">
      
      <ImageWithFallback
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover aspect-square" // สี่เหลี่ยมจัตุรัส - h-full ออก
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute top-3 left-3">
        <span
          className={`${tagColor} text-white px-3 py-1 rounded-full text-xs`}
        >
          {category || tag}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="text-sm mb-1 font-bold text-[16px]">{title}</p>
        <p className="text-xs opacity-80 flex items-center gap-1 text-[10px]">
          <Clock className="w-3 h-3" />
          Posted On : {date}
        </p>
      </div>
    </div>
  );
}