import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"25%"}}>
      <Carousel.Item>
        <img width="600px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Alcazaba_de_Almer%C3%ADa.jpg/640px-Alcazaba_de_Almer%C3%ADa.jpg" alt="Alcazaba de Almería"/>
        <Carousel.Caption>
          <h3>Almeria</h3>
          <p>Almería es una ciudad y municipio español, capital de la provincia homónima, en la comunidad autónoma de Andalucía.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://multimedia.andalucia.org/media/C1DF41C3E6EF456A8B4A9B4845C32593/img/7B2A371526454055A71AC38C335E1834/16-20_Puente_Romano_y_Mezquita_de_Cordoba_Cordoba.jpg?responsive" alt="Santuario del Saliente"/>
        <Carousel.Caption>
          <h3>Cordoba</h3>
          <p>Córdoba es una ciudad y municipio español en Andalucía, capital de la provincia homónima, situada en una depresión a orillas del Guadalquivir y al pie de Sierra Morena</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Toits_Guadalquivir_ponts_S%C3%A9ville_Espagne.jpg/330px-Toits_Guadalquivir_ponts_S%C3%A9ville_Espagne.jpg" alt="Alhambra" />
        <Carousel.Caption>
          <h3>Sevilla</h3>
          <p>
          Sevilla es un municipio y una ciudad de España, capital de la provincia homónima y de Andalucía.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/C%C3%A1diz%2C_harbour.jpg/330px-C%C3%A1diz%2C_harbour.jpg" />
        <Carousel.Caption>
          <h3>Cadiz</h3>
          <p>
          Cádiz es una ciudad y municipio español, capital de la provincia homónima, en la comunidad autónoma de Andalucía.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://res.cloudinary.com/lastminute-contenthub/s--XXALNck9--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/Spain/Jaen/shutterstock_559911469" />
        <Carousel.Caption>
          <h3>Jaen</h3>
          <p>
          Jaén es una ciudad y municipio español, capital de la provincia homónima, en la comunidad autónoma de Andalucía.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/malaga-52886652-istock.jpg" />
        <Carousel.Caption>
          <h3>Malaga</h3>
          <p>
          Málaga es una ciudad y municipio español, capital de la provincia homónima, situada en la comunidad autónoma de Andalucía.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg" />
        <Carousel.Caption>
          <h3>Granada</h3>
          <p>
          Granada es una ciudad y municipio español, capital de la provincia homónima, en la comunidad autónoma de Andalucía
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;