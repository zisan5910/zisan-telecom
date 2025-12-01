import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, ClipboardList } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { locations, formatPrice, toBengaliNumber } from '@/data/products';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Order: React.FC = () => {
  const { items, getTotalPrice } = useCart();
  const [copied, setCopied] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('dhunat');

  const location = locations.find(l => l.id === selectedLocation);
  const deliveryCharge = location?.deliveryCharge || 0;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryCharge;

  // Copy only product name, ID and quantity
  const copyOrderInfo = () => {
    const orderText = items.map(item => 
      `${item.name} (ID: ${item.id}) - ${toBengaliNumber(item.quantity)} পিস`
    ).join('\n');
    
    navigator.clipboard.writeText(orderText);
    setCopied(true);
    toast.success('অর্ডার তথ্য কপি হয়েছে!');
    setTimeout(() => setCopied(false), 2000);
  };

  const phoneNumber = '+8801711727436';

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="অর্ডার করুন" icon={ClipboardList} />

      <main className="px-4 py-4 max-w-lg mx-auto space-y-4">
        {/* Order Summary at Top */}
        {items.length > 0 && (
          <div className="bg-card rounded-2xl p-4 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">অর্ডার সামারি</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyOrderInfo}
                className="h-8 text-xs rounded-xl"
              >
                {copied ? (
                  <Check className="w-4 h-4 mr-1 text-success" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copied ? 'কপি হয়েছে' : 'কপি করুন'}
              </Button>
            </div>
            
            {/* Products List */}
            <div className="space-y-2 mb-4 pb-3 border-b border-border">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} × {toBengaliNumber(item.quantity)}
                  </span>
                  <span className="text-foreground font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            {/* Location Selection */}
            <div className="mb-4">
              <label className="text-sm text-muted-foreground mb-2 block">ডেলিভারি এলাকা</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full h-10 bg-background border-border rounded-xl">
                  <SelectValue placeholder="এলাকা সিলেক্ট করুন" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(loc => (
                    <SelectItem key={loc.id} value={loc.id}>
                      {loc.name} {loc.deliveryCharge === 0 ? '(ফ্রি)' : `(${formatPrice(loc.deliveryCharge)})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">সাবটোটাল</span>
                <span className="text-foreground font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
                <span className={deliveryCharge === 0 ? "text-success font-medium" : "text-foreground font-medium"}>
                  {deliveryCharge === 0 ? 'ফ্রি' : formatPrice(deliveryCharge)}
                </span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-border">
                <span className="font-semibold text-foreground">মোট</span>
                <span className="font-bold text-primary text-lg">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Contact Methods */}
        <section>
          <h3 className="text-base font-semibold text-foreground mb-3">
            অর্ডার করতে যোগাযোগ করুন
          </h3>
          <div className="space-y-3">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-soft border-2 border-success/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="font-medium text-foreground">সরাসরি কল করুন</p>
                <p className="text-sm text-muted-foreground">+880 1711-727436</p>
              </div>
            </a>
            
            <a
              href={`https://wa.me/8801711727436`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-soft border-2 border-success/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="font-medium text-foreground">হোয়াটসঅ্যাপে মেসেজ</p>
                <p className="text-sm text-muted-foreground">দ্রুত রিপ্লাই পেতে</p>
              </div>
            </a>
          </div>
        </section>

        {/* Info Note */}
        <div className="bg-secondary/50 rounded-2xl p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💡 "কপি করুন" বাটনে ক্লিক করে অর্ডার তথ্য কপি করুন এবং হোয়াটসঅ্যাপে পেস্ট করুন।
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Order;
