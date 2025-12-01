import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=300&fit=crop",
    title: "সেরা মানের পণ্য",
    subtitle: "সরাসরি আপনার দোরগোড়ায়"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=300&fit=crop",
    title: "বিশেষ ছাড়!",
    subtitle: "সীমিত সময়ের জন্য"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop",
    title: "নির্মাণ সামগ্রী",
    subtitle: "সকল ধরনের হার্ডওয়্যার"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=300&fit=crop",
    title: "ইলেকট্রনিক্স",
    subtitle: "মোবাইল ও গ্যাজেট"
  },
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="relative h-36 sm:h-44 transition-all duration-500">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-5">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{banner.title}</h2>
              <p className="text-sm text-white/90">{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "bg-white w-5" 
                : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
