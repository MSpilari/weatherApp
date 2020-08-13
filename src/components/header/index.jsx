import React from "react";
import { Link } from 'react-router-dom'

import Logo from '../../assets/WtW.svg'

import './style.css'

const Header = ({main}) => {
  return (
    <nav className="Cabecalho">
      <div className='imgWrapper'> 
        <img src={Logo} alt="Logo" />
      </div>
      <div className='anchorsWrapper'>
        {main && <Link to='/'>Home</Link>}
        <a href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/">
          Linkedin
        </a>
        <a href="https://github.com/MSpilari">Github</a>
      </div>
    </nav>
  );
};

export default Header;
