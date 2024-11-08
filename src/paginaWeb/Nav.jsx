import React from 'react'
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";


function Nav() {
  return (
    <nav>
        <Link to="/"><FaHome />Inicio</Link> - 
        <Link to="/noticias"><BsFillTelephoneFill />
        Noticias</Link> - 
        <Link to="/noticias/jefatura"> Noticias Jefatura - </Link>
        <Link to="/noticias/informatica"> Departamento Informática - </Link>
        <Link to="/about"><IoIosContact />Contacto</Link> - 
    </nav>
  )
}

export default Nav