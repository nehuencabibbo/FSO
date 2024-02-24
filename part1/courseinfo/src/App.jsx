const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  let renderedParts = [];
  for (let i = 0; i < props.parts.length; i++) {
    
    const part = props.parts[i].part;
    const exercices = props.parts[i].exercices;

    //When dynamically creating components, a key
    //attribute should be added so that react can
    //efficiently update the DOM when the components
    //change, without losing track of which component
    //corresponds to which element in the list

    //Basically, when dynamically creating elements
    //react needs a way to distinguish between them
    renderedParts.push(<Part key={i} part={part} exercises={exercices}/>);
  }
  return (
    //If an array of elements is returned, react
    //will render each of it's elements 

    //Doing:

    //{[part: part1, exercices: 10, ...]}

    //Is equivalent to:

    //<Part part=... />
    //<Part part=... />
    //etc
    <>
      {renderedParts}
    </>
  )
}

const Total = (props) => {
  let numberOfExercices = props.parts.reduce((total, part) => total + part.exercices, 0); 
  return (
    <>
      <p>Number of exercises: {numberOfExercices}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercices: 10
      },
      {
        part: 'Using props to pass data',
        exercices: 7
      },
      {
        part: 'State of a component',
        exercices: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default App