import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Shield, Truck, Award, Headphones, Plus, Handshake, PackagePlus } from 'lucide-react';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: TrendingUp,
    title: "ব্যবসা বাড়ান",
    description: "হাজার হাজার ক্রেতার কাছে আপনার পণ্য পৌঁছে দিন"
  },
  {
    icon: Users,
    title: "বিশাল গ্রাহক বেস",
    description: "আমাদের প্ল্যাটফর্মে লক্ষাধিক সক্রিয় ক্রেতা রয়েছে"
  },
  {
    icon: Shield,
    title: "নিরাপদ পেমেন্ট",
    description: "সময়মতো এবং নিরাপদ পেমেন্ট গ্যারান্টি"
  },
  {
    icon: Truck,
    title: "ডেলিভারি সাপোর্ট",
    description: "সারাদেশে দ্রুত ডেলিভারি নেটওয়ার্ক"
  },
  {
    icon: Award,
    title: "কোনো লুকানো চার্জ নেই",
    description: "স্বচ্ছ মূল্য এবং কমিশন স্ট্রাকচার"
  },
  {
    icon: Headphones,
    title: "২৪/৭ সাপোর্ট",
    description: "যেকোনো সমস্যায় আমরা আপনার পাশে"
  }
];

const Seller: React.FC = () => {
  const navigate = useNavigate();

  const handleFloatingButtonClick = () => {
    navigate('/add-product');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav title="বিক্রেতা" showBack={false} icon={Handshake} />

      <main className="px-4 py-4 max-w-7xl mx-auto space-y-5">
        {/* Hero Section */}
        <div className="gradient-hero rounded-2xl p-5 text-primary-foreground text-center">
          <h2 className="text-xl font-bold mb-2">আজই বিক্রেতা হন!</h2>
          <p className="text-sm opacity-90">
            অর্গানিক শপে আপনার পণ্য বিক্রি করুন এবং আয় বাড়ান
          </p>
        </div>

        {/* Add Product Info */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <PackagePlus className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">নতুন পণ্য যুক্ত করুন</h4>
              <p className="text-sm text-muted-foreground">
                ডান দিকের নিচের <span className="text-accent font-medium">প্লাস (+)</span> বাটনে ক্লিক করে আপনার নতুন পণ্য যুক্ত করুন।
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section>
          <h3 className="text-base font-semibold text-foreground mb-3">
            বিক্রেতা হওয়ার সুবিধা
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {benefit.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Google Form */}
        <section>
          <h3 className="text-base font-semibold text-foreground mb-3">
            বিক্রেতা রেজিস্ট্রেশন ফরম
          </h3>
          <div className="bg-card rounded-xl overflow-hidden shadow-soft">
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
      </main>

      {/* Floating Add Button - Right side */}
      <Button
        onClick={handleFloatingButtonClick}
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-lg hover:opacity-90 z-40"
        size="icon"
      >
        <Plus className="w-6 h-6" />
      </Button>

      <BottomNav />
    </div>
  );
};

export default Seller;
