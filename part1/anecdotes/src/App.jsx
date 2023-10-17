import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [ votes, setVotes ] = useState(new Uint8Array(anecdotes.length))

  const handleClick = () => {
    const newAnecdote = Math.floor((Math.random() * anecdotes.length) + 0)
    setSelected(newAnecdote)
  }

  const increaseVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] = votesCopy[selected]+1
    setVotes(votesCopy)
  }

  const mostVotes = () => {
    const votesCopy = [...votes]
    let max = votesCopy[0]
    let maxi = 0
    for(let i = 0; i<votesCopy.length; i++){
      if(votesCopy[i] > max)
        max = votesCopy[i]
    }
    for(let i = 0; i<votesCopy.length; i++){
      if(votesCopy[i] === max){
        maxi = i
      }
    }
    return maxi;
  }

  const popular = mostVotes()

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p>
        <button onClick={increaseVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </p>
      <p><h1>Anecdote with most votes</h1></p>
      <p>{anecdotes[popular]}</p>
      <p>has {votes[popular]} votes</p>
    </div>
  )
}

export default App