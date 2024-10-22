import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
  background-color: #FF980E;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #e68900;
  }
`;

const HomeContainer = styled.div`
  margin-bottom: 5rem; /* Más espacio extra para separarlo del footer */
`;

const CarouselItemImage = styled.img`
  height: 300px; /* Ajustamos a un tamaño más adecuado */
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
`;

const HomeCarousel = styled(Carousel)`
  .carousel-indicators li {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #0E76FF; /* Azul por defecto */
  }

  .carousel-indicators .active {
    background-color: #FF980E; /* Naranja para el indicador activo */
  }

  .carousel-indicators li:nth-child(odd) {
    background-color: #0E76FF; /* Azul para indicadores impares */
  }

  .carousel-indicators li:nth-child(even) {
    background-color: #FF980E; /* Naranja para indicadores pares */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Decoraciones Ortiz</h1>
      <h5>Distribuidor oficial</h5>
      <p>Nuestras cortinas blackout, están diseñadas para ofrecer la máxima privacidad y control de luz en cualquier lugar o espacio.</p>
      <Button>Asesorías</Button>
      <HomeCarousel interval={3000} indicators={true} controls={true}>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina1.jpg"
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Primera imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina1.jpg"
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Segunda imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina1.jpg"
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Tercera imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina1.jpg"
            alt="Cuarta imagen"
          />
          <Carousel.Caption>
            <h3>Cuarta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina1.jpg"
            alt="Quinta imagen"
          />
          <Carousel.Caption>
            <h3>Quinta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </HomeCarousel>
    </HomeContainer>
  );
}

export default Home;