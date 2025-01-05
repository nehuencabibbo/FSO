import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={newFilter} onChange={(event) => setNewFilter(event.target.value)}/>
      </div>
      <h2>Add new</h2>
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
        {persons
          .filter((person) => 
            person.name.includes(newFilter))
          .map((person) => 
            <li key={person.id}>{person.name} {person.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App