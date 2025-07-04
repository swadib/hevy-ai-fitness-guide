import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, TrendingUp, MessageSquare, Calendar, PieChart } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "Workout Analytics",
      description: "Transform your Hevy data into beautiful visualizations. Track strength gains, volume trends, and workout consistency.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageSquare,
      title: "AI Fitness Coach",
      description: "Chat with your personal AI coach for workout advice, form tips, and motivation based on your actual progress.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: PieChart,
      title: "Nutrition Planner",
      description: "Generate custom diet plans and track macronutrients. Get meal suggestions that align with your fitness goals.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Calendar,
      title: "Smart Notifications",
      description: "Never miss a workout with intelligent reminders. Celebrate milestones and maintain your streak.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visualize your fitness journey with detailed charts, personal records, and achievement tracking.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Fitness Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            HevyBuddy combines the power of your workout data with AI intelligence to create 
            a comprehensive fitness ecosystem tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/dashboard">
              <Activity className="h-5 w-5" />
              Start Your Journey Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;