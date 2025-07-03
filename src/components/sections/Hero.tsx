import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Card className="p-4 bg-card/80 backdrop-blur-sm shadow-glow">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">+15% Strength</span>
          </div>
        </Card>
      </div>
      
      <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <Card className="p-4 bg-card/80 backdrop-blur-sm shadow-glow">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">7 Day Streak</span>
          </div>
        </Card>
      </div>

      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Card className="p-4 bg-card/80 backdrop-blur-sm shadow-glow">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">AI Coach Ready</span>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Your Fitness Journey,
            <br />
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Transform your Hevy workouts into intelligent insights. Get personalized coaching, 
            nutrition plans, and track your progress like never before.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 animate-pulse-glow">
            <Activity className="h-5 w-5" />
            Connect Your Hevy Account
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 bg-card/20 backdrop-blur-sm border-white/20 text-center">
            <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Analytics</h3>
            <p className="text-white/70">Visualize your progress with beautiful charts and insights</p>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-sm border-white/20 text-center">
            <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Coaching</h3>
            <p className="text-white/70">Get personalized workout and nutrition advice</p>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-sm border-white/20 text-center">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Nutrition Tracking</h3>
            <p className="text-white/70">Custom meal plans and macro tracking made simple</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;