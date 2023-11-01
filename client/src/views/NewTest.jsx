// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';


// Import Interfaces`
// import { ICountry, IState, ICity } from 'country-state-city'


import React from 'react'

const NewTest = (props) => {
    console.log(Country.getAllCountries())
    console.log(State.getAllStates())
  return (
    <div>
        
    </div>
  )
}

export default NewTest