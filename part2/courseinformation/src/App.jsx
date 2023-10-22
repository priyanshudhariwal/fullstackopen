const Header = ({ courseTitle }) => {
  return <h1>{courseTitle}</h1>
}

const Total = ({ noEx }) => {
  let sum = 0;
  noEx.forEach((ex) => {
    sum = sum+ex
  })
  return <p><b>Number of exercises {sum}</b></p>
}

const Part = ({ cont, ex }) => {
  return (
    <p>
      {cont} {ex}
    </p>
  )
}

const Content = ({ contInfo }) => {
  return (
    <div>
      {contInfo.map((part) => {
        return <Part key={part.id} cont={part.name} ex={part.exercises} />
      })}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header courseTitle={course.name} />
      <Content contInfo={course.parts}/>
      <Total noEx={course.parts.map(part => part.exercises)} />
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App