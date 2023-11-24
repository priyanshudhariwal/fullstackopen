const Country = ({ info }) => {
    if(Object.keys(info).length === 0){
        return null
    }
    const languages = Object.keys(info.languages)
    return (
        <>
            <h1>{info.name.common}</h1>
            <br/>
            <p>capital {info.capital.map((city) => city )}</p>
            <p>area {info.area} </p>
            <br/>
            <p><strong>languages:</strong></p>
            <ul>
                {languages.map((lang) => <li>{info.languages[lang]}</li>)}
            </ul>
            <img src={info.flags.png} />
        </>
    )
}

export default Country