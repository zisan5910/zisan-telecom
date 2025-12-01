import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Wrench, Info } from 'lucide-react';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

const services = [
  "নির্মাণ সামগ্রী সরবরাহ",
  "মোবাইল ব্যাংকিং লেনদেন",
  "কাস্টম অর্ডার ব্যবস্থা",
  "লোকাল ডেলিভারি সাপোর্ট"
];

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="যোগাযোগ" showBack={true} icon={Info} />

      <main className="px-4 py-4 max-w-lg mx-auto space-y-4">
        {/* Owner Info */}
        <div className="bg-card rounded-2xl p-5 text-center shadow-soft">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
            <img
              src="https://i.postimg.cc/BbSznDTY/Father.jpg"
              alt="মোঃ রকিবুল হাসান রকেট"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">মোঃ রকিবুল হাসান রকেট</h2>
          <p className="text-sm text-muted-foreground">স্বত্বাধিকারী, বিনিময়</p>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+8801711727436"
            className="flex flex-col items-center gap-2 bg-success/10 rounded-2xl p-4 border-2 border-success/20 hover:shadow-lg transition-all"
          >
            <Phone className="w-8 h-8 text-success" />
            <span className="font-medium text-foreground">কল করুন</span>
          </a>
          <a
            href="https://wa.me/8801711727436"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-success/10 rounded-2xl p-4 border-2 border-success/20 hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-8 h-8 text-success" />
            <span className="font-medium text-foreground">WhatsApp</span>
          </a>
        </div>

        {/* Address */}
        <div className="bg-card rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">ঠিকানা</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-8">
            বিশ্বহরিগাছা বাজার, ধুনট, বগুড়া
          </p>
        </div>

        {/* Services */}
        <div className="bg-card rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-3 mb-3">
            <Wrench className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">উপলব্ধ সেবাসমূহ</h3>
          </div>
          <ul className="space-y-2 pl-8">
            {services.map((service, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours */}
        <div className="bg-card rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">ব্যবসার সময়</h3>
          </div>
          <div className="space-y-1 text-sm pl-8">
            <div className="flex justify-between">
              <span className="text-muted-foreground">শনি - বৃহস্পতি</span>
              <span className="text-foreground font-medium">সকাল ৮টা - রাত ১০টা</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">শুক্রবার</span>
              <span className="text-foreground font-medium">বিকাল ৩টা - রাত ১০টা</span>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">আমাদের অবস্থান</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57678.27374!2d89.4833!3d24.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc4e2d05dca4d3%3A0xd1a9e1f6e71f0c0!2sDhunat%20Upazila!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Dhunat Upazila"
          />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Contact;
