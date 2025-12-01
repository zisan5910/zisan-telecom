import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TopNavProps {
  title: string;
  showBack?: boolean;
  showCart?: boolean;
  icon?: LucideIcon;
}

const TopNav: React.FC<TopNavProps> = ({ title, showBack = true, icon: Icon }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          {Icon && (
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          )}
          <h1 className="text-lg font-semibold text-foreground truncate">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
