import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total == 0) {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [ total, setTotal ] = useState(0)
  const [ average, setAverage ] = useState(0)
  const [ positive, setPositive ] = useState(0)

  const goodFeedback = () => {
    const newGood = good+1
    setGood(newGood)
    const newTotal = newGood + neutral + bad
    setTotal(newTotal)
    const newAverage = ((newGood*1) + (neutral*0) + (bad*-1))/newTotal
    setAverage(newAverage)
    const newPositive = ((newGood)/newTotal)*100
    setPositive(newPositive)
  }

  const neutralFeedback = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
    const newTotal = good + newNeutral + bad
    setTotal(newTotal)
    const newAverage = ((good*1) + (newNeutral*0) + (bad*-1))/newTotal
    setAverage(newAverage)
    const newPositive = ((good)/newTotal)*100
    setPositive(newPositive)
  }

  const badFeedback = () => {
    const newBad = bad+1
    setBad(newBad)
    const newTotal = good + neutral + newBad
    setTotal(newTotal)
    const newAverage = ((good*1) + (neutral*0) + (newBad*-1))/newTotal
    setAverage(newAverage)
    const newPositive = ((good)/newTotal)*100
    setPositive(newPositive)
  }


  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={goodFeedback} text='good' />
        <Button handleClick={neutralFeedback} text='neutral' />
        <Button handleClick={badFeedback} text='bad' />
      </div>
     <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positive}
    />
    </div>
  )
}

export default App