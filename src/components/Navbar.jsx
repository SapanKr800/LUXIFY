import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);


  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <nav className="font fixed top-0 left-0 right-0 z-50 bg-[#0D0C0B]/80 backdrop-blur-lg border-b border-[#322D2A]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <NavLink to="/" className="font text-2xl font-semibold font1 tracking-wide text-white">
            LUXIFY
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/new-arrivals" className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-black"} 
     font-body text-sm tracking-wider text-muted-colors 
    transition-colors`
            }>
              NEW ARRIVALS
            </NavLink>
            <NavLink to="/collections"
              className={({ isActive }) =>
                `${isActive ? "text-red-500" : "text-black"} 
     font-body text-sm tracking-wider text-muted-colors 
    transition-colors`}>
              COLLECTIONS
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-black"} 
     font-body text-sm tracking-wider text-muted-colors 
    transition-colors`}>
              ABOUT
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-muted-colors hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-muted-colors hover:text-foreground transition-colors">
              <NavLink to="cart">      <ShoppingBag />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}

              </NavLink>
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
