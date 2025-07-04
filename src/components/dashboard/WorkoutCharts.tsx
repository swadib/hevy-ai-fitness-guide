import { Card } from "@/components/ui/card";
import { Workout } from "@/types/workout";

interface WorkoutChartsProps {
  workouts: Workout[];
}

const WorkoutCharts = ({ workouts }: WorkoutChartsProps) => {
  // Calculate weekly volume data
  const weeklyData = workouts.map(workout => ({
    date: new Date(workout.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    volume: workout.totalVolume,
    duration: workout.duration
  }));

  const maxVolume = Math.max(...weeklyData.map(d => d.volume));
  const maxDuration = Math.max(...weeklyData.map(d => d.duration));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Volume Chart */}
      <Card className="p-6 bg-card">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Weekly Volume</h3>
        <div className="space-y-3">
          {weeklyData.map((data, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{data.date}</span>
                <span className="text-card-foreground font-medium">{data.volume.toLocaleString()} lbs</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(data.volume / maxVolume) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Duration Chart */}
      <Card className="p-6 bg-card">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Workout Duration</h3>
        <div className="space-y-3">
          {weeklyData.map((data, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{data.date}</span>
                <span className="text-card-foreground font-medium">{data.duration} min</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-secondary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(data.duration / maxDuration) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Exercise Distribution */}
      <Card className="p-6 bg-card lg:col-span-2">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Exercise Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {(() => {
            const muscleGroups = new Map();
            workouts.forEach(workout => {
              workout.exercises.forEach(exercise => {
                exercise.muscleGroup.forEach(muscle => {
                  muscleGroups.set(muscle, (muscleGroups.get(muscle) || 0) + 1);
                });
              });
            });

            const sortedGroups = Array.from(muscleGroups.entries())
              .sort((a, b) => b[1] - a[1])
              .slice(0, 6);

            const maxCount = Math.max(...sortedGroups.map(([, count]) => count));

            return sortedGroups.map(([muscle, count]) => (
              <div key={muscle} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground capitalize">{muscle}</span>
                  <span className="text-card-foreground font-medium">{count}x</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(count / maxCount) * 100}%` }}
                  />
                </div>
              </div>
            ));
          })()}
        </div>
      </Card>
    </div>
  );
};

export default WorkoutCharts;