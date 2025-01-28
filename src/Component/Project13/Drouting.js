import React, {useEffect, useState } from "react";

let allState = [
{
    "state_name": "Alabama",
    "country_phone_code": 93

},
{
    "state_name": "Alaska",
    "country_phone_code": 93

},
{
    "state_name": "Arizona",
    "country_phone_code": 355

},
{
    "state_name": "Arkansas",
    "country_phone_code": 355

},
{
    "state_name": "Byram",
    "country_phone_code": 263

},
{
  "state_name": "Wyoming",
  "country_phone_code": 263

}
]

export default function Countries() {
  const [countries, setCountries] = useState([
    {
      "country_name": "Afghanistan",
      "country_short_name": "AF",
      "country_phone_code": 93
    },
    {
      "country_name": "Albania",
      "country_short_name": "AL",
      "country_phone_code": 355
    },
    {
      "country_name": "Zimbabwe",
      "country_short_name": "ZW",
      "country_phone_code": 263
    }
  ]);

  let [selectCountry,SetSelectCountry] = useState('');


  const [states, setStates] = useState([]);


   const getCountryName = (event)=>{
      console.log(event.target.value)
      let countryCode = event.target.value;
      SetSelectCountry(countryCode);

      let data  = allState.filter((states)=>{
        console.log(states.country_phone_code,countryCode)
         if(states.country_phone_code == countryCode) {
            return states;
         }
        
     })

     console.log(data)
    setStates(data);


   }

   const getStateName = (event)=>{
    console.log(event.target.value)
   
 }
  return (
    <>
       <div className="App">
      <select name="cars" id="cars" onChange={getCountryName}>
      <option value={""}>{"Select Country"}</option>

      {countries.map((data)=>(

        <option value={data.country_phone_code}>{data.country_name}</option>

      ))
      }
      </select>
    </div>
    {selectCountry !== '' && 
    <div className="App">
      <select name="cars" id="cars" onChange={getStateName}>
      <option value={""}>{"Select State"}</option>

      { states.map((data)=>(

        <option value={data.state_name}>{data.state_name}</option>

      ))
      }
      </select>
    </div>
}   
    </>
 
  );
}
