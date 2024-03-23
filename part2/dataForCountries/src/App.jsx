import { useEffect, useState } from 'react'

import './styles.css'

import FindCountryInput from './components/FindCountryInput'
import CountryInformation from './components/CountryInformation'
import countryService from './services/country'

const Title = ({text}) => (<h1>{text}</h1>)

const Loading = () => (<p>Retrieving country data, please wait</p>)

function App() {
  const [countryToFind, setCountryToFind] = useState('')
  const [countriesThatMatch, setAmountOfCountriesThatMatch] = useState([])
  let [allCountryData, setAllCountryData] = useState(null)

  //1 - Fetch all data on first render (FIRST JUST ASSUME EVERYTHING WORKS, LATER FORCE IT TO WORK)
  //2 - Every time the variable countryToFind changes, data has to be procesed
  //3 - After data is processed, corresponding data should be shown on screen based on criteria prev-
  //iously defined
  console.log("[DEBUG] App component was rerendered")
  useEffect(() => {
    countryService
      .getAllCountries()
      .then(response => {
        console.log("[EFFECT] Data was correctly fetched")
        setAllCountryData(response)
      })
      .catch(error => {
        console.log("[EFFECT] Couldn't fetch all data from the server")
        console.log(error)
      })
  }, [])

  useEffect(() => {
    console.log("[EFFECT] effect of country input was changed activated")
    let countryToFindClean = countryToFind.trim().toLowerCase()
  
    console.log("[EFFECT] pais a encontrar", countryToFindClean)
    if (allCountryData != null) {
      //In order not to do an expensive operation for nothing
      if (countryToFindClean == "") {
        setAmountOfCountriesThatMatch([])
        return
      }
      let countryDataThatMatchesQuery = allCountryData
        .filter(
          countryData => {
            let countryNameClean = countryData.name.common.trim().toLowerCase()
          
            return countryNameClean.includes(countryToFindClean)
          })

      console.log("[EFFECT] Found countryDataThatMatchesQuery")
      setAmountOfCountriesThatMatch(countryDataThatMatchesQuery)
    }
  }, [countryToFind, allCountryData])

  return (
    <div>
      <Title text="Country finder"/>
      <FindCountryInput 
        label="Find Country"
        onChange={(event) => setCountryToFind(event.target.value)}
      />

      {
        (allCountryData == null) ?
        <Loading/> :
        <CountryInformation countriesThatMatch={countriesThatMatch}/>
      }
      
    </div>
  )
}

export default App
