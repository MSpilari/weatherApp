import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cabecalho from '../home/Cabecalho'
import SearchBox from './searchBox'


const Index = () => {
    return(
        <Switch>
            <Route path='/weatherApp'>
                <Cabecalho />
                <SearchBox />
            </Route>
        </Switch>
    )
}

export default Index

