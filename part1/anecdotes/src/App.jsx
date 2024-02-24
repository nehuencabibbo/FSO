import { useState } from 'react'

const Title = ({text}) => (<h1>{text}</h1>)

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({text}) => (<div>{text}</div>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const goToNextAnecdote = (amountOfAnecdotes) => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    setSelected(getRandomNumber(0, amountOfAnecdotes - 1))
  }

  const voteForSelectedAnecdote = () => {
    const newVotes = votes.concat()
    newVotes[selected] += 1

    setVotes(newVotes)
  }

  const mostVotedAnecdote = () => {}

  return (
    <>
      <Title text="Anecdote of the day"/>
      <Anecdote text={anecdotes[selected]} />
      <div>has {votes[selected]} votes</div>

      <Button text="next anecdote" handleClick={() => goToNextAnecdote(anecdotes.length)}/>
      <Button text="vote" handleClick={voteForSelectedAnecdote}/>

      <Title text="Anecdote with most votes"/>
      <Anecdote text= {anecdotes[votes.indexOf(Math.max(...votes))]} />
    </>
  )
}

export default App