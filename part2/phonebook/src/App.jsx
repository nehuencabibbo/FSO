import { useState } from 'react'

const Title = ({text}) => (<h1>{text}</h1>)

const SubTitle = ({text}) => (<h2>{text}</h2>)

const Filter = ({filterValue, handleFilterChange}) => {
  return (
    <div>
      Only show numbers that contain: <input value={filterValue} onChange={handleFilterChange}/>
    </div>
  )
}

const FormInputField = ({label, value, onChange}) => (
  <div>
    <label htmlFor={label}>{label}: </label>
    <input 
      id={label} 
      value={value} 
      onChange={onChange}
      autoComplete="off"/>
  </div>
)

const Button = ({label}) => (
  <div>
    <button name={label + "Button"} type="submit">
      {label}
    </button>
  </div>
)

const ContactData = ({addPerson, newName, newNumber, handleNewName, handleNewNumber}) => (
    <form id="contactForm" onSubmit={addPerson}>
      <FormInputField 
        label="name" 
        value={newName} 
        onChange={handleNewName}/>

      <FormInputField 
        label="number" 
        value={newNumber} 
        onChange={handleNewNumber}/>

      <Button
        label="add"/>
    </form>
)

const Person = ({name, number}) => (
  <li>
    {name} {number}
  </li>
)

const NumberList = ({persons, filter}) => {
  const personsFiltered = persons
    .filter(person => 
      person.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    )

  return (
    <ul style={{listStyleType: "none", padding: "0"}}>
      {personsFiltered
        .map(person => 
          <Person 
            key={person.name}
            name={person.name} 
            number={person.number}
          />
      )}      
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: "15-2859-2331"}
  ]) 
  const [newName, setNewName] = useState('Martin Fowler')
  const [newNumber, setNewNumber] = useState('15-4112-3807')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {name: newName, number: newNumber}

    const isPersonInPhonebook = (persons, newPerson) => {
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name == newPerson.name) return true
      }

      return false
    }

    if (!isPersonInPhonebook(persons, newPerson)) {
       setPersons(persons.concat(newPerson))
    } else {
      window.alert(`${newPerson.name} is already in the phonebook`)
    }
  }

  return (
    <div>
      <Title text={"Phonebook"}/>

      <SubTitle text={"Filter"}/>
      <Filter 
        filterValue={filter} 
        handleFilterChange={
          (event) => setFilter(event.target.value)}
        />
      
      <SubTitle text={"Contact data"}/>
      <ContactData 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber}
        handleNewName={
          (event) => {
            setNewName(event.target.value)
        }}
        handleNewNumber={
          (event) => {
            setNewNumber(event.target.value)
          }
        }/>

      <SubTitle text={"Numbers"}/>
      <NumberList persons={persons} filter={filter}/>
    </div>
  )
}

export default App