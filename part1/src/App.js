import Header from "./components/header.js"
import Content from "./components/content.js"
import Total from "./components/total.js"

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course= 'Half Stack application development'/>
      <Content part1={part1} exe1= {exercises1} part2={part2} exe2={exercises2} part3={part3} exe3={exercises3}/>
  
      <Total first={exercises1} second={exercises2} third={exercises3}/>
    </div>
  )
}

export default App