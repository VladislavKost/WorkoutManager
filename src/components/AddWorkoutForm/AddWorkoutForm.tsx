import "./AddWorkoutForm.css";

export const AddWorkoutForm = ({
  setNewWorkout,
}: {
  setNewWorkout: (formData: FormData) => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setNewWorkout(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <div className="label">Дата (дд.мм.гггг)</div>
        <div className="label">Пройдено км</div>
      </div>
      <div>
        <input className="input input-date" name="date" type="date" required />
        <input
          className="input input-km"
          name="kmAmount"
          type="number"
          step="0.01"
          required
        />
        <button className="submit-btn" name="submitButton" type="submit">
          Ok
        </button>
      </div>
    </form>
  );
};
