import { useState } from 'react';
import React from 'react';

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Result = ({name, value}) => (
  <p>{name} {value}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good-bad)/3 > 0 ? (good-bad)/3 : 0
  const positive = all != 0 ? good/all : 0

  const addGood = () => {
    setGood(good + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }

  

  return (
    <div>
      <h2>
        give feedback
      </h2>
      <Button onClick={addGood} text="good"/>
      <Button onClick={addNeutral} text="neutral"/>
      <Button onClick={addBad} text="bad"/>
      <h2>
        statistics
      </h2>
      <Result name="good" value={good}/>
      <Result name="neutral" value={neutral}/>
      <Result name="bad" value={bad}/>
      <Result name="all" value={all}/>
      <Result name="average" value={average} />
      <Result name="positive" value={positive} />
    </div>
  )
}

export default App