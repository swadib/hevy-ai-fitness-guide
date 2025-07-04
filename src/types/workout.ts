export interface WorkoutSet {
  id: string;
  reps: number;
  weight: number;
  restTime?: number;
  completed: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string[];
  sets: WorkoutSet[];
  notes?: string;
}

export interface Workout {
  id: string;
  date: string;
  title: string;
  duration: number; // in minutes
  exercises: Exercise[];
  notes?: string;
  totalVolume: number;
}

export interface WorkoutStats {
  totalWorkouts: number;
  totalVolume: number;
  averageDuration: number;
  currentStreak: number;
  personalRecords: number;
}