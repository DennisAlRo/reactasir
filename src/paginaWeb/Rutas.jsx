import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Tarjeta from "./Cards";
import Nav from "./Nav";


export default function Rutas() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/nombre" element={<MySkills/>} />
        <Route path="/nombre1" element={<MySkills2/>} />
        <Route path="/nombre2" element={<MySkills3/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/nombre2" element={<MySkills4/>} />

      </Routes>
    </Router>
  );
}

function Navbar() {
  // visible en cada página
  return <div>navbar</div>;
}
//Sólo se verá al principio con /
function Home() {
  return <div>home</div>;
}

//Sólo se verá con /about en la URL
function About() {
  return <div>about</div>;
}
function MySkills() {
    return <Tarjeta/>
  }
  function MySkills2() {
    return <Tarjeta/>
  }

  function MySkills3() {
    return <Tarjeta/>
  }

function Producto() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}