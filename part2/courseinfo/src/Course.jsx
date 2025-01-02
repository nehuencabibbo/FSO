const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p style={{fontWeight: 'bold'}}>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => parts.map((part) => <Part part={part} />);

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.reduce((total, part) => (total += part.exercises), 0)}
      />
    </>
  );
};

export default Course;
