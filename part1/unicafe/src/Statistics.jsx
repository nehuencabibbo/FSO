/* eslint-disable react/prop-types */
const StatisticLine = ({text, calculation}) => <tr>{text} {calculation}</tr>

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

  const average = (reviews.good - reviews.bad) / total;
  const positivePercentage = reviews.good * 100 / total; 
  
  return (
    <>
        <h2>Statistics</h2>
        <table>
            <StatisticLine text="good" calculation={reviews.good}/>
            <StatisticLine text="neutral" calculation={reviews.neutral}/>
            <StatisticLine text="bad" calculation={reviews.bad}/>
            <StatisticLine text="all" calculation={total}/>
            <StatisticLine text="average" calculation={average}/>
            <StatisticLine text="positive" calculation={`${positivePercentage} %`}/>
        </table>
    </>
  );
};

export default Statistics;
