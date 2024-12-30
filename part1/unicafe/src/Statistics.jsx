/* eslint-disable react/prop-types */
const Statistics = ({ reviews }) => {
  const total = reviews.good + reviews.neutral + reviews.bad;
  if (total === 0) {
    return (
        <>
            <h2>Statistics</h2>
            <p>No feedback given</p>
        </>
    )
  }
  
  return (
    <>
      <h2>Statistics</h2>
      <p>good {reviews.good}</p>
      <p>neutral {reviews.neutral}</p>
      <p>bad {reviews.bad}</p>
      <p>all {total}</p>
      <p>average {(reviews.good - reviews.bad) / total}</p>
      <p>positive {reviews.good * 100 / total} %</p>
    </>
  );
};

export default Statistics;
