import personService from "../services/person"

const Person = ({id, name, number, onDelete}) => (
    <li>
      {name} {number} 
      <button
        onClick={() => onDelete(name, id)}>
        delete
      </button>
    </li>
)
  
const NumberList = ({persons, filter, setPersons}) => {
    const personsFiltered = persons
        .filter(person => 
            person.name
                .toLowerCase()
                .includes(filter.toLowerCase())
        )

    const onDelete = (name, id) => {
        if (confirm(`Delete ${name}?`)) {
            personService
                .remove(id)
                .then(removedPerson =>
                    setPersons(
                        persons
                            .filter(person => 
                                removedPerson.id != person.id)
                    )  
                )
        }
    } 

    return (
        <ul style={{listStyleType: "none", padding: "0"}}>
            {personsFiltered
                .map(person =>
                    <Person 
                        key={person.id}
                        name={person.name} 
                        number={person.number}
                        id={person.id}
                        onDelete={onDelete}
                    />
                )
            }   
        </ul>
    )
}

export default NumberList