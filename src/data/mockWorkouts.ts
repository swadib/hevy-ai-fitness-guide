import { Workout, WorkoutStats } from "@/types/workout";

export const mockWorkouts: Workout[] = [
  {
    id: "1",
    date: "2024-07-01",
    title: "Push Day",
    duration: 75,
    totalVolume: 8250,
    exercises: [
      {
        id: "1",
        name: "Bench Press",
        muscleGroup: ["chest", "triceps", "shoulders"],
        sets: [
          { id: "1", reps: 8, weight: 185, completed: true },
          { id: "2", reps: 6, weight: 195, completed: true },
          { id: "3", reps: 4, weight: 205, completed: true },
        ]
      },
      {
        id: "2",
        name: "Overhead Press",
        muscleGroup: ["shoulders", "triceps"],
        sets: [
          { id: "4", reps: 8, weight: 115, completed: true },
          { id: "5", reps: 6, weight: 125, completed: true },
          { id: "6", reps: 5, weight: 135, completed: true },
        ]
      },
      {
        id: "3",
        name: "Dips",
        muscleGroup: ["chest", "triceps"],
        sets: [
          { id: "7", reps: 12, weight: 25, completed: true },
          { id: "8", reps: 10, weight: 35, completed: true },
          { id: "9", reps: 8, weight: 45, completed: true },
        ]
      }
    ]
  },
  {
    id: "2",
    date: "2024-07-03",
    title: "Pull Day",
    duration: 68,
    totalVolume: 7890,
    exercises: [
      {
        id: "4",
        name: "Deadlift",
        muscleGroup: ["back", "glutes", "hamstrings"],
        sets: [
          { id: "10", reps: 5, weight: 275, completed: true },
          { id: "11", reps: 3, weight: 295, completed: true },
          { id: "12", reps: 1, weight: 315, completed: true },
        ]
      },
      {
        id: "5",
        name: "Pull-ups",
        muscleGroup: ["back", "biceps"],
        sets: [
          { id: "13", reps: 8, weight: 25, completed: true },
          { id: "14", reps: 6, weight: 35, completed: true },
          { id: "15", reps: 5, weight: 45, completed: true },
        ]
      },
      {
        id: "6",
        name: "Barbell Rows",
        muscleGroup: ["back", "biceps"],
        sets: [
          { id: "16", reps: 8, weight: 155, completed: true },
          { id: "17", reps: 6, weight: 165, completed: true },
          { id: "18", reps: 5, weight: 175, completed: true },
        ]
      }
    ]
  },
  {
    id: "3",
    date: "2024-07-05",
    title: "Leg Day",
    duration: 82,
    totalVolume: 9120,
    exercises: [
      {
        id: "7",
        name: "Squat",
        muscleGroup: ["quads", "glutes"],
        sets: [
          { id: "19", reps: 8, weight: 225, completed: true },
          { id: "20", reps: 6, weight: 245, completed: true },
          { id: "21", reps: 4, weight: 265, completed: true },
        ]
      },
      {
        id: "8",
        name: "Romanian Deadlift",
        muscleGroup: ["hamstrings", "glutes"],
        sets: [
          { id: "22", reps: 10, weight: 185, completed: true },
          { id: "23", reps: 8, weight: 195, completed: true },
          { id: "24", reps: 6, weight: 205, completed: true },
        ]
      }
    ]
  }
];

export const mockStats: WorkoutStats = {
  totalWorkouts: 45,
  totalVolume: 156780,
  averageDuration: 72,
  currentStreak: 7,
  personalRecords: 3
};