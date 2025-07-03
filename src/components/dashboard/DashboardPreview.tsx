import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, TrendingUp, Calendar, MessageSquare, PieChart } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Fitness Dashboard
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Preview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how HevyBuddy transforms your workout data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Workout Analytics Card */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Workout Analytics</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">This Week's Volume</span>
                <span className="text-2xl font-bold text-primary">15,420 lbs</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Personal Records</span>
                <span className="text-2xl font-bold text-secondary">3 New PRs</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Workout Streak</span>
                <span className="text-2xl font-bold text-accent">7 Days</span>
              </div>
            </div>

            <div className="mt-6 h-32 bg-muted/30 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-12 w-12 text-muted-foreground" />
              <span className="ml-3 text-muted-foreground">Interactive Charts Coming Soon</span>
            </div>
          </Card>

          {/* AI Coach Card */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/10 p-3 rounded-xl">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">AI Fitness Coach</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                <p className="font-medium text-secondary mb-2">Coach Says:</p>
                <p className="text-sm text-muted-foreground">
                  "Great job on your deadlift PR! Your form is improving. Try adding 
                  more accessory work for your upper back to support even heavier lifts."
                </p>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <p className="font-medium text-accent mb-2">Nutrition Tip:</p>
                <p className="text-sm text-muted-foreground">
                  "Based on your leg day intensity, increase your protein intake 
                  to 1.2g per lb bodyweight for optimal recovery."
                </p>
              </div>
            </div>

            <Button variant="fitness" className="w-full mt-6">
              <MessageSquare className="h-4 w-4" />
              Chat with Your Coach
            </Button>
          </Card>

          {/* Nutrition Tracking Card */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/10 p-3 rounded-xl">
                <PieChart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Nutrition Tracking</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Protein</span>
                  <span className="text-sm font-medium">120g / 150g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Carbs</span>
                  <span className="text-sm font-medium">180g / 200g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Fats</span>
                  <span className="text-sm font-medium">65g / 70g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
            </div>

            <Button variant="energy" className="w-full mt-6">
              Generate Meal Plan
            </Button>
          </Card>

          {/* Calendar View Card */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Workout Calendar</h3>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-center font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
              
              {Array.from({ length: 21 }, (_, i) => {
                const intensity = Math.random();
                let bgColor = 'bg-muted/30';
                if (intensity > 0.7) bgColor = 'bg-primary';
                else if (intensity > 0.4) bgColor = 'bg-primary/60';
                else if (intensity > 0.2) bgColor = 'bg-primary/30';
                
                return (
                  <div 
                    key={i} 
                    className={`aspect-square rounded ${bgColor} flex items-center justify-center text-xs`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <Button variant="outline" className="w-full">
              View Full Calendar
            </Button>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Activity className="h-5 w-5" />
            Try HevyBuddy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;