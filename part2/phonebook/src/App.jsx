import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import ContactData from './components/ContactData'
import NumberList from './components/NumberList'
import axios from 'axios'

const Title = ({text}) => (<h1>{text}</h1>)

const SubTitle = ({text}) => (<h2>{text}</h2>)

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('Martin Fowler')
  const [newNumber, setNewNumber] = useState('15-4112-3807')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('RESPUESTA', response.data)
        setPersons(response.data)
      })
  }, [])

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