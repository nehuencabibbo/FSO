import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  console.log(newName)

  const handleNewPerson = (event) => {
    event.preventDefault()

    const includesObject = (array, object) => {
      const stringifiedObject = JSON.stringify(object)
      for (let element of array) {
        if (JSON.stringify(element) === stringifiedObject) return true
      }

      return false
    }

    const newPerson = {name: newName}
    if (!includesObject(persons, newPerson)) {
      setPersons(persons.concat(newPerson))
      setNewName('')
    } else {
      window.alert(`${newName} is already added to the phonebook`)
    }
  }

  const handleNewPersonChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App