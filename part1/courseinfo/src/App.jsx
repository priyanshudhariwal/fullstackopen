const Header = ({ courseName }) => {
  return (
    <>
      <h1>{courseName}</h1>
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

const Content = ({ p1, p2, p3 }) => {
  return (
    <>
      <p>
        <Part prt={p1} />
        <Part prt={p2} />
        <Part prt={p3} />
      </p>
    </>
  )
}

const Total = ({ exer }) => {
  return (
    <>
      <p>Number of exercises {exer}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 10
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course} />
      <Content 
          p1={part1}
          p2={part2}
          p3={part3}
      />
      <Total exer={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App