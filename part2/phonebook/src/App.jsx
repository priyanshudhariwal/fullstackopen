import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then((response) => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
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
      <Filter filter={filter} handleFilter={handleFilter}/>
      <PersonForm 
        handleSubmit={addName} 
        handleNameChange={handleChange} 
        handleNumChange={handleNumChange} 
        nameValue={newName} 
        numValue={newNumber} 
      />
      <DisplayPersons personsToShow={personsToShow} />
    </div>
  )
}

export default App