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

  const goodFeedback = () => {
    setGood(good+1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral+1)
  }

  const badFeedback = () => {
    setBad(bad+1)
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
        bad {bad}
      </div>
    </div>
  )
}

export default App