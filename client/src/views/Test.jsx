import React, { useEffect, useState } from 'react'
import { Select, Option } from "@material-tailwind/react";
import axios from 'axios'


const Test = (props) => {
  const [data, setData] = useState([])
  const [getCountry, setCountry] = useState("")
  const [getState, setState] = useState([])
  const [selectedState, setSelectedState] = useState("")

  useEffect(()=>{
    axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
    // axios.get("https://www.universal-tutorial.com/api/countries/")
    .then(response => {
        // we now run another promise to parse the HTTP response into usable JSON
        // console.log(response.data);
        setData(response.data)
    }).catch(err=>{
        console.log(err);
    });},[])

  const country = [...new Set(data.map(item=>item.country))];
  country.sort()

  const handleCountry = (e) => {
    console.log(e);
    setCountry(e)
    let states = data.filter(state=> state.country === e)
    states = [...new Set(states.map(item=>item.subcountry))];
    states.sort();
    setState(states)
    console.log(states);
    console.log('+++',getCountry);
  }

  const handleState = (e) =>{
    
  }
  console.log(getCountry);

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='mb-10'>Hello World</h1>
        <Select variant="standard" label="Country" color='blue-gray' onChange={async (v)=>{await setCountry(v);console.log("++",v,"++")}} value={getCountry} >

              <Option>Material Tailwind HTML</Option>
              {country.map(item=><Option value={item} >{item}</Option>)}
                            
        </Select>
        {/* <div>
          <label htmlFor="">Country : </label>
          <select name="" id="" onChange={(e)=>handleCountry(e)} value={getCountry}>
            {country.map(items=><option key={items} value={getCountry}>{items}</option>)}
          </select>

        </div> */}
        
        <div className='mt-5'>

          <label htmlFor="">State : </label>
          <select name="" id="" defaultValue={"Selec"}>
            <option value="" disabled>Select City</option>
            {getState.map(item=><option key={item} value={selectedState}>{item}</option>)}
          </select>
        </div>

    </div>
  )
}

export default Test