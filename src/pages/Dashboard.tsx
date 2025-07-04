import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, BarChart3, TreePine } from "lucide-react";
import { mockWorkouts, mockStats } from "@/data/mockWorkouts";
import WorkoutTree from "@/components/dashboard/WorkoutTree";
import WorkoutCalendar from "@/components/dashboard/WorkoutCalendar";
import WorkoutCharts from "@/components/dashboard/WorkoutCharts";
import StatsOverview from "@/components/dashboard/StatsOverview";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Track your fitness journey</p>
          </div>
          <Button variant="hero">
            <Activity className="h-4 w-4" />
            Sync Hevy Data
          </Button>
        </div>

        {/* Stats Overview */}
        <StatsOverview stats={mockStats} />

        {/* Main Content Tabs */}
        <Tabs defaultValue="tree" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="tree" className="flex items-center gap-2">
              <TreePine className="h-4 w-4" />
              Tree View
            </TabsTrigger>
            <TabsTrigger value="charts" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Charts
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tree" className="space-y-4">
            <WorkoutTree workouts={mockWorkouts} />
          </TabsContent>

          <TabsContent value="charts" className="space-y-4">
            <WorkoutCharts workouts={mockWorkouts} />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <WorkoutCalendar 
              workouts={mockWorkouts} 
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;