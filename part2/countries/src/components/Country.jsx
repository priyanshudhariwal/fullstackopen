const Country = ({ info }) => {
    if(Object.keys(info).length === 0){
        return null
    }
    return (
        <>
            <h1>{info.name.common}</h1>
            <br/>
            <p>capital {info.capital.map((city) => city )}</p>
            <p>area {info.area} </p>
            <br/>
            <p><strong>languages:</strong></p>
            <ul>
                <li></li>
            </ul>
            <img src={info.flags.png} />
        </>
    )
}

export default Country