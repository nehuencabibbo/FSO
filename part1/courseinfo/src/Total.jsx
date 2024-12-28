const Total = (props) => {
    const totalExercises = props.exercices.reduce((sum, exercises) => sum + exercises, 0);
    return (
        <p>
            Number of exercises {totalExercises}
        </p>
    )
}

export default Total