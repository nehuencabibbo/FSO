import { useState } from 'react'

const Button = ({name, handleClick}) => (
  <button onClick={handleClick}>
    {name}
  </button>
)

const Title = ({text}) => (
  <h1>{text}</h1>
)

const StatisticLine = ({name, stat}) => {
  return( 
    <>
      <td>{name}</td> 
      <td>{stat}</td>
    </>
  )
}

const Statistics = ({goodAmount, neutralAmount, badAmount}) => {
  const total = goodAmount + neutralAmount + badAmount

  if (total == 0) return (
    <div>No feedback given</div>
  )

  const positive =  goodAmount * 100/ total
  const average = (goodAmount - badAmount) / total
  
  return (
    <table>
      <tbody>
        <tr><StatisticLine name={"good"} stat={goodAmount}/></tr>
        <tr><StatisticLine name={"neutral"} stat={neutralAmount}/></tr>
        <tr><StatisticLine name={"bad"} stat={badAmount}/></tr>
        <tr><StatisticLine name={"all"} stat={total}/></tr>
        <tr><StatisticLine name={"average"} stat={average}/></tr>
        <tr><StatisticLine name={"positive"} stat={positive + " %"}/></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text={"give feedback"} />
      <Button name={"good"} handleClick={() => setGood(good + 1)}/>
      <Button name={"neutral"} handleClick={() => setNeutral(neutral + 1)}/>
      <Button name={"bad"} handleClick={() => setBad(bad + 1)}/>

      <Title text={"statistics"} />
      <Statistics goodAmount={good} neutralAmount={neutral} badAmount={bad}/>
    </div>
  )
}

export default App