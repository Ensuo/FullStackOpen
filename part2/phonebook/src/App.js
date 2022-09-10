import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    
    
    const person = { 
      name: newName,
    }
    if(!(persons.some((person) => person.name == newName))){
      setPersons(persons.concat(person))
      setNewName('')
    }else{
      alert("Name already exists")
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>debug: {newName}</div>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )
}

export default App