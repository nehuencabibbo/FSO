import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const handleNewEntry = (event) => {
    event.preventDefault()

    const includesObject = (array, object) => {
      const stringifiedObject = JSON.stringify(object)
      for (let element of array) {
        if (JSON.stringify(element) === stringifiedObject) return true
      }

      return false
    }

    const newPerson = {name: newName, phone: newPhoneNumber}
    if (!includesObject(persons, newPerson)) {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhoneNumber('')
    } else {
      window.alert(`${newName} is already added to the phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewEntry}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          phone: <input value={newPhoneNumber} onChange={(event) => setNewPhoneNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name} {person.phone}</li>)}
      </ul>
    </div>
  )
}

export default App