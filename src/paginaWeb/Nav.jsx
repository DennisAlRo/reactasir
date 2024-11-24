import React from 'react'
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


function Nav() {
  return (
    <nav>
        <Link to="/"><FaHome />Inicio</Link> - 
        <Link to="/noticias"> GEN 1</Link> - 
        <Link to="/noticias1"> GEN 2</Link> - 
        <Link to="/noticias2"> GEN 3</Link> - 
        <Link to="/about/domingo"><IoIosContact />Domingo</Link> - 
        <Link to="/about/morgado"><IoIosContact />Morgado</Link> - 
        <Link to="/noticias3"> DIGIMON</Link> - 


    </nav>
  )
}

export default Nav