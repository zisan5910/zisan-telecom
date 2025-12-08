import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Facebook, FileText, Copy, Check, ClipboardList } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { locations, Product } from '@/data/products';
import { useCelebration } from '@/hooks/useCelebration';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Order: React.FC = () => {
  const location = useLocation();
  const singleProduct = location.state?.singleProduct as Product | undefined;
  const { triggerFireworks, triggerCoinRain } = useCelebration();
  
  const { items, getTotalPrice, getCartSummary } = useCart();
  
  const orderItems = singleProduct 
    ? [{ ...singleProduct, quantity: 1 }] 
    : items;
  const [copied, setCopied] = React.useState(false);
  const [selectedLocation] = React.useState<string>('mirpur');

  useEffect(() => {
    if (orderItems.length > 0) {
      const timer = setTimeout(() => {
        triggerCoinRain();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const deliveryLocation = locations.find(l => l.id === selectedLocation);
  const deliveryCharge = deliveryLocation?.deliveryCharge || 0;
  
  const subtotal = singleProduct 
    ? singleProduct.price 
    : getTotalPrice();
  const total = subtotal + deliveryCharge;

  const orderSummary = singleProduct
    ? `${singleProduct.name} (ID: ${singleProduct.id})\nপরিমাণ: × 1`
    : getCartSummary();

  const copyOrderInfo = () => {
    const orderText = `অর্ডার তথ্য:\n${orderSummary}`;
    navigator.clipboard.writeText(orderText);
    setCopied(true);
    triggerFireworks();
    toast.success('অর্ডার তথ্য কপি হয়েছে!', {
      description: 'এখন যেকোনো মাধ্যমে পেস্ট করুন'
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "কল",
      href: "tel:+8809638845910",
      color: "bg-success text-white"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/8801712525910?text=${encodeURIComponent(`অর্ডার তথ্য:\n${orderSummary}`)}`,
      color: "bg-[#25D366] text-white"
    },
    {
      icon: Facebook,
      label: "Messenger",
      href: "https://m.me/binimoy.organic",
      color: "bg-[#1877F2] text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="অর্ডার করুন" showBack={true} icon={ClipboardList} />

      {/* Floating Contact Buttons - Right Side */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => copyOrderInfo()}
            className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200`}
            title={method.label}
          >
            <method.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
        {/* Order Summary */}
        {orderItems.length > 0 && (
          <div className="bg-card rounded-2xl p-5 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground text-lg">অর্ডার সামারি</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyOrderInfo}
                className="h-9 text-xs rounded-xl"
              >
                {copied ? (
                  <Check className="w-4 h-4 mr-1 text-success" />
                ) : (
                  <Copy className="w-4 h-4 mr-1" />
                )}
                {copied ? 'কপি হয়েছে' : 'কপি করুন'}
              </Button>
            </div>
            <div className="space-y-3 mb-4">
              {orderItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm pb-2 border-b border-border last:border-0">
                  <span className="text-muted-foreground">
                    {item.name} (ID: {item.id})
                  </span>
                  <span className="text-foreground font-medium">× {item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-3 border-t border-border">
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
              <div className="flex justify-between text-base pt-2 border-t border-border">
                <span className="font-semibold text-foreground">মোট</span>
                <span className="font-bold text-primary text-lg">৳{total}</span>
              </div>
            </div>
          </div>
        )}

        {/* Google Form */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="text-base font-semibold text-foreground">
              অর্ডার ফরম পূরণ করুন
            </h3>
          </div>
          <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScExample/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              লোড হচ্ছে...
            </iframe>
          </div>
        </section>

        {/* Info Note */}
        <div className="bg-secondary/50 rounded-2xl p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💡 ডানদিকের বাটনে ক্লিক করে সরাসরি অর্ডার করুন
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Order;
