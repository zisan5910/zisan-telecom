import React, { useState, useEffect } from 'react';
import { Leaf, Truck, Shield, Percent, Gift, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const banners = [
  {
    id: 1,
    title: "১০০% অর্গানিক পণ্য",
    subtitle: "সরাসরি কৃষক থেকে আপনার দোরগোড়ায়",
    gradient: "from-primary to-primary/80",
    badges: [
      { icon: Leaf, text: "জৈব" },
      { icon: Truck, text: "ফ্রি ডেলিভারি" },
      { icon: Shield, text: "গ্যারান্টি" },
    ]
  },
  {
    id: 2,
    title: "বিশেষ ছাড়! ৩০% পর্যন্ত",
    subtitle: "সীমিত সময়ের জন্য সকল মসলায় বিশেষ ছাড়",
    gradient: "from-accent to-accent/80",
    badges: [
      { icon: Percent, text: "৩০% ছাড়" },
      { icon: Gift, text: "ফ্রি গিফট" },
      { icon: Star, text: "প্রিমিয়াম" },
    ]
  },
  {
    id: 3,
    title: "গ্রামীণ হস্তশিল্প",
    subtitle: "বাংলার ঐতিহ্যবাহী হস্তশিল্প সংগ্রহ",
    gradient: "from-info to-info/80",
    badges: [
      { icon: Star, text: "হাতে তৈরি" },
      { icon: Shield, text: "আসল" },
      { icon: Gift, text: "উপহার" },
    ]
  },
  {
    id: 4,
    title: "শীতের স্পেশাল",
    subtitle: "পিঠা, গুড় ও মিষ্টির সমাহার",
    gradient: "from-warning to-warning/80",
    badges: [
      { icon: Leaf, text: "তাজা" },
      { icon: Star, text: "দেশি" },
      { icon: Truck, text: "দ্রুত ডেলিভারি" },
    ]
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const currentBanner = banners[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div 
        className={cn(
          "relative p-5 text-primary-foreground transition-all duration-500 bg-gradient-to-r",
          currentBanner.gradient
        )}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2">{currentBanner.title}</h2>
          <p className="text-sm opacity-90 mb-4">
            {currentBanner.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {currentBanner.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-1.5 bg-primary-foreground/20 rounded-full px-3 py-1.5">
                <badge.icon className="w-4 h-4" />
                <span className="text-xs font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "bg-primary-foreground w-4" 
                : "bg-primary-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
