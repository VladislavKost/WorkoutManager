import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

import "./WorkoutListItem.css";

export const WorkoutListItem = ({
  id,
  date,
  kmAmount,
  workouts,
  setWorkouts,
}: {
  id: number;
  date: string;
  kmAmount: number;
  workouts: Array<{ id: number; date: string; kmAmount: number }>;
  setWorkouts: (
    workouts: Array<{ id: number; date: string; kmAmount: number }>
  ) => void;
}) => {
  const onHandleDelete = () => {
    const newWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(newWorkouts);
  };
  return (
    <div className="workout-item">
      <div className="workout-item-date">{date}</div>
      <div className="workout-item-km">{kmAmount}</div>
      <EditIcon className="workout-item-edit" />
      <ClearIcon className="workout-item-delete" onClick={onHandleDelete} />
    </div>
  );
};
