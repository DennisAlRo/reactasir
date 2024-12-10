import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; import noticias from "./noticias.json";



function Card4() {
  return (<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}> {noticias.map((noticia, index) => (<Card key={index} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={noticia.imagen} alt={`Imagen de ${noticia.titulo}`} /> <Card.Body>
      <Card.Title>{noticia.titulo}</Card.Title> <Card.Text>{noticia.texto}</Card.Text>
      <Button variant="primary">Quieres saber mas?</Button> </Card.Body> </Card>))} </div>);
}
export default Card4;