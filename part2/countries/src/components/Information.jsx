import Country from "./Country"

const Information = ({ filteredList, numberOfResults, basicData, basicDataFunc }) => {

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
                    {filteredList.map((item) => <li>{item} </li>)}
                </ul>
            </div>
        )
    }
    else if(numberOfResults === 1){
        return(
            <div>
                <Country
                    infoFunc={basicDataFunc}
                    info={basicData}
                    name={filteredList[0]}
                />
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Information