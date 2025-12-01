import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { locations } from '@/data/products';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import CartItem from '@/components/CartItem';
import Benefits from '@/components/Benefits';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice } = useCart();
  const [selectedLocation, setSelectedLocation] = useState<string>('mirpur');

  const location = locations.find(l => l.id === selectedLocation);
  const deliveryCharge = location?.deliveryCharge || 0;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryCharge;

  const handleCheckout = () => {
    navigate('/order');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <TopNav title="কার্ট" showBack={false} />
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">কার্ট খালি</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            আপনার কার্টে কোনো পণ্য নেই। শপিং শুরু করুন!
          </p>
          <Button
            onClick={() => navigate('/')}
            className="gradient-primary text-primary-foreground"
          >
            শপিং করুন
          </Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="কার্ট" showBack={false} />

      <main className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-64">
        {/* Cart Items */}
        <div className="space-y-3">
          {items.map(item => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>

        {/* Benefits */}
        <Benefits />

        {/* Location Selection */}
        <div className="bg-card rounded-xl p-4 shadow-soft">
          <h3 className="font-semibold text-foreground mb-3">ডেলিভারি লোকেশন</h3>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full h-11 bg-background border-border">
              <SelectValue placeholder="লোকেশন সিলেক্ট করুন" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(loc => (
                <SelectItem key={loc.id} value={loc.id}>
                  {loc.name} {loc.deliveryCharge === 0 && '(ফ্রি ডেলিভারি)'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {deliveryCharge === 0 && (
            <p className="text-sm text-success mt-2 font-medium">
              🎉 এই এলাকায় ডেলিভারি ফ্রি!
            </p>
          )}
        </div>
      </main>

      {/* Order Summary - Fixed at bottom */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border shadow-lg z-30">
        <div className="px-4 py-3 max-w-lg mx-auto">
          <div className="space-y-1.5 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">সাবটোটাল</span>
              <span className="text-foreground font-medium">৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
              <span className={deliveryCharge === 0 ? "text-success font-medium" : "text-foreground font-medium"}>
                {deliveryCharge === 0 ? 'ফ্রি' : `৳${deliveryCharge}`}
              </span>
            </div>
            <div className="flex justify-between text-base pt-1.5 border-t border-border">
              <span className="font-semibold text-foreground">মোট</span>
              <span className="font-bold text-primary text-lg">৳{total}</span>
            </div>
          </div>
          <Button
            onClick={handleCheckout}
            className="w-full h-11 text-base font-semibold gradient-primary text-primary-foreground hover:opacity-90"
          >
            অর্ডার করুন
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Cart;
