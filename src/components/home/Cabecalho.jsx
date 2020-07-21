import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './styles/cabecalho.css'

const Cabecalho = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <nav className="Cabecalho">
                    <img src="/assets/Logo.png" alt="Logo"/>
                    <a href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/">Linkedin</a>
                    <a href="https://github.com/MSpilari">Github</a>
                </nav>
            </Route>
            <Route path='/weatherApp'>
                <nav className="Cabecalho" style={{width:"90%"}}>
                    <img src="/assets/Logo.png" alt="Logo"/>
                    <Link to='/'>Home</Link>
                    <a href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/">Linkedin</a>
                    <a href="https://github.com/MSpilari">Github</a>
                </nav>
            </Route>
        </Switch>
    )
}

export default Cabecalho