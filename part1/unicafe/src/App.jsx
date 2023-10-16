import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
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
    setTotal(newGood + neutral + bad)
  }

  const neutralFeedback = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
    setTotal(good + newNeutral + bad)
  }

  const badFeedback = () => {
    const newBad = bad+1
    setBad(newBad)
    setTotal(good + neutral + newBad)
  }


  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={goodFeedback} text='good' />
        <Button handleClick={neutralFeedback} text='neutral' />
        <Button handleClick={badFeedback} text='bad' />
      </div>
      <div>
        <h1>statistics</h1>
        good {good}<br/>
        neutral {neutral}<br/>
        bad {bad} <br/>
        all {total}
      </div>
    </div>
  )
}

export default App