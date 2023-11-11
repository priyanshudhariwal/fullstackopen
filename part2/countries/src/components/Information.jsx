const Information = ({ filteredList, numberOfResults }) => {
    console.log(filteredList)
    if(numberOfResults > 10){
        return(
            <p>Too many matches, specify another filter</p>
        )
    }
    else if(numberOfResults <= 10 && numberOfResults > 1){
        return(
            <div>
                <ul>
                    {filteredList.map((item) => <li>{item} </li>)}
                </ul>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Information