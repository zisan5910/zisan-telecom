import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} কার্টে যুক্ত হয়েছে!`);
  };

  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    navigate('/order');
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute top-2 right-2 w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-medium text-foreground text-sm line-clamp-2 leading-tight h-10">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-3.5 h-3.5 fill-warning text-warning" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-base font-bold text-primary">৳{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ৳{product.originalPrice}
            </span>
          )}
        </div>

        <Button
          onClick={handleOrder}
          className="w-full h-9 text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-opacity mt-auto"
        >
          অর্ডার করুন
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
