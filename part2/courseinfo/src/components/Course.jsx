const Header = ({courseName}) => {
    return <h2>{courseName}</h2>
}
  
const Total = ({parts}) => {
    const sumOfExercises = parts.reduce(
        (sum, part) => sum + part.exercises, 0)

    return <strong>total of {sumOfExercises} exercices</strong>
}

const Part = ({part, exercises}) => {
    return (
        <p>
        {part} {exercises}
        </p>
    )
}

const Content = ({parts}) => {
    return (
        <div>
        {parts.map(({name, exercises, id}) => <Part part={name} exercises={exercises} key={id}/>)}
        </div>
    )
}

const Course = (props) => {
    const {id, name, parts} = props.course

    return (
        <>
        <Header courseName={name}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
        </>
    )
}

export default Course