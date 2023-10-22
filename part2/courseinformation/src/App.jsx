const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = (props) => {
  return <p>Number of exercises {props.sumOfExercises}</p>
}

const Part = (props) => {
  return (
    <p>
      {props.cont} {props.ex}
    </p>
  )
}

const Content = ({ course }) => {
  console.log(course)
  return (
    <div>
      {course.map((part) => {
        return <Part key={part.id} cont={part.name} ex={part.exercises} />
      })}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content course={course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App