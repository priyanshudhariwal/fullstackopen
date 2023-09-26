const Header = ({ courseName }) => {
  return (
    <>
      <h1>{courseName}</h1>
    </>
  )
}

const Part = ({ prt, ex }) =>{
  return (
    <>
      <p>{prt} {ex}</p>
    </>
  )
}

const Content = ({ p1, ex1, p2, ex2, p3, ex3 }) => {
  return (
    <>
      <p>
        <Part prt={p1} ex={ex1} />
        <Part prt={p2} ex={ex2} />
        <Part prt={p3} ex={ex3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content 
          p1={part1}
          ex1={exercises1}
          p2={part2}
          ex2={exercises2}
          p3={part3}
          ex3={exercises3}
      />
      <Total exer={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App