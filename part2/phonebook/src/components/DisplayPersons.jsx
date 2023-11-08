const DisplayPersons = ({ deletePerson,personsToShow }) => {

    return (
        <div>
            <h2>Numbers</h2>
            {personsToShow.map(person => {
               return (
               <p key={person.id}> {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></p>
               )
            })}
        </div>
    )
}

export default DisplayPersons