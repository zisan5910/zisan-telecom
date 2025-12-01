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

export const categories: Category[] = [
  { id: "vegetables", name: "শাক-সবজি", icon: "Carrot", count: 24 },
  { id: "fruits", name: "ফলমূল", icon: "Apple", count: 18 },
  { id: "honey", name: "মধু", icon: "Droplets", count: 12 },
  { id: "rice", name: "চাল", icon: "Wheat", count: 8 },
  { id: "oil", name: "তেল", icon: "Droplet", count: 10 },
  { id: "spices", name: "মসলা", icon: "Flame", count: 15 },
  { id: "dairy", name: "দুগ্ধজাত", icon: "Milk", count: 9 },
  { id: "pulses", name: "ডাল", icon: "Bean", count: 11 },
  { id: "pickles", name: "আচার", icon: "Citrus", count: 14 },
  { id: "caps", name: "টুপি", icon: "Crown", count: 8 },
  { id: "handicrafts", name: "হস্তশিল্প", icon: "Palette", count: 16 },
  { id: "sweets", name: "মিষ্টি", icon: "Cookie", count: 12 },
  { id: "fish", name: "শুঁটকি", icon: "Fish", count: 10 },
  { id: "clothing", name: "পোশাক", icon: "Shirt", count: 20 },
];

export const products: Product[] = [
  {
    id: "PRD001",
    name: "অর্গানিক সুন্দরবনের মধু",
    price: 850,
    originalPrice: 1000,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "honey",
    seller: "সুন্দরবন অর্গানিক",
    stock: 45,
    description: "১০০% খাঁটি সুন্দরবনের মধু। কোনো মিশ্রণ নেই। প্রাকৃতিক উপায়ে সংগ্রহ করা।",
    unit: "৫০০ গ্রাম"
  },
  {
    id: "PRD002",
    name: "দেশি লাল চাল",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 189,
    category: "rice",
    seller: "গ্রাম বাংলা",
    stock: 120,
    description: "প্রাকৃতিক উপায়ে চাষ করা দেশি লাল চাল। স্বাস্থ্যকর ও পুষ্টিকর।",
    unit: "১ কেজি"
  },
  {
    id: "PRD003",
    name: "অর্গানিক সরিষার তেল",
    price: 320,
    originalPrice: 380,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "oil",
    seller: "পল্লী অর্গানিক",
    stock: 78,
    description: "ঘানিতে ভাঙ্গা খাঁটি সরিষার তেল। কোনো রাসায়নিক নেই।",
    unit: "১ লিটার"
  },
  {
    id: "PRD004",
    name: "তাজা টমেটো",
    price: 80,
    image: "https://images.unsplash.com/photo-1546470427-227c7369a9b5?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 98,
    category: "vegetables",
    seller: "কৃষক বন্ধু",
    stock: 200,
    description: "জৈব সার ব্যবহার করে উৎপাদিত তাজা টমেটো।",
    unit: "১ কেজি"
  },
  {
    id: "PRD005",
    name: "দেশি মুরগির ডিম",
    price: 180,
    originalPrice: 200,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 312,
    category: "dairy",
    seller: "গ্রাম বাংলা",
    stock: 150,
    description: "ফ্রি-রেঞ্জ দেশি মুরগির ডিম। প্রাকৃতিক খাবারে পালিত।",
    unit: "১২ পিস"
  },
  {
    id: "PRD006",
    name: "অর্গানিক হলুদ গুঁড়া",
    price: 150,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 145,
    category: "spices",
    seller: "মসলা ঘর",
    stock: 90,
    description: "কাঁচা হলুদ থেকে তৈরি খাঁটি হলুদ গুঁড়া। রং মেশানো নয়।",
    unit: "২৫০ গ্রাম"
  },
  {
    id: "PRD007",
    name: "মসুর ডাল",
    price: 140,
    originalPrice: 160,
    image: "https://images.unsplash.com/photo-1585996448688-0909ddd1d11b?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 178,
    category: "pulses",
    seller: "অর্গানিক হাট",
    stock: 110,
    description: "প্রিমিয়াম কোয়ালিটি মসুর ডাল। পরিষ্কার ও তাজা।",
    unit: "১ কেজি"
  },
  {
    id: "PRD008",
    name: "তাজা আম",
    price: 250,
    originalPrice: 300,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 267,
    category: "fruits",
    seller: "রাজশাহী ফার্ম",
    stock: 80,
    description: "রাজশাহীর হিমসাগর আম। কার্বাইড মুক্ত, গাছ পাকা।",
    unit: "১ কেজি"
  },
  {
    id: "PRD009",
    name: "অর্গানিক নারকেল তেল",
    price: 450,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 134,
    category: "oil",
    seller: "সুন্দরবন অর্গানিক",
    stock: 55,
    description: "কোল্ড প্রেসড ভার্জিন নারকেল তেল। চুল ও ত্বকের যত্নে।",
    unit: "৫০০ মিলি"
  },
  {
    id: "PRD010",
    name: "তাজা পালং শাক",
    price: 40,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 87,
    category: "vegetables",
    seller: "কৃষক বন্ধু",
    stock: 180,
    description: "জৈব চাষে উৎপাদিত তাজা পালং শাক। ভিটামিন সমৃদ্ধ।",
    unit: "১ আঁটি"
  },
  {
    id: "PRD011",
    name: "খাঁটি ঘি",
    price: 750,
    originalPrice: 850,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 289,
    category: "dairy",
    seller: "গ্রাম বাংলা",
    stock: 40,
    description: "গরুর দুধের সর থেকে তৈরি খাঁটি ঘি। ভেজাল মুক্ত।",
    unit: "৫০০ গ্রাম"
  },
  {
    id: "PRD012",
    name: "কালোজিরা",
    price: 280,
    image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 112,
    category: "spices",
    seller: "মসলা ঘর",
    stock: 95,
    description: "প্রিমিয়াম কোয়ালিটি কালোজিরা। সরাসরি কৃষক থেকে সংগ্রহ।",
    unit: "২৫০ গ্রাম"
  },
  {
    id: "PRD013",
    name: "আমের আচার",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 198,
    category: "pickles",
    seller: "গ্রামীণ হাট",
    stock: 65,
    description: "ঘরে তৈরি কাঁচা আমের আচার। সরিষার তেলে মাখানো।",
    unit: "৩০০ গ্রাম"
  },
  {
    id: "PRD014",
    name: "তেঁতুলের আচার",
    price: 150,
    image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 145,
    category: "pickles",
    seller: "গ্রামীণ হাট",
    stock: 80,
    description: "টক-মিষ্টি তেঁতুলের আচার। ঐতিহ্যবাহী রেসিপি।",
    unit: "২৫০ গ্রাম"
  },
  {
    id: "PRD015",
    name: "জলপাইয়ের আচার",
    price: 200,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 167,
    category: "pickles",
    seller: "পল্লী অর্গানিক",
    stock: 55,
    description: "সিলেটের জলপাই দিয়ে তৈরি ঝাল আচার।",
    unit: "৩০০ গ্রাম"
  },
  {
    id: "PRD016",
    name: "পাঞ্জাবি টুপি",
    price: 350,
    originalPrice: 450,
    image: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "caps",
    seller: "হস্তশিল্প ঘর",
    stock: 30,
    description: "সাদা রঙের পাঞ্জাবি টুপি। আরামদায়ক তুলার কাপড়।",
    unit: "১ পিস"
  },
  {
    id: "PRD017",
    name: "সুতি টুপি",
    price: 250,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 76,
    category: "caps",
    seller: "গ্রাম বাংলা",
    stock: 45,
    description: "হাতে বোনা সুতি টুপি। গ্রামীণ ঐতিহ্য।",
    unit: "১ পিস"
  },
  {
    id: "PRD018",
    name: "নকশিকাঁথা",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 234,
    category: "handicrafts",
    seller: "হস্তশিল্প ঘর",
    stock: 20,
    description: "হাতে সেলাই করা নকশিকাঁথা। বাংলার ঐতিহ্য।",
    unit: "১ পিস"
  },
  {
    id: "PRD019",
    name: "শোলার কাজ",
    price: 450,
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 112,
    category: "handicrafts",
    seller: "গ্রামীণ হাট",
    stock: 35,
    description: "শোলা দিয়ে তৈরি সুন্দর ফুল ও সাজসজ্জা।",
    unit: "১ সেট"
  },
  {
    id: "PRD020",
    name: "বাঁশের ঝুড়ি",
    price: 180,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 98,
    category: "handicrafts",
    seller: "পল্লী অর্গানিক",
    stock: 50,
    description: "হাতে তৈরি বাঁশের ঝুড়ি। পরিবেশবান্ধব।",
    unit: "১ পিস"
  },
  {
    id: "PRD021",
    name: "গুড়ের সন্দেশ",
    price: 280,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 189,
    category: "sweets",
    seller: "মিষ্টি ঘর",
    stock: 40,
    description: "খেজুরের গুড় দিয়ে তৈরি সন্দেশ। ভেজালমুক্ত।",
    unit: "৫০০ গ্রাম"
  },
  {
    id: "PRD022",
    name: "পাটালি গুড়",
    price: 120,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 156,
    category: "sweets",
    seller: "গ্রাম বাংলা",
    stock: 100,
    description: "খেজুর রসের পাটালি গুড়। শীতকালের স্পেশাল।",
    unit: "১ কেজি"
  },
  {
    id: "PRD023",
    name: "লইট্টা শুঁটকি",
    price: 450,
    originalPrice: 520,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 134,
    category: "fish",
    seller: "কক্সবাজার ফিশ",
    stock: 60,
    description: "সামুদ্রিক লইট্টা শুঁটকি। ভালোভাবে শুকানো।",
    unit: "৫০০ গ্রাম"
  },
  {
    id: "PRD024",
    name: "চিংড়ি শুঁটকি",
    price: 650,
    originalPrice: 750,
    image: "https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 178,
    category: "fish",
    seller: "কক্সবাজার ফিশ",
    stock: 45,
    description: "তাজা চিংড়ি থেকে তৈরি শুঁটকি। সুস্বাদু।",
    unit: "৫০০ গ্রাম"
  },
  {
    id: "PRD025",
    name: "জামদানি শাড়ি",
    price: 3500,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 256,
    category: "clothing",
    seller: "ঢাকাই জামদানি",
    stock: 15,
    description: "আসল ঢাকাই জামদানি শাড়ি। হাতে বোনা।",
    unit: "১ পিস"
  },
  {
    id: "PRD026",
    name: "গামছা",
    price: 150,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 98,
    category: "clothing",
    seller: "গ্রাম বাংলা",
    stock: 80,
    description: "বাংলার ঐতিহ্যবাহী গামছা। নরম সুতি।",
    unit: "১ পিস"
  },
  {
    id: "PRD027",
    name: "কাতলা মাছ শুঁটকি",
    price: 380,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 112,
    category: "fish",
    seller: "পদ্মা ফিশ",
    stock: 55,
    description: "পদ্মার কাতলা মাছের শুঁটকি। ঐতিহ্যবাহী স্বাদ।",
    unit: "৫০০ গ্রাম"
  },
  {
    id: "PRD028",
    name: "মটকার শাড়ি",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 145,
    category: "clothing",
    seller: "গ্রামীণ হাট",
    stock: 25,
    description: "রাজশাহী সিল্কের মটকার শাড়ি।",
    unit: "১ পিস"
  },
];

export const locations = [
  { id: "dhaka", name: "ঢাকা সিটি", deliveryCharge: 60 },
  { id: "mirpur", name: "মিরপুর", deliveryCharge: 0 },
  { id: "uttara", name: "উত্তরা", deliveryCharge: 0 },
  { id: "dhanmondi", name: "ধানমন্ডি", deliveryCharge: 0 },
  { id: "gulshan", name: "গুলশান", deliveryCharge: 40 },
  { id: "outside", name: "ঢাকার বাইরে", deliveryCharge: 120 },
];
