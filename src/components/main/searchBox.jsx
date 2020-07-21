import React, { useState } from 'react'
import SearchResults from './searchResults'

import dotenv from 'dotenv'
import './styles/searchBox.css'

dotenv.config()

const SearchBox = () => {
    const [ address, setAddress ] = useState(() => '')
    const [ info, setInfo ] = useState(() => '')
    
    const APIKEY = process.env.REACT_APP_API_KEY

    function UserWriting(event){
        setInfo('')
        setAddress(event.target.value)
    }
    
    function TypeError() {
        setAddress('')
        alert("Can't find that address ! Please try again.")
    }
    
    function UserClickButton(){
        let datas = address.split(',').map(data => data.toLowerCase().trim())
        setAddress(datas)
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/${datas[2]}/${datas[1]}/search?apikey=${APIKEY}&q=${datas[0]}`, 
            {
                mode:'no-cors', 

            })
            .then(result => result.json())
            .then(final => final[0] === undefined ?  TypeError() : CityDetails(final[0].Key)
        )
    }


    function CityDetails(key){
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${APIKEY}`, {mode:'no-cors'})
            .then(response => response.json())
            .then(data => setInfo(data.DailyForecasts))
    }

    return(
        <React.Fragment>
            <div className='SearchBoxDiv'>
                <input 
                    type="text" 
                    placeholder='City, State, Country' 
                    value={address}
                    onChange={(e) => UserWriting(e)}
                />
                <button onClick={() => UserClickButton()}>Search</button>
            </div>
            <SearchResults info={ info } address={ address } />
        </React.Fragment>
    )
}

export default SearchBox