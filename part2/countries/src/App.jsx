import { useState, useEffect } from 'react'
import axios from 'axios'
import Information from './components/Information'

function App() {
  
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [numberOfCountries, setNumberOfCountries] = useState(0)
  const [filteredItems, setFilteredItems] = useState([])
  const [countryData, setCountryData] = useState({})
  const [display, setDisplay] = useState(false)
  const [view, setViewData] = useState({})

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
    const filteredCountries = countries.filter((country) => country.toLowerCase().includes(inputTerm.toLowerCase()))
    setFilteredItems(filteredCountries)
  }

  const fetchCountryData = async (country) => {
    try{
        const request = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        setCountryData(request.data)
    }
    catch(err){
      console.log(`error ${err}`)
    }
  }

  const fetchViewData = async (country) => {
    const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
    console.log('fetching complete')
    setViewData(response.data)
    console.log(view)
  }

  const handleViewChange = (country) => {
    setDisplay(!display)
    if(display){
      console.log('fetching view')
      fetchCountryData(country)
    }
  }

  return (
    <div>
      Find countries <input value={searchTerm} onChange={handleFilter} />
      <Information 
        filteredList={filteredItems}
        numberOfResults={numberOfCountries}
        basicDataFunc={fetchCountryData}
        basicData={countryData}
        displayView={display}
        handleView={handleViewChange}
        viewData={view}
      />
    </div>
  )
}

export default App
