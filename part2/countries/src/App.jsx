import { useState, useEffect } from 'react'
import axios from 'axios'
import Information from './components/Information'

function App() {
  
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [numberOfCountries, setNumberOfCountries] = useState(0)
  const [filteredItems, setFilteredItems] = useState([])

  const allCountries = async () => {
    console.log('fetching')
    await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        const countryNames = response.data.map((dat) => dat.name.common)
        setCountries(countryNames)
      })
  }


  useEffect(() => {allCountries()}, [])

  const handleFilter = (e) => {
    let num = 0;
    let inputTerm = e.target.value
    setSearchTerm(inputTerm)
    countries.forEach((name) => {
      if(name.toLowerCase().includes(inputTerm.toLowerCase())){
        num++;
        setNumberOfCountries(num)
      }
    })
    const filteredCountries = countries.filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredItems(filteredCountries)
  }

  const fetchCountryData = (country) => {
    const request = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
    return request.then((response) => response.data)
  }

  return (
    <div>
      Find countries <input value={searchTerm} onChange={handleFilter} />
      <Information 
        filteredList={filteredItems}
        numberOfResults={numberOfCountries}
        basicData={fetchCountryData}
      />
    </div>
  )
}

export default App
