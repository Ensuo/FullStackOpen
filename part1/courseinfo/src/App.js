import Header from "./components/header.js"
import Content from "./components/content.js"
import Total from "./components/total.js"

const App = () => {
  const course = 'Half Stack Application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course= {course}/>
      <Content part1={parts[0].name} exe1= {parts[0].exercises} part2={parts[1].name} exe2={parts[1].exercises} part3={parts[2].name} exe3={parts[2].exercises}/>

      <Total first={parts[0].exercises} second={parts[1].exercises} third={parts[2].exercises}/>
    </div>
  )
}

export default App