import React from 'react';
import { Category } from '@/data/products';
import { cn } from '@/lib/utils';

// Category image URLs
const categoryImages: Record<string, string> = {
  "gas-cylinder": "https://images.unsplash.com/photo-1585164897054-f1c80e5c6c7b?w=100&h=100&fit=crop",
  "cement": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&h=100&fit=crop",
  "mobile": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
  "electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&h=100&fit=crop",
  "sanitary": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=100&h=100&fit=crop",
  "pipe": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=100&h=100&fit=crop",
  "bearing": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
  "paint": "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=100&h=100&fit=crop",
  "electrical": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=100&h=100&fit=crop",
  "fan": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=100&fit=crop",
  "light": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=100&h=100&fit=crop",
  "wire": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
  "hardware": "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=100&h=100&fit=crop",
  "tools": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
};

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isSelected, onClick }) => {
  const imageUrl = categoryImages[category.id] || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop";

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center min-w-[70px] py-2 transition-all duration-300"
    >
      <div
        className={cn(
          "w-14 h-14 rounded-full overflow-hidden mb-1.5 transition-all duration-300 border-2",
          isSelected
            ? "border-primary shadow-glow scale-110"
            : "border-transparent hover:border-primary/30"
        )}
      >
        <img
          src={imageUrl}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className={cn(
        "text-xs font-medium whitespace-nowrap transition-colors",
        isSelected ? "text-primary font-semibold" : "text-foreground"
      )}>
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;
