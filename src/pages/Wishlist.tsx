import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <TopNav title="উইশলিস্ট" showBack={true} icon={Heart} />
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
            <Heart className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">উইশলিস্ট খালি</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            আপনার পছন্দের পণ্য যুক্ত করুন!
          </p>
          <Button onClick={() => navigate('/')} className="gradient-primary text-primary-foreground rounded-2xl">
            শপিং করুন
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="উইশলিস্ট" showBack={true} icon={Heart} />
      <main className="px-4 py-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Wishlist;
