const Country = ({ info, infoFunc, name }) => {
    infoFunc(name)
    console.log(info)
    return (
        <>
            <h1>{info.name.common}</h1>
            <br/>
            <br/>
            <p>capital {info.capital.map((city) => city )}</p>
            <p>area {info.area} </p>
            <br/>
            <br/>
            <p><strong>languages:</strong></p>
            <ul>
                <li></li>
            </ul>
            <img src="{info.flags.svg}" />
        </>
    )
}

export default Country