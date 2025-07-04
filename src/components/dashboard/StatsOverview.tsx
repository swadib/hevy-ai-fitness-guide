import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, Clock, Flame } from "lucide-react";
import { WorkoutStats } from "@/types/workout";

interface StatsOverviewProps {
  stats: WorkoutStats;
}

const StatsOverview = ({ stats }: StatsOverviewProps) => {
  const statCards = [
    {
      icon: Activity,
      label: "Total Workouts",
      value: stats.totalWorkouts,
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      label: "Total Volume",
      value: `${(stats.totalVolume / 1000).toFixed(1)}k lbs`,
      color: "text-secondary"
    },
    {
      icon: Clock,
      label: "Avg Duration",
      value: `${stats.averageDuration}min`,
      color: "text-accent"
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: `${stats.currentStreak} days`,
      color: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-6 bg-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsOverview;