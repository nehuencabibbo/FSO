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

export default NumberList