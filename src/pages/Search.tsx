import React, { useState, useMemo } from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Checkbox } from '@/components/ui/checkbox';
import { useIsMobile } from '@/hooks/use-mobile';
import { Filter, X, SlidersHorizontal, Search as SearchIcon, Grid2x2 as Grid, List } from 'lucide-react';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useIsMobile();

  const maxPrice = Math.max(...products.map(p => p.price));
  const minPrice = Math.min(...products.map(p => p.price));

  // Get unique price ranges for quick filters
  const priceRanges = [
    { label: 'Under ৳5,000', min: 0, max: 5000 },
    { label: '৳5,000 - ৳15,000', min: 5000, max: 15000 },
    { label: '৳15,000 - ৳50,000', min: 15000, max: 50000 },
    { label: 'Above ৳50,000', min: 50000, max: maxPrice },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0 && !selectedCategories.includes('All')) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
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
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  const handleCategoryToggle = (category: string) => {
    if (category === 'All') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    }
  };

  const handlePriceRangeSelect = (range: { min: number; max: number }) => {
    setPriceRange([range.min, range.max]);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    setSortBy('name');
  };

  const hasActiveFilters = searchQuery || selectedCategories.length > 0 || 
    priceRange[0] !== minPrice || priceRange[1] !== maxPrice || sortBy !== 'name';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Categories</Label>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={category === 'All' ? selectedCategories.length === 0 : selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <Label 
                htmlFor={`category-${category}`} 
                className="text-sm font-normal cursor-pointer flex-1"
              >
                {category}
                <span className="text-muted-foreground ml-1">
                  ({category === 'All' ? products.length : products.filter(p => p.category === category).length})
                </span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Price Filters */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Quick Price Filters</Label>
        <div className="grid grid-cols-1 gap-2">
          {priceRanges.map((range, index) => (
            <Button
              key={index}
              variant={priceRange[0] === range.min && priceRange[1] === range.max ? "default" : "outline"}
              size="sm"
              onClick={() => handlePriceRangeSelect(range)}
              className="justify-start text-left"
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Custom Price Range */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">
          Custom Price Range: ৳{priceRange[0].toLocaleString()} - ৳{priceRange[1].toLocaleString()}
        </Label>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={maxPrice}
            min={minPrice}
            step={1000}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>৳{minPrice.toLocaleString()}</span>
          <span>৳{maxPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Sort Options */}
      <div className="space-y-3">
        <Label className="text-base font-semibold">Sort By</Label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background border border-border">
            <SelectItem value="name">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button 
          variant="outline" 
          onClick={clearAllFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

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
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>
        </section>

        {/* Filter Controls */}
        <section className="container mx-auto px-4 pb-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Filter Button */}
            {isMobile ? (
              <Drawer open={showFilters} onOpenChange={setShowFilters}>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                        {selectedCategories.length + (hasActiveFilters ? 1 : 0)}
                      </Badge>
                    )}
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-background">
                  <DrawerHeader>
                    <DrawerTitle>Filter Products</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 pb-8 max-h-[70vh] overflow-y-auto">
                    <FilterContent />
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                        {selectedCategories.length + (hasActiveFilters ? 1 : 0)}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-background w-80">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            )}

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="p-2"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="p-2"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{searchQuery}"
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              {selectedCategories.map(category => (
                <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => handleCategoryToggle(category)}
                  />
                </Badge>
              ))}
              {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  ৳{priceRange[0].toLocaleString()} - ৳{priceRange[1].toLocaleString()}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => setPriceRange([minPrice, maxPrice])}
                  />
                </Badge>
              )}
              {sortBy !== 'name' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Sort: {sortBy === 'price-low' ? 'Price Low-High' : 
                         sortBy === 'price-high' ? 'Price High-Low' : 
                         sortBy === 'name-desc' ? 'Name Z-A' : 'Name A-Z'}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => setSortBy('name')}
                  />
                </Badge>
              )}
            </div>
          )}
        </section>

        {/* Results Header */}
        <section className="container mx-auto px-4 pb-4">
          <div className="flex justify-between items-center">
            <h2 className="font-inter font-semibold text-lg">
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
            </h2>
            
            {/* Quick Sort (Mobile) */}
            {isMobile && (
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border">
                  <SelectItem value="name">A-Z</SelectItem>
                  <SelectItem value="name-desc">Z-A</SelectItem>
                  <SelectItem value="price-low">Price ↑</SelectItem>
                  <SelectItem value="price-high">Price ↓</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </section>

        {/* Products Grid/List */}
        <section className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                : "space-y-4"
            }>
              {filteredProducts.map((product) => (
                <div key={product.id} className={viewMode === 'list' ? 'w-full' : ''}>
                  <ProductCard 
                    product={product} 
                    variant={viewMode === 'list' ? 'wishlist' : 'default'}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent className="pt-6">
                <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl mb-2">No Products Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Suggestions:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check your spelling</li>
                    <li>• Try different keywords</li>
                    <li>• Remove some filters</li>
                    <li>• Browse all categories</li>
                  </ul>
                </div>
                {hasActiveFilters && (
                  <Button 
                    variant="outline" 
                    onClick={clearAllFilters}
                    className="mt-4"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Search;