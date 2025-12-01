import React from 'react';
import { Phone, MessageCircle, Facebook, FileText, Copy, Check, ClipboardList } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Order: React.FC = () => {
  const { items, getCartSummary } = useCart();
  const [copied, setCopied] = React.useState(false);

  const orderSummary = getCartSummary();

  const copyOrderInfo = () => {
    // Copy without price
    const orderText = `অর্ডার তথ্য:\n${orderSummary}`;
    navigator.clipboard.writeText(orderText);
    setCopied(true);
    toast.success('অর্ডার তথ্য কপি হয়েছে!', {
      description: 'এখন যেকোনো মাধ্যমে পেস্ট করুন'
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "সরাসরি কল করুন",
      description: "আমাদের কল করে অর্ডার করুন",
      href: "tel:+8801700000000",
      color: "bg-success/10 text-success border-success/20"
    },
    {
      icon: MessageCircle,
      label: "হোয়াটসঅ্যাপে মেসেজ",
      description: "হোয়াটসঅ্যাপে অর্ডার করুন",
      href: `https://wa.me/8801700000000?text=${encodeURIComponent(`অর্ডার তথ্য:\n${orderSummary}`)}`,
      color: "bg-success/10 text-success border-success/20"
    },
    {
      icon: Facebook,
      label: "ফেইসবুকে মেসেজ",
      description: "ফেইসবুক পেজে অর্ডার করুন",
      href: "https://m.me/organicshopbd",
      color: "bg-info/10 text-info border-info/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="অর্ডার করুন" icon={ClipboardList} />

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-5">
            {/* Order Summary */}
            {items.length > 0 && (
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">অর্ডার সামারি</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyOrderInfo}
                    className="h-8 text-xs"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 mr-1 text-success" />
                    ) : (
                      <Copy className="w-4 h-4 mr-1" />
                    )}
                    {copied ? 'কপি হয়েছে' : 'কপি করুন'}
                  </Button>
                </div>
                <div className="space-y-2 mb-3">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} (ID: {item.id}) × {item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order Methods */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-3">
                অর্ডার করতে যোগাযোগ করুন
              </h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => copyOrderInfo()}
                    className={`flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft border-2 ${method.color} hover:shadow-lg transition-all animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full ${method.color.split(' ')[0]} flex items-center justify-center`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Google Form */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold text-foreground">
                অথবা নিচের ফরম পূরণ করুন
              </h3>
            </div>
            <div className="bg-card rounded-xl overflow-hidden shadow-soft">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScExample/viewform?embedded=true"
                width="100%"
                height="700"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                লোড হচ্ছে...
              </iframe>
            </div>
          </section>
        </div>

        {/* Info Note */}
        <div className="bg-secondary/50 rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💡 যেকোনো মাধ্যমে অর্ডার করার সময় অর্ডার তথ্য স্বয়ংক্রিয়ভাবে কপি হয়ে যাবে।
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Order;
