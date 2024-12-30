/* eslint-disable react/prop-types */
const Statistics = ({ reviews }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>good {reviews.good}</p>
      <p>neutral {reviews.neutral}</p>
      <p>bad {reviews.bad}</p>
    </>
  );
};

export default Statistics;
