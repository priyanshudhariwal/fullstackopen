const Header = ({ courseName }) => {
  return (
    <>
      <h1>{courseName}</h1>
    </>
  )
}

const Content = ({part, ex}) => {
  return (
    <>
      <p>
        {part} {ex}
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
      <Content part={part1} ex={exercises1} />
      <Content part={part2} ex={exercises2} />
      <Content part={part3} ex={exercises3} />
      <Total exer={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App