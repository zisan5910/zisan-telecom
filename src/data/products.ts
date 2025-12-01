export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  seller: string;
  stock: number;
  description: string;
  unit: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

// Helper function to convert number to Bengali
export const toBengaliNumber = (num: number): string => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(digit => {
    if (digit === '.') return '.';
    if (digit === ',') return ',';
    return bengaliDigits[parseInt(digit)] || digit;
  }).join('');
};

export const formatPrice = (price: number): string => {
  return `৳${toBengaliNumber(price)}`;
};

export const categories: Category[] = [
  { id: "gas-cylinder", name: "গ্যাস সিলিন্ডার", icon: "Flame", count: 10 },
  { id: "cement", name: "সিমেন্ট", icon: "Package", count: 15 },
  { id: "mobile", name: "মোবাইল", icon: "Smartphone", count: 20 },
  { id: "electronics", name: "ইলেকট্রনিক্স", icon: "Tv", count: 25 },
  { id: "sanitary", name: "সেনেটারি", icon: "Bath", count: 18 },
  { id: "pipe", name: "পাইপ", icon: "Cylinder", count: 12 },
  { id: "bearing", name: "বিয়ারিং", icon: "Settings", count: 8 },
  { id: "paint", name: "রং", icon: "Palette", count: 14 },
  { id: "electrical", name: "বিদ্যুৎ", icon: "Zap", count: 22 },
  { id: "fan", name: "ফ্যান", icon: "Fan", count: 16 },
  { id: "light", name: "লাইট", icon: "Lightbulb", count: 19 },
  { id: "wire", name: "তার", icon: "Cable", count: 11 },
  { id: "hardware", name: "হার্ডওয়্যার", icon: "Wrench", count: 30 },
  { id: "tools", name: "টুলস", icon: "Hammer", count: 24 },
];

export const products: Product[] = [
  {
    id: "PRD001",
    name: "ওমেরা গ্যাস সিলিন্ডার ১২ কেজি",
    price: 2800,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1585164897054-f1c80e5c6c7b?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "gas-cylinder",
    seller: "জিসান ট্রেডার্স",
    stock: 45,
    description: "১০০% অরিজিনাল ওমেরা গ্যাস সিলিন্ডার। নিরাপদ ও টেকসই।",
    unit: "১২ কেজি"
  },
  {
    id: "PRD002",
    name: "সেভেন রিংস সিমেন্ট",
    price: 520,
    originalPrice: 580,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 189,
    category: "cement",
    seller: "জিসান ট্রেডার্স",
    stock: 120,
    description: "সেরা মানের সেভেন রিংস সিমেন্ট। নির্মাণ কাজের জন্য আদর্শ।",
    unit: "৫০ কেজি"
  },
  {
    id: "PRD003",
    name: "Samsung Galaxy A54",
    price: 42000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "mobile",
    seller: "জিসান ট্রেডার্স",
    stock: 25,
    description: "স্যামসাং গ্যালাক্সি A54 - 8GB RAM, 128GB Storage",
    unit: "১ পিস"
  },
  {
    id: "PRD004",
    name: "LED টিভি ৩২ ইঞ্চি",
    price: 18500,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 98,
    category: "electronics",
    seller: "জিসান ট্রেডার্স",
    stock: 30,
    description: "HD Ready LED টিভি। ওয়ারেন্টি সহ।",
    unit: "১ পিস"
  },
  {
    id: "PRD005",
    name: "কমোড সেট",
    price: 8500,
    originalPrice: 10000,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 312,
    category: "sanitary",
    seller: "জিসান ট্রেডার্স",
    stock: 15,
    description: "প্রিমিয়াম কোয়ালিটি কমোড সেট। সম্পূর্ণ ফিটিংস সহ।",
    unit: "১ সেট"
  },
  {
    id: "PRD006",
    name: "PVC পাইপ ১ ইঞ্চি",
    price: 250,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 145,
    category: "pipe",
    seller: "জিসান ট্রেডার্স",
    stock: 200,
    description: "উচ্চ মানের PVC পাইপ। ১০ ফুট দৈর্ঘ্য।",
    unit: "১০ ফুট"
  },
  {
    id: "PRD007",
    name: "বল বিয়ারিং 6205",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 178,
    category: "bearing",
    seller: "জিসান ট্রেডার্স",
    stock: 100,
    description: "জাপানি কোয়ালিটি বল বিয়ারিং।",
    unit: "১ পিস"
  },
  {
    id: "PRD008",
    name: "এশিয়ান পেইন্ট ২০ লিটার",
    price: 3800,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 267,
    category: "paint",
    seller: "জিসান ট্রেডার্স",
    stock: 40,
    description: "এশিয়ান পেইন্ট প্রিমিয়াম ইমালশন।",
    unit: "২০ লিটার"
  },
  {
    id: "PRD009",
    name: "MCB ব্রেকার ৩২A",
    price: 450,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 134,
    category: "electrical",
    seller: "জিসান ট্রেডার্স",
    stock: 80,
    description: "হাভেলস MCB ব্রেকার। নিরাপদ ও টেকসই।",
    unit: "১ পিস"
  },
  {
    id: "PRD010",
    name: "সিলিং ফ্যান ৫৬ ইঞ্চি",
    price: 2200,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 87,
    category: "fan",
    seller: "জিসান ট্রেডার্স",
    stock: 50,
    description: "হাই স্পিড সিলিং ফ্যান। ৩ বছরের ওয়ারেন্টি।",
    unit: "১ পিস"
  },
  {
    id: "PRD011",
    name: "LED বাল্ব ১৮W",
    price: 180,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 289,
    category: "light",
    seller: "জিসান ট্রেডার্স",
    stock: 300,
    description: "এনার্জি সেভিং LED বাল্ব। ব্রাইট লাইট।",
    unit: "১ পিস"
  },
  {
    id: "PRD012",
    name: "BRB তার ২.৫mm",
    price: 95,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 112,
    category: "wire",
    seller: "জিসান ট্রেডার্স",
    stock: 500,
    description: "BRB ইলেকট্রিক তার। প্রতি মিটার।",
    unit: "১ মিটার"
  },
  {
    id: "PRD013",
    name: "দরজার লক সেট",
    price: 850,
    originalPrice: 1100,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 198,
    category: "hardware",
    seller: "জিসান ট্রেডার্স",
    stock: 60,
    description: "স্টেইনলেস স্টিল দরজার লক সেট।",
    unit: "১ সেট"
  },
  {
    id: "PRD014",
    name: "হাতুড়ি",
    price: 280,
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 145,
    category: "tools",
    seller: "জিসান ট্রেডার্স",
    stock: 70,
    description: "স্টিল হেড হাতুড়ি। মজবুত হাতল।",
    unit: "১ পিস"
  },
  {
    id: "PRD015",
    name: "টাইলস আঠা",
    price: 650,
    originalPrice: 800,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 167,
    category: "hardware",
    seller: "জিসান ট্রেডার্স",
    stock: 90,
    description: "প্রিমিয়াম টাইলস আঠা। ২০ কেজি ব্যাগ।",
    unit: "২০ কেজি"
  },
  {
    id: "PRD016",
    name: "Xiaomi Redmi Note 13",
    price: 28000,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "mobile",
    seller: "জিসান ট্রেডার্স",
    stock: 20,
    description: "Xiaomi Redmi Note 13 - 6GB RAM, 128GB Storage",
    unit: "১ পিস"
  },
  {
    id: "PRD017",
    name: "ওয়াশ বেসিন",
    price: 2500,
    originalPrice: 3000,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 76,
    category: "sanitary",
    seller: "জিসান ট্রেডার্স",
    stock: 25,
    description: "সিরামিক ওয়াশ বেসিন। মডার্ন ডিজাইন।",
    unit: "১ পিস"
  },
  {
    id: "PRD018",
    name: "স্ট্যান্ড ফ্যান",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 234,
    category: "fan",
    seller: "জিসান ট্রেডার্স",
    stock: 35,
    description: "অসিলেটিং স্ট্যান্ড ফ্যান। ৩ স্পিড।",
    unit: "১ পিস"
  },
  {
    id: "PRD019",
    name: "টিউব লাইট ৪০W",
    price: 350,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 112,
    category: "light",
    seller: "জিসান ট্রেডার্স",
    stock: 150,
    description: "LED টিউব লাইট। ইন্সট্যান্ট অন।",
    unit: "১ পিস"
  },
  {
    id: "PRD020",
    name: "সুইচ বোর্ড",
    price: 420,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 98,
    category: "electrical",
    seller: "জিসান ট্রেডার্স",
    stock: 100,
    description: "৮ সুইচ মডুলার বোর্ড।",
    unit: "১ পিস"
  },
];

export const locations = [
  { id: "dhunat", name: "ধুনট উপজেলা", deliveryCharge: 0 },
  { id: "bogra", name: "বগুড়া সদর", deliveryCharge: 50 },
  { id: "sherpur", name: "শেরপুর", deliveryCharge: 40 },
  { id: "gabtoli", name: "গাবতলী", deliveryCharge: 60 },
  { id: "outside", name: "অন্যান্য এলাকা", deliveryCharge: 100 },
];
