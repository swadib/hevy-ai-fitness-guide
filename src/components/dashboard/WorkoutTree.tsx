import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Dumbbell } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutTreeProps {
  workouts: Workout[];
}

const WorkoutTree = ({ workouts }: WorkoutTreeProps) => {
  const [expandedWorkouts, setExpandedWorkouts] = useState<Set<string>>(new Set());
  const [expandedExercises, setExpandedExercises] = useState<Set<string>>(new Set());

  const toggleWorkout = (workoutId: string) => {
    const newExpanded = new Set(expandedWorkouts);
    if (newExpanded.has(workoutId)) {
      newExpanded.delete(workoutId);
    } else {
      newExpanded.add(workoutId);
    }
    setExpandedWorkouts(newExpanded);
  };

  const toggleExercise = (exerciseId: string) => {
    const newExpanded = new Set(expandedExercises);
    if (newExpanded.has(exerciseId)) {
      newExpanded.delete(exerciseId);
    } else {
      newExpanded.add(exerciseId);
    }
    setExpandedExercises(newExpanded);
  };

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <Card key={workout.id} className="p-4 bg-card">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleWorkout(workout.id)}
          >
            <div className="flex items-center gap-3">
              {expandedWorkouts.has(workout.id) ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
              <Dumbbell className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-card-foreground">{workout.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(workout.date).toLocaleDateString()} • {workout.duration}min • {workout.totalVolume.toLocaleString()} lbs
                </p>
              </div>
            </div>
          </div>

          {expandedWorkouts.has(workout.id) && (
            <div className="mt-4 ml-7 space-y-3">
              {workout.exercises.map((exercise) => (
                <div key={exercise.id} className="border-l-2 border-muted pl-4">
                  <div 
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleExercise(exercise.id)}
                  >
                    {expandedExercises.has(exercise.id) ? (
                      <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    )}
                    <span className="font-medium text-card-foreground">{exercise.name}</span>
                    <span className="text-xs text-muted-foreground">
                      ({exercise.sets.length} sets)
                    </span>
                  </div>

                  {expandedExercises.has(exercise.id) && (
                    <div className="mt-2 ml-5 space-y-1">
                      {exercise.sets.map((set, index) => (
                        <div key={set.id} className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground w-8">Set {index + 1}:</span>
                          <span className="text-card-foreground">
                            {set.reps} reps × {set.weight} lbs
                          </span>
                          {set.completed && (
                            <span className="text-primary text-xs">✓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default WorkoutTree;