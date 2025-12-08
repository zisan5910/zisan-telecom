import React, { useState } from 'react';
import { Phone, MessageCircle, Facebook, Mail, Info, Download } from 'lucide-react';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import ShareButton from '@/components/ShareButton';
import { Button } from '@/components/ui/button';
import { usePWAInstall } from '@/context/PWAInstallContext';
import { Skeleton } from '@/components/ui/skeleton';

const contactMethods = [
  {
    icon: Phone,
    label: "কল করুন",
    value: "09638845910",
    href: "tel:+8809638845910",
    color: "bg-success/10 text-success"
  },
  {
    icon: MessageCircle,
    label: "হোয়াটসঅ্যাপ",
    value: "09638845910",
    href: "https://wa.me/8801712525910",
    color: "bg-success/10 text-success"
  },
  {
    icon: Facebook,
    label: "ফেইসবুক",
    value: "স্বপ্ন বিনিময়",
    href: "https://facebook.com/binimoy.organic",
    color: "bg-info/10 text-info"
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: "contact.binimoy@gmail.com",
    href: "mailto:contact.binimoy@gmail.com",
    color: "bg-accent/10 text-accent"
  }
];

const Contact: React.FC = () => {
  const { isInstalled, triggerInstall } = usePWAInstall();
  const [logoLoaded, setLogoLoaded] = useState(false);

  const handleInstall = async () => {
    await triggerInstall();
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="যোগাযোগ" showBack={true} icon={Info} />

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* App Info */}
          <div className="bg-card rounded-2xl p-5 text-center shadow-soft">
            <div className="relative w-20 h-20 mx-auto mb-2">
              {!logoLoaded && (
                <Skeleton className="absolute inset-0 rounded-full" />
              )}
              <img 
                src="/logo.png" 
                alt="বিনিময়" 
                className={`w-20 h-20 object-contain transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLogoLoaded(true)}
              />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">বিনিময়</h2>
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
                  className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center shadow-md`}>
                    <method.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-semibold text-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Google Map */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58035.80284697454!2d89.52838195!3d24.615491799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb0cad685dbed%3A0xe530b05c6ed01fa8!2sChaukibari!5e0!3m2!1sen!2sbd!4v1764692205785!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ধুনট উপজেলা"
          />
        </div>


        {/* Install and Share */}
        <div className="flex gap-3 justify-center">
          <Button 
            onClick={isInstalled ? undefined : handleInstall} 
            className={`gap-2 ${isInstalled ? 'bg-success text-success-foreground' : 'gradient-primary text-primary-foreground'}`}
            disabled={isInstalled}
          >
            <Download className="w-4 h-4" />
            {isInstalled ? 'ইনস্টল সফল' : 'ইনস্টল করুন'}
          </Button>
          <ShareButton />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Contact;
