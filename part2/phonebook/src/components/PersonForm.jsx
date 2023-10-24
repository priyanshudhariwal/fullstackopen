const PersonForm = ({ handleSubmit, handleNameChange, handleNumChange, nameValue, numValue}) => {
    return (
        <>
        <h1>Add New</h1>
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={nameValue} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={numValue} onChange={handleNumChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm