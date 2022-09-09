const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

function amount(item){
    return item.exercises
}

function sum(prev, next){
    return prev + next
}

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    /> 
    <Part
      part={parts[3]}
    />
    <h3>total of {parts.map(amount).reduce(sum)} exercises</h3>     
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