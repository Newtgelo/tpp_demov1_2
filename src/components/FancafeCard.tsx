import { ImageWithFallback } from './figma/ImageWithFallback';

interface FancafeCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

export function FancafeCard({ imageUrl, title, description, date, time, location }: FancafeCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-bold py-1">{title}</h3>
        <p className="text-sm mb-1 line-clamp-2 font-bold font-normal">{description}...</p>
         {/* <p className="text-sm mb-1">{date}</p> */}
        {/* <p className="text-sm mb-2">{time}</p> */}
        <p className="text-sm text-[rgb(126,126,126)] py-2">{location}</p>
      </div>
    </div>
  );
}
