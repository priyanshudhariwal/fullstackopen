import Country from "./Country"

const Information = ({ filteredList, numberOfResults, basicData, basicDataFunc, displayView, handleView }) => {

    const label = displayView ? 'hide' : 'show'
    const listStyles = {
        listStyleType: 'none'
    }

    if(numberOfResults > 10){
        return(
            <p>Too many matches, specify another filter</p>
        )
    }
    else if(numberOfResults <= 10 && numberOfResults > 1){
        return(
            <div>
                <ul style={listStyles}>
                    {filteredList.map((item) => {
                        return (
                            <li>
                                {item} <button onClick={() => handleView(item)}>{label}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else if(numberOfResults === 1 && filteredList.length !== 0){
        basicDataFunc(filteredList[0])
        return(
            <Country
                info={basicData}
            />
        )
    }
    return (
        <div>
            No matches found
        </div>
    )
}

export default Information