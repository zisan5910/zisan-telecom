import React from 'react';
import { Category } from '@/data/products';
import { cn } from '@/lib/utils';
import { 
  Carrot, Apple, Droplets, Wheat, Droplet, Flame, Milk, Bean, 
  Citrus, Crown, Palette, Cookie, Fish, Shirt, Package 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Carrot, Apple, Droplets, Wheat, Droplet, Flame, Milk, Bean,
  Citrus, Crown, Palette, Cookie, Fish, Shirt, Package
};

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isSelected, onClick }) => {
  const IconComponent = iconMap[category.icon] || Package;

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center min-w-[72px] p-3 rounded-xl transition-all duration-300",
        isSelected
          ? "bg-primary text-primary-foreground shadow-glow scale-105"
          : "bg-card hover:bg-secondary shadow-soft"
      )}
    >
      <IconComponent className={cn(
        "w-6 h-6 mb-1",
        isSelected ? "text-primary-foreground" : "text-primary"
      )} />
      <span className={cn(
        "text-xs font-medium whitespace-nowrap",
        isSelected ? "text-primary-foreground" : "text-foreground"
      )}>
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;
