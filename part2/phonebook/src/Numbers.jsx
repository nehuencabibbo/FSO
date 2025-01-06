const Numbers = ({persons, filterCriteria}) => (
    <ul>
        {persons
            .filter((person) => 
                person.name.includes(filterCriteria))
            .map((person) => 
                <li key={person.id}>{person.name} {person.phone}</li>)
        }
    </ul>
)

export default Numbers