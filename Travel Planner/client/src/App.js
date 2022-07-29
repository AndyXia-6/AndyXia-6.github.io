import React, { useEffect, useState} from 'react'
import Select from 'react-select'
import axios from 'axios'

function App() {
  let options = undefined;
  //weather api
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={}'
  
  // get location from api
  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    }
    )
  }

  //set backend data
  const [backendData, setBackendData] = useState( [{}])

  //Location Data and setdata
  const [data, setData] = useState({})

  //location and set location
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then (
          data => {
            setBackendData(data)
           // console.log(data);
            options=data.cities;
            console.log(options);
          }   
    )
  }, [options])
  console.log(options);
 /* const options = [
    { value: 'Toronto', label: 'Toronto' },
    { value: 'London', label: 'London' },
    { value: 'New York', label: 'New York' }
  ]
*/
 
  


  return (
<div>
   <select>
          {(typeof backendData.cities === 'undefined') ?(
            <p>Loading...</p>
          ): (
 
           backendData.cities.map((cities, i) => (
            
            <option key={i} value={cities.name}>{cities.name}</option>
         

            ))
       
         
          )}
      
    </select>
     
      
    </div>
  
  )
}

export default App
