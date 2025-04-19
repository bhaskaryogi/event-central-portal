
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-sport-blue text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          EventCentral
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-sport-blue/80"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button asChild className="bg-sport-orange hover:bg-sport-orange/90 text-white">
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-sport-blue z-50 md:hidden shadow-lg">
            <div className="flex flex-col p-4 space-y-3">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              <Button asChild className="bg-sport-orange hover:bg-sport-orange/90 text-white w-full">
                <Link to="/registration" onClick={() => setIsMenuOpen(false)}>Register Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

interface NavLinksProps {
  mobile?: boolean;
  setIsMenuOpen?: (value: boolean) => void;
}

function NavLinks({ mobile, setIsMenuOpen }: NavLinksProps) {
  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/certificate", label: "Certificate" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];
  
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${
            mobile 
              ? "block py-2 hover:bg-sport-blue/80 w-full text-center" 
              : "hover:text-sport-cyan transition-colors"
          }`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export default Navbar;
