import { useState, useEffect } from 'react'
import axios from 'axios'
import Information from './components/Information'

function App() {
  
  let filteredCountries = []
  const countryNames = []
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [numberOfCountries, setNumberOfCountries] = useState(0)
  const [filteredItems, setFilteredItems] = useState([])

  const allCountries = async () => {
    console.log('fetching')
    await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        response.data.forEach((dat) => {
          countryNames.push(dat.name.common)
        })
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
    filteredCountries = countries.filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredItems(filteredCountries)
  }


  return (
    <div>
      Find countries <input value={searchTerm} onChange={handleFilter} />
      <Information 
        filteredList={filteredItems}
        numberOfResults={numberOfCountries}
      />
    </div>
  )
}

export default App
