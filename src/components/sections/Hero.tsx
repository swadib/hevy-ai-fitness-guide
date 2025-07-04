import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Main Content */}
      <div className="container px-4 text-center space-y-12 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Your Fitness Journey,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your Hevy workouts into intelligent insights. Get personalized coaching, 
            nutrition plans, and track your progress like never before.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/dashboard">
              <Activity className="h-5 w-5" />
              Connect Your Hevy Account
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 bg-card backdrop-blur-sm text-center">
            <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Smart Analytics</h3>
            <p className="text-muted-foreground">Visualize your progress with beautiful charts and insights</p>
          </Card>
          
          <Card className="p-6 bg-card backdrop-blur-sm text-center">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">AI Coaching</h3>
            <p className="text-muted-foreground">Get personalized workout and nutrition advice</p>
          </Card>
          
          <Card className="p-6 bg-card backdrop-blur-sm text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Nutrition Tracking</h3>
            <p className="text-muted-foreground">Custom meal plans and macro tracking made simple</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;