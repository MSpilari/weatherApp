import React from 'react'
import './styles/index.css'
import { Switch, Route } from 'react-router-dom'
import Cabecalho from './Cabecalho'
import MainContent from './Main'

const Home = () => {
    return (
        <Switch>
            <Route path='/' exact >
                <div className='HomeDiv'>
                    <Cabecalho />
                    <MainContent />
                </div>
            </Route>
        </Switch>
    )
}

export default Home