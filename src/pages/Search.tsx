import React, { useState, useMemo } from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [sortBy, setSortBy] = useState('name');

  const maxPrice = Math.max(...products.map(p => p.price));

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation 
        title="Search Products" 
        showBack={true} 
        showSearch={false}
      />
      
      <main className="pb-20 md:pb-8">
        {/* Search Input */}
        <section className="container mx-auto px-4 py-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 py-4 space-y-4 bg-secondary/30 mx-4 rounded-lg mb-6">
          <h3 className="font-inter font-semibold text-lg">Filters</h3>
          
          {/* Category Filter */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <Label>Price Range: ৳{priceRange[0].toLocaleString()} - ৳{priceRange[1].toLocaleString()}</Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={maxPrice}
              min={0}
              step={1000}
              className="w-full"
            />
          </div>

          {/* Sort By */}
          <div className="space-y-2">
            <Label>Sort By</Label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-inter font-semibold text-lg">
              {filteredProducts.length} Products Found
            </h2>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange([0, maxPrice]);
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Search;