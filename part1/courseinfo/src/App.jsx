import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    {part: part1, exercices: exercises1}, 
    {part: part2, exercices: exercises2},
    {part: part3, exercices: exercises3},
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total exercices={parts.map((partObject, _) => partObject.exercices)}></Total>
    </div>
  )
}

export default App