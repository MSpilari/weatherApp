import React from 'react'

const Information = (props) => {
    
    const allInfos = props.forecast.map(day => {
        let { Minimum, Maximum } = day.Temperature
        let { Day, Night } = day
        let { Date } = day

        let finalDate = Date.split('T')
        
        return(
            <div className='AllInfos'>
                <div className='CityDate'>
                    <p>Forecast for : {props.city[0]} - {props.city[1].toUpperCase()} - {props.city[2].toUpperCase()}</p>
                    <p>Date: {finalDate[0]}</p>
                </div>
                <div className='temperatures'>
                    <div className='MinMax'>
                        <h1>Minimum and Maximum</h1>
                        <div className='Min'>
                            <h6>Minimum</h6>
                            <p>{((Minimum.Value * 5 - 160) / 9).toFixed(0)}°C</p>
                        </div>
                        <div className='Max'>
                            <h6>Maximum</h6>
                            <p>{((Maximum.Value * 5 - 160) / 9).toFixed(0)}°C</p>
                        </div>
                    </div>
                    <div className='Day'>
                        <h1>Day</h1>
                        <p>{Day.IconPhrase}</p>
                    </div>
                    <div className='Night'>
                        <h1>Night</h1>
                        <p>{Night.IconPhrase}</p>
                    </div>
                </div>
            </div>
        )
    })
    return allInfos
    
}
    
export default Information