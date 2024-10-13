import { WorkoutListItem } from "../WorkoutListItem";

import "./WorkoutList.css";

export const WorkoutList = ({
  workouts,
  setWorkouts,
}: {
  workouts: Array<{ id: number; date: string; kmAmount: number }>;
  setWorkouts: (
    workouts: Array<{ id: number; date: string; kmAmount: number }>
  ) => void;
}) => {
  return (
    <div>
      <div className="workout-list-header">
        <div>Дата (ДД.ММ.ГГ)</div> <div>Пройдено км</div> <div>Действия</div>
      </div>
      {workouts.length > 0 ? (
        <div className="workout-list">
          {workouts.map((workout, index) => (
            <WorkoutListItem
              key={index}
              id={workout.id}
              date={workout.date}
              kmAmount={workout.kmAmount}
              workouts={workouts}
              setWorkouts={setWorkouts}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
