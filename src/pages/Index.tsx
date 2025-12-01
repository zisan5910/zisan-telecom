import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, SlidersHorizontal, Leaf, ShoppingBag } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import BottomNav from '@/components/BottomNav';
import HamburgerMenu from '@/components/HamburgerMenu';
import SearchBar from '@/components/SearchBar';
import Banner from '@/components/Banner';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalItems = getTotalItems();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b border-border">
        <div className="px-4 py-3 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <HamburgerMenu />
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-bold text-gradient hidden sm:block">অর্গানিক শপ</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/cart')}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </header>

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
        {/* Banner */}
        <Banner />

        {/* Categories */}
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">ক্যাটাগরি</h2>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex flex-col items-center justify-center min-w-[72px] p-3 rounded-xl transition-all duration-300 ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-card hover:bg-secondary shadow-soft"
              }`}
            >
              <ShoppingBag className={`w-6 h-6 mb-1 ${!selectedCategory ? "text-primary-foreground" : "text-primary"}`} />
              <span className="text-xs font-medium whitespace-nowrap">সব</span>
            </button>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </section>

        {/* Products Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-foreground">
            সব পণ্য ({filteredProducts.length})
          </h2>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-36 h-9 bg-card border-border">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <SelectValue placeholder="সর্ট করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">ডিফল্ট</SelectItem>
              <SelectItem value="price-low">দাম: কম থেকে বেশি</SelectItem>
              <SelectItem value="price-high">দাম: বেশি থেকে কম</SelectItem>
              <SelectItem value="rating">রেটিং</SelectItem>
              <SelectItem value="newest">নতুন</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-slide-up"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">কোনো পণ্য পাওয়া যায়নি</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
