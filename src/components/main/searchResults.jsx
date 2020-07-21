import React from 'react'
import Information from './information'
import NoSearch from './noSearch'
import './styles/searchResults.css'

const SearchResults = (props) => {
    if(props.info === '' || props.address === ''){
        return(
            <NoSearch />
        )
    }
    else{
        return <Information 
                city={props.address}
                forecast={props.info}
        />
    }
}

export default SearchResults