import { useState, useEffect } from 'react'
import axios from 'axios'
import Information from './components/Information'
import Country from './components/Country'

function App() {
  
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [numberOfCountries, setNumberOfCountries] = useState(0)
  const [filteredItems, setFilteredItems] = useState([])
  const [countryData, setCountryData] = useState({})

  const allCountries = async () => {
    console.log('fetching')
    const request = await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    const countryNames = request.data.map((dat) => dat.name.common)
    setCountries(countryNames)
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

  const fetchCountryData = async (country) => {
    const request = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
    setCountryData(request.data)
  }

  return (
    <div>
      Find countries <input value={searchTerm} onChange={handleFilter} />
      <Information 
        filteredList={filteredItems}
        numberOfResults={numberOfCountries}
        basicDataFunc={fetchCountryData}
        basicData={countryData}
      />
      <Country
        info={countryData}
      />
    </div>
  )
}

export default App
