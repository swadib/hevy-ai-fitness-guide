import { Button } from "@/components/ui/button";
import { Activity, User, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              HevyBuddy
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#workouts" className="text-sm font-medium hover:text-primary transition-colors">
            Workouts
          </a>
          <a href="#nutrition" className="text-sm font-medium hover:text-primary transition-colors">
            Nutrition
          </a>
          <a href="#coach" className="text-sm font-medium hover:text-primary transition-colors">
            AI Coach
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="hero">
            <User className="h-4 w-4" />
            Connect Hevy
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;