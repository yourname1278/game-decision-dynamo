import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border panel-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-background font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold text-foreground">LobbyNow</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground smooth-transition"
            >
              See how it works
            </button>
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a href="https://app.lobbynow.app" target="_blank" rel="noopener noreferrer">
                Start a Quickmatch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;