import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
        number: newNumber,
        id: persons.length + 1
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

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const personsToShow = (filter === null) ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter <input value={filter} onChange={handleFilter}/>
      </div>
      <form onSubmit={addName}>
        <div>
          <h1>Add New</h1>
          <div>name: <input value={newName} onChange={handleChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <p key={person.id}> {person.name} {person.number}</p>)}
    </div>
  )
}

export default App