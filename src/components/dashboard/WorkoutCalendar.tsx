import { Card } from "@/components/ui/card";
import { Workout } from "@/types/workout";

interface WorkoutCalendarProps {
  workouts: Workout[];
  selectedDate: string | null;
  onDateSelect: (date: string | null) => void;
}

const WorkoutCalendar = ({ workouts, selectedDate, onDateSelect }: WorkoutCalendarProps) => {
  // Create a map of dates to workouts for quick lookup
  const workoutMap = new Map();
  workouts.forEach(workout => {
    workoutMap.set(workout.date, workout);
  });

  // Generate calendar days for the current month
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

  const days = [];
  const current = new Date(startDate);
  
  for (let i = 0; i < 42; i++) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getIntensityColor = (workout: Workout) => {
    const volumeRatio = workout.totalVolume / 10000; // Normalize volume
    if (volumeRatio > 0.8) return 'bg-primary';
    if (volumeRatio > 0.6) return 'bg-primary/70';
    if (volumeRatio > 0.4) return 'bg-primary/50';
    return 'bg-primary/30';
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-card">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-card-foreground">
            {firstDayOfMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}

          {days.map((day, index) => {
            const dateStr = formatDate(day);
            const workout = workoutMap.get(dateStr);
            const isCurrentMonth = day.getMonth() === currentMonth;
            const isToday = day.toDateString() === today.toDateString();
            const isSelected = selectedDate === dateStr;

            return (
              <div
                key={index}
                className={`
                  aspect-square p-2 rounded-lg cursor-pointer border transition-colors
                  ${isCurrentMonth ? 'text-card-foreground' : 'text-muted-foreground'}
                  ${isToday ? 'border-primary' : 'border-transparent'}
                  ${isSelected ? 'bg-accent' : 'hover:bg-muted'}
                  ${workout ? getIntensityColor(workout) : ''}
                `}
                onClick={() => onDateSelect(workout ? dateStr : null)}
              >
                <div className="text-center">
                  <div className={`text-sm ${workout ? 'text-white font-medium' : ''}`}>
                    {day.getDate()}
                  </div>
                  {workout && (
                    <div className="text-xs text-white/80 mt-1">
                      {workout.exercises.length}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {selectedDate && workoutMap.has(selectedDate) && (
        <Card className="p-6 bg-card">
          <div className="space-y-4">
            {(() => {
              const workout = workoutMap.get(selectedDate);
              return (
                <>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-card-foreground">{workout.title}</h4>
                    <span className="text-sm text-muted-foreground">
                      {new Date(workout.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="text-lg font-medium text-card-foreground">{workout.duration}min</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Volume</p>
                      <p className="text-lg font-medium text-card-foreground">{workout.totalVolume.toLocaleString()} lbs</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Exercises</p>
                      <p className="text-lg font-medium text-card-foreground">{workout.exercises.length}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-card-foreground">Exercises:</p>
                    {workout.exercises.map((exercise) => (
                      <div key={exercise.id} className="text-sm text-muted-foreground">
                        • {exercise.name} ({exercise.sets.length} sets)
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </Card>
      )}
    </div>
  );
};

export default WorkoutCalendar;