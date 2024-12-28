/* eslint-disable react/jsx-key */
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {props.parts.map((partObject) => (
        <Part partName={partObject.part} exercices={partObject.exercices} />
      ))}
    </>
  );
};

export default Content;
