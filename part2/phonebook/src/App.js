import { useState } from 'react'
import PersonForm from './components/personForm'
import Person from './components/Person'
import Find from "./components/Find"

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '11-123445678'
    },
    { 
      name: 'Bob jr',
      number: '112312312312'
    },
    { 
      name: 'Caio santos',
      number: '89783978989'
    },
    {
      name: 'Rafael bragaca',
      number: '100321321'
    }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [find, setFind] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    if(newName === '' || newNumber === ''){
      alert("Info missing")
    }else{
      const person = { 
        name: newName,
        number: newNumber
      }
      if(!(persons.some((person) => person.name === newName))){
        if(!(persons.some((person) => person.number === newNumber))){
          setPersons(persons.concat(person))
          setNewName('')
          setNewNumber('')
        }else{
          alert('Number already exists')
        }
      }else{
        alert(`${newName} already exists`)
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFindChange = (event) => {
    console.log(event.target.value)
    setFind(event.target.value)
  }

  const personsToShow = find == '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(find.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Find value={find} handleFind={handleFindChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addPerson} newName = {newName} newNumber={newNumber} handleName={handleNameChange} handleNumber={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )
}

export default App