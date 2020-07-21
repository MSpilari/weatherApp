import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/main.css'


const Main = () => {
    const [climate, setClimate] = useState(() => 'Winter')

    function ChangeClimate(e){
        if(e.target.value === 'Winter'){
            document.querySelector('#climate').style.color = 'blue'
            setClimate(e.target.value)
        }else{
            document.querySelector('#climate').style.color = 'orange'
            setClimate(e.target.value)
        }
    }

    return (
    <div className='FirstMainDiv'>
        <div className='TextsDiv'>
            <label htmlFor="title">Open Season/<label id='climate' style={{color:'blue'}}>{climate}</label></label>
            <p>What's</p>
            <p>the</p>
            <p>Weather ?</p>
            <Link to='/weatherApp'>Discover</Link>
            <form>
                <input type='radio' name='weather' value='Winter' onClick={(event) => ChangeClimate(event)} />
                <label htmlFor="Winter">Winter</label>
                <input type='radio' name='weather' value='Spring' onClick={(event) => ChangeClimate(event)}/>
                <label htmlFor="Spring">Spring</label>
            </form>
        </div>
        <div className='HomePicDiv'>
            <img src="/assets/HomePic.png" alt="HomePic"/>
        </div>
    </div>
    )
}

export default Main