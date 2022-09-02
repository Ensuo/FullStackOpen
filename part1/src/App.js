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
      <Content part={part1} exercises= {exercises1} />
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
  
      <Total first={exercises1} second={exercises2} third={exercises3}/>
    </div>
  )
}

export default App