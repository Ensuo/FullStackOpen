const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {
      Array.from({length: parts.length}, (_, index) => {
        return <Part part={parts[index]}/>
      })
    }
    <h3>total of {parts.reduce(function(acc, obj) {
        return acc + obj.exercises
    }, 0)} exercises</h3>     
  </>

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course