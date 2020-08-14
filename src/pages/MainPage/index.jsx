import React from 'react'

import Header from '../../components/header'
import ButtonAnimated from '../../components/buttonAnimated'

import './style.css'

const MainPage = () => {
    return(
        <div className="mainPageWrapper">
            <Header main />
            <div className='SearchBoxDiv'>
                <input 
                    type="text" 
                    placeholder='City, State, Country' 
                />
                <ButtonAnimated label={'Search'} />
            </div>
        </div>
    )
}

export default MainPage