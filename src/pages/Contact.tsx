import React, { useState } from 'react';
import { Phone, MessageCircle, Facebook, Info, Download } from 'lucide-react';
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
    href: "tel:+8809638845910",
    bgColor: "bg-emerald-500 hover:bg-emerald-600",
    description: "সরাসরি কথা বলুন"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/8801712525910",
    bgColor: "bg-[#25D366] hover:bg-[#1da851]",
    description: "মেসেজ পাঠান"
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/binimoy.organic",
    bgColor: "bg-[#1877F2] hover:bg-[#0d65d9]",
    description: "পেজে যান"
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

      {/* Floating Contact Buttons - Right Side */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full ${method.bgColor} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200`}
            title={method.label}
          >
            <method.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
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

        {/* Contact Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${method.bgColor} text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-md transition-all duration-200 hover:scale-105`}
            >
              <method.icon className="w-6 h-6" />
              <span className="text-sm font-medium">{method.label}</span>
            </a>
          ))}
        </div>

        {/* Owner Info */}
        <div className="bg-card rounded-2xl p-5 shadow-soft">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://i.postimg.cc/BbSznDTY/Father.jpg" 
              alt="মোঃ রকিবুল হাসান রকেট"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h3 className="font-bold text-foreground">মোঃ রকিবুল হাসান রকেট</h3>
              <p className="text-sm text-muted-foreground">বিশ্বহরিগাছা বাজার, ধুনট, বগুড়া</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">উপলব্ধ সেবাসমূহ:</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>নির্মাণ সামগ্রী সরবরাহ</li>
              <li>মোবাইল ব্যাংকিং লেনদেন</li>
              <li>কাস্টম অর্ডার ব্যবস্থা</li>
              <li>লোকাল ডেলিভারি সাপোর্ট</li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58035.80284697454!2d89.52838195!3d24.615491799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb0cad685dbed%3A0xe530b05c6ed01fa8!2sChaukibari!5e0!3m2!1sen!2sbd!4v1764692205785!5m2!1sen!2sbd"
            width="100%"
            height="300"
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
            className={`gap-2 ${isInstalled ? 'bg-emerald-500 text-white' : 'gradient-primary text-primary-foreground'}`}
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
