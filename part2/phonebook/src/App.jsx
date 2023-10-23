import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (e) => {
    e.preventDefault()

    let exists = false

    persons.forEach(person => {
      if(person.name === newName )
        exists = true;
    })

    if(exists){
      alert(`${newName} already exists in the phonebook`)
    }

    else {
      e.preventDefault()
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleChange = (evt) => {
    setNewName(evt.target.value)
  }

  const handleNumChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <div>name: <input value={newName} onChange={handleChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App