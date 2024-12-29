import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total
        exercises={parts.map((partObject) => partObject.exercises)}
      ></Total>
    </div>
  );
};

export default App;
