import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/specific/Home.css';
import '../../styles/specific/buttons.css'; // Importa el archivo CSS para los botones

const HomeContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h5`
  font-size: 1.5rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.h4`
  font-size: 1.2rem;
  color: #555;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AsesoriasButton = styled.button`
    background: #0AA1DD;
    cursor: pointer;
    border:  none;
    padding: 16px 32px;
    color: azure;
    font-size: 24px;
    font-weight: bold;
    position: relative;
    border-radius: 12px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    transition: background-color 0.3s ease; /* Transición suave */

  &:hover {
    background: #095BC2; /* Cambia el fondo al posicionarse */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const CarouselItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const Home = () => {
  return (
    <HomeContainer style={{ marginTop: '100px' }}>
      <img className='imagenfondo'
           src="/oip.jpeg"
           alt="imagen de fondo" 
        />
      <span>
        <Title>Decoraciones Ortiz</Title>
        <Subtitle>Distribuidor oficial</Subtitle>
        <Description>Nuestras cortinas blackout, están diseñadas para ofrecer la máxima privacidad y control de luz en cualquier lugar o espacio.</Description>
      </span>
      <AsesoriasButton>Asesorías</AsesoriasButton>
      
      <Carousel className="HomeCarousel" interval={3000} indicators={true} controls={true}>
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
            src="/cortina2.jpg"
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Segunda imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina3.jpg"
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Tercera imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina4.jpg"
            alt="Cuarta imagen"
          />
          <Carousel.Caption>
            <h3>Cuarta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItemImage
            src="/cortina5.jpg"
            alt="Quinta imagen"
          />
          <Carousel.Caption>
            <h3>Quinta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Description>Aqui los h3 para cada imagen.</Description>
      <Description>Aqui los selectores.</Description>
      <Description>Brindamos experiencias y soluciones en cualquier ambiente.</Description>
      <Description>Cortinas y persianas a medida...</Description>
      <div className="iconsContainer">
        <strong>
          <p>Buscamos ser los cortineros # 1 en servicio y atención !!!</p>
        </strong>
      </div>
    </HomeContainer>
  );
}

export default Home;
