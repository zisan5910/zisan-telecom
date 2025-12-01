import React from 'react';
import { Phone, MessageCircle, Facebook, Mail, ExternalLink, Leaf, Info } from 'lucide-react';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

const contactMethods = [
  {
    icon: Phone,
    label: "কল করুন",
    value: "+880 1700-000000",
    href: "tel:+8801700000000",
    color: "bg-success/10 text-success"
  },
  {
    icon: MessageCircle,
    label: "হোয়াটসঅ্যাপ",
    value: "+880 1700-000000",
    href: "https://wa.me/8801700000000",
    color: "bg-success/10 text-success"
  },
  {
    icon: Facebook,
    label: "ফেইসবুক",
    value: "অর্গানিক শপ BD",
    href: "https://facebook.com/organicshopbd",
    color: "bg-info/10 text-info"
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: "info@organicshop.com",
    href: "mailto:info@organicshop.com",
    color: "bg-accent/10 text-accent"
  }
];

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="যোগাযোগ" showBack={false} icon={Info} />

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* App Info */}
          <div className="bg-card rounded-2xl p-5 text-center shadow-soft">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">অর্গানিক শপ</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              আমরা সরাসরি কৃষকদের কাছ থেকে ১০০% অর্গানিক ও প্রাকৃতিক পণ্য সংগ্রহ করে 
              আপনার দোরগোড়ায় পৌঁছে দিই। আমাদের লক্ষ্য হলো স্বাস্থ্যকর জীবনযাপনে সহায়তা করা।
            </p>
          </div>

          {/* Contact Methods */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-3">যোগাযোগের মাধ্যম</h3>
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground">{method.value}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Address */}
          <div className="bg-card rounded-xl p-4 shadow-soft">
            <h3 className="font-semibold text-foreground mb-2">অফিস ঠিকানা</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              হাউজ # ১২, রোড # ৫, ব্লক # বি<br />
              মিরপুর-১০, ঢাকা-১২১৬<br />
              বাংলাদেশ
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-card rounded-xl p-4 shadow-soft">
            <h3 className="font-semibold text-foreground mb-2">অফিস সময়</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">শনি - বৃহস্পতি</span>
                <span className="text-foreground font-medium">সকাল ৯টা - রাত ৯টা</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">শুক্রবার</span>
                <span className="text-foreground font-medium">বিকাল ৩টা - রাত ৯টা</span>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <a
          href="https://organicshop.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-primary hover:underline"
        >
          <span>প্রাইভেসি পলিসি</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </main>

      <BottomNav />
    </div>
  );
};

export default Contact;
