import { useEffect, useState } from 'react';
import PersonForm from './components/personForm';
import Person from './components/Person';
import Search from "./components/Find";
import phoneService from './services/phoneService';

const App = () => {
  const url = "http://localhost:3001/persons";

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  useEffect(() => { //Get all persons that are in the backend
    phoneService
      .getAll()
      .then(response => {
          setPersons(response.data);
      });
  },[]);

  const addPerson = (event) =>{ //Add person to backend and persons array
    event.preventDefault();
    if(newName === '' || newNumber === ''){ //Check if any info is missing
      alert("Info missing");
    }else{
      const person = {  //Create a new person
        name: newName,
        number: newNumber
      };

      if(!(persons.some((person) => person.name === newName))){ //checking if the current name is already present in persons array
        if(!(persons.some((person) => person.number === newNumber))){ //checking if the current number already exists
          setPersons(persons.concat(person));
          phoneService //putting in backend
            .create(person)
            .then(response => {
              console.log(response)
              window.location.reload();
            });
          setNewName('');
          setNewNumber('');
        }else{
          alert('Number already exists');
        }
      }else{
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const temp = persons.find((person) => person.name === newName);
          temp.number = newNumber;
          phoneService
            .update(temp.id , temp)
            .then(response => {
              console.log(response)
              window.location.reload();
            });
          setNewName('');
          setNewNumber('');
        }
      }
    }
  };

  const deletePerson = (p) => { 
    if(window.confirm(`Delete ${p.name}`)){
      phoneService
          .remove(persons[p.id - 1].id) //Id representado no arquivo json
          .then(result => {
              console.log(result);
              window.location.reload();
          });
    }
  }

  const personsToShow = search === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={search} handleSearch={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addPerson} newName = {newName} newNumber={newNumber} handleName={handleNameChange} handleNumber={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person,index) =>
          <Person key={person.name} id={index+1} name={person.name} number = {person.number} handleClick = {deletePerson}/>
        )}
      </ul>
    </div>
  );
}

export default App