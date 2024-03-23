const NoMatches = () => {
    return <p>No matches for the specified filter</p>
}

const TooManyMatches = () => {
    return <p>Too many matches, specify another filter</p>
}

// const Button = () => {
//     return (
//       <button onClick={undefined}>
//         show
//       </button>
//     )
//   }


const CountryNameList = ({countriesThatMatch}) => {
    return (
        <ul style={{listStyleType: "none", padding: 0}}>
            {countriesThatMatch.map(countryData => 
                <li key={countryData.name.common}>
                    {countryData.name.common}
                </li>)}
        </ul>
    )
}

const SingleCountryFullInfo = ({countryThatMatches}) => {
    countryThatMatches = countryThatMatches[0]
    
    return (
        <div>
            <h2>{countryThatMatches.name.common}</h2>
            <p>Capital: {countryThatMatches.capital} </p>
            <p>Area: {countryThatMatches.area} </p>

            <h3>Lenguages</h3>
            <ul>
                {Object
                    .values(countryThatMatches.languages)
                    .map(language => <li key={language}>{language}</li>)
                }
            </ul>
            
            <img 
                src={countryThatMatches.flags.png}
                alt={countryThatMatches.flags.alt}
            />   
        </div>
    )
}

const CountryInformation = ({countriesThatMatch}) => {
    if (countriesThatMatch.length == 0) return <NoMatches/>

    if (countriesThatMatch.length > 10) return <TooManyMatches/>
    
    if (countriesThatMatch.length > 1) {
      return <CountryNameList 
        countriesThatMatch={countriesThatMatch}/>
    } 

    return (<SingleCountryFullInfo 
        countryThatMatches={countriesThatMatch}/>)
  }

export default CountryInformation