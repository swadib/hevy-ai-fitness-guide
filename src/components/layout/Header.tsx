import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Activity, User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if Hevy API key exists
    const apiKey = localStorage.getItem("hevy_api_key");
    setIsConnected(!!apiKey);
  }, []);

  const handleDisconnect = () => {
    localStorage.removeItem("hevy_api_key");
    setIsConnected(false);
    
    toast({
      title: "Disconnected",
      description: "Your Hevy account has been disconnected.",
    });
    
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              HevyBuddy
            </Link>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/chat" className="text-sm font-medium hover:text-primary transition-colors">
            AI Coach
          </Link>
          <a href="#workouts" className="text-sm font-medium hover:text-primary transition-colors">
            Workouts
          </a>
          <a href="#nutrition" className="text-sm font-medium hover:text-primary transition-colors">
            Nutrition
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          {isConnected ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden md:block">
                Hevy Connected
              </span>
              <Button variant="ghost" size="icon" onClick={handleDisconnect}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="hero">
                <User className="h-4 w-4" />
                Connect Hevy
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;