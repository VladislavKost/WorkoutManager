import { useEffect, useState } from "react";
import { AddWorkoutForm } from "../AddWorkoutForm";
import { WorkoutList } from "../WorkoutList";
import "./WorkoutManager.css";

let id = 0;

export const WorkoutManager = () => {
  const [workouts, setWorkouts] = useState<
    Array<{ id: number; date: string; kmAmount: number }>
  >([]);
  const [newWorkout, setNewWorkout] = useState<FormData>();

  const sortWorkoutsByDate = (
    newWorkoutList: Array<{ id: number; date: string; kmAmount: number }>
  ): Array<{ id: number; date: string; kmAmount: number }> => {
    const result = newWorkoutList.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    return result;
  };

  useEffect(() => {
    let newWorkoutList: Array<{ id: number; date: string; kmAmount: number }> =
      [];
    if (newWorkout && newWorkout.get("date")) {
      const dateString = newWorkout.get("date") as string;
      if (!workouts.some((workout) => workout.date === dateString)) {
        newWorkoutList = [
          ...workouts,
          {
            id: id++,
            date: dateString,
            kmAmount: Number(newWorkout.get("kmAmount")),
          },
        ];
      } else {
        newWorkoutList = [
          ...workouts.map((workout) =>
            workout.date === dateString
              ? {
                  ...workout,
                  id: id++,
                  kmAmount:
                    workout.kmAmount + Number(newWorkout.get("kmAmount")),
                }
              : workout
          ),
        ];
      }
      setWorkouts(sortWorkoutsByDate(newWorkoutList));
    }
  }, [newWorkout]);

  return (
    <div>
      <AddWorkoutForm setNewWorkout={setNewWorkout} />
      <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
};
