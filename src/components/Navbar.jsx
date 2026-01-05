import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font fixed top-0 left-0 right-0 z-50 bg-[#0D0C0B]/80 backdrop-blur-lg border-b border-[#322D2A]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
      
          <a to="/" className="font text-2xl font-semibold font1 tracking-wide text-white">
            LUXIFY
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a to="/new-arrivals" className="font-body text-sm tracking-wider text-muted-colors hover:text-foreground transition-colors">
              NEW ARRIVALS
            </a>
            <a to="/collections" className="font-body text-sm tracking-wider text-muted-colors hover:text-foreground transition-colors">
              COLLECTIONS
            </a>
            <a to="/about" className="font-body text-sm tracking-wider text-muted-colors hover:text-foreground transition-colors">
              ABOUT
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-muted-colors hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-muted-colors hover:text-foreground transition-colors">
              <ShoppingBag className="w-5 h-5" />
              
            </button>
            
                <button 
              className="md:hidden text-muted-colors hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

          {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a to="/new-arrivals" className="font-body text-sm tracking-wider text-muted-colors hover:text-foreground transition-colors">
                NEW ARRIVALS
              </a>
              <a to="/collections" className="font-body text-sm tracking-wider text-muted-colors hover:text-foreground transition-colors">
                COLLECTIONS
              </a>
              <a to="/about" className="font-body text-sm tracking-wider text-muted-colors hover:text-foreground transition-colors">
                ABOUT
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
