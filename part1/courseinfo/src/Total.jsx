const Total = (props) => {
  const totalExercises = props.exercises.reduce(
    (sum, exercises) => sum + exercises,
    0
  );
  return <p>Number of exercises {totalExercises}</p>;
};

export default Total;
