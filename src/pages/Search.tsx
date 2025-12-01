import React, { useState, useMemo } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { products, categories, formatPrice } from '@/data/products';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="সার্চ করুন" showBack={true} icon={SearchIcon} />
      <main className="px-4 py-4 max-w-7xl mx-auto space-y-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="পণ্য খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-xl"
          />
        </div>

        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="flex-1 h-10 rounded-xl"><SelectValue placeholder="ক্যাটাগরি" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">সব ক্যাটাগরি</SelectItem>
              {categories.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="flex-1 h-10 rounded-xl"><SelectValue placeholder="সর্ট" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="default">ডিফল���ট</SelectItem>
              <SelectItem value="price-low">দাম: কম</SelectItem>
              <SelectItem value="price-high">দাম: বেশি</SelectItem>
              <SelectItem value="rating">রেটিং</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <p className="text-sm text-muted-foreground">{filteredProducts.length} পণ্য পাওয়া গেছে</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Search;
