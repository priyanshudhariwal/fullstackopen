import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const countryNames = []
  const [searchTerm, setSearchTerm] = useState('')

  const allCountries = () => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        console.log(response.data)
        console.log(response.data[0].name.common)
        response.data.forEach((dat) => {
          countryNames.concat(dat.name.common)
        })
      })
      console.log(countryNames)
  }

  useEffect(allCountries, [])

  return (
    <div>
      Find countries <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

export default App
