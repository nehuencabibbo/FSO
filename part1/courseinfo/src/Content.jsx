/* eslint-disable react/jsx-key */
import Part from "./Part";

const Content = (props) => {
  console.log(props);
  return (
    <>
      {props.parts.map((partObject) => {
        return <Part partName={partObject.name} exercises={partObject.exercises} />;
      })}
    </>
  );
};

export default Content;
