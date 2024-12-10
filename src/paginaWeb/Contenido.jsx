import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import Aside from './Aside'
import './contenido.module.css'
import Rutas from './Rutas'
import Tarjeta from './Cards';
import Tarjeta1 from './Cards1';
import Tarjeta2 from './Cards2';
import Tarjeta4 from './Cards3';
import Card4 from './Card4';

function Contenido() {
  return (
    <>
    <Router>
    <Nav/>
    <main>
    
      <aside>
        <Aside/>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
      </aside>
        {/* <Section/> */}
        <section>
        <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/noticias" element={<MySkills/>}> 
        </Route>
        <Route path="/noticias1" element={<MySkills2/>}> 
        </Route>
        <Route path="/noticias2" element={<MySkills3/>}> 
        </Route>
        {/* <Route path="/producto/:numero" element={<Producto/>} /> */}
        <Route path="/about/domingo" element={<Domingo/>} />
        <Route path="/about/morgado" element={<Morgado/>} />
        <Route path="/noticias3" element={<MySkills4/>}> 
        </Route>
        <Route path="/defensa" element={<Defensa/>}> 
        </Route>
        <Route path="*" element={<NotFound/>} />
        </Routes>
          
        </section>
    
    </main>
    </Router>
    </>
  )
}

export default Contenido
function Home() {

  return <div>
  </div>
}

//Sólo se verá con /about en la URL
function About() {
  return <div>
      <h1>Profesor</h1>
      <Outlet/>
  </div>;
}
function MySkills() {
    return <div>
        <section>
        <article>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        </article>
        </section>
    </div>
  }
  function MySkills2() {
    return <div>
        <section>
        <article>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        <Tarjeta1/>
        </article>
        </section>
    </div>
  }

  function MySkills3() {
    return <div>
      <section>
        <article>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        <Tarjeta2/>
        </article>
        </section>

    </div>
  }

function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}

function Domingo() {
  const showFirstImage = Math.random() < 0.5;

  return (
    <div>
      <h1>Este es el profesor Domingo</h1>
      {showFirstImage ? (
        <img src="/avatar1.webp" alt="Primera imagen" style={{ width: '30%' }} />
      ) : (
        <img src="/avatar2.webp" alt="Segunda imagen" style={{ width: '30%' }} />
      )}
    </div>
  );
}


function Morgado() {
  const showFirstImage = Math.random() < 0.5;

  return (
    <div>
      <h1>Este es el profesor Morgado</h1>
      {showFirstImage ? (
        <img src="/avatar1.webp" alt="Primera imagen" style={{ width: '30%' }} />
      ) : (
        <img src="/avatar2.webp" alt="Segunda imagen" style={{ width: '30%' }} />
      )}
    </div>
  );
}

function MySkills4() {
  return <div>
    <section>
      <article>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      <Tarjeta4/>
      </article>
      </section>

  </div>
}

function Defensa() {
  return <div>
    <Card4/>
  </div>
}