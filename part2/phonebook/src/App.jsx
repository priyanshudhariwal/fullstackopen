import { useEffect, useState } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    personService
      .getPersons()
      .then((initialData) => {
        setPersons(initialData)
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
    personService
      .addPerson(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
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

  const removePerson = (id) => {
    const del = persons.find((person) => person.id === id)
    if(window.confirm(`Do you wish to delete ${del.name}?`)){
      personService.remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
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
      <DisplayPersons personsToShow={personsToShow} deletePerson={removePerson} />
    </div>
  )
}

export default App