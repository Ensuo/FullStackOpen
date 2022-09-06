import { useState } from 'react';
import React from 'react';

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine= ({text, value}) => (
  <tr>
    <td>{text} {value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }else{
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={good+neutral+bad}/>
            <StatisticLine text="average" value={(good-bad)/3} />
            <StatisticLine text="positive" value={good/(good+neutral+bad)+"%"} />
          </tbody>
        </table>
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App