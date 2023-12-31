import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addPerson = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const remove = (id) => {
    const url = `${baseUrl}/${id}`
    const request = axios.delete(url)
}

const updatePerson = (id, updatedPerson) => {
    const url = `${baseUrl}/${id}`
    const request = axios.put(url, updatedPerson)
    return request.then(response => response.data)
}

export default { getPersons, addPerson, remove, updatePerson }