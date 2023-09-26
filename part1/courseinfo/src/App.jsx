const Header = ({ courseName }) => {
  return (
    <>
      <h1>{courseName.name}</h1>
    </>
  )
}

const Part = ({ prt }) =>{
  return (
    <>
      <p>{prt.name} {prt.exercises}</p>
    </>
  )
}

const Content = ({ p1 }) => {
  return (
    <>
      <p>
        <Part prt={p1.parts[0]} />
        <Part prt={p1.parts[1]} />
        <Part prt={p1.parts[2]} />
      </p>
    </>
  )
}

const Total = ({ exer }) => {
  return (
    <>
      <p>Number of exercises {exer.parts[0].exercises + exer.parts[1].exercises + exer.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 10
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course} />
      <Content 
          p1 = {course}
      />
      <Total exer={course} />
    </div>
  )
}

export default App