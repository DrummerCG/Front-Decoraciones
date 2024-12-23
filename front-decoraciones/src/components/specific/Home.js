import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/specific/Home.css';

const Home = () => {
  return (
    <div className="HomeContainer">
      <img className='imagenfondo'
           src="/oip.jpeg"
           alt="imagen de fondo" />
      <h1 className="Empresa">Decoraciones Ortiz</h1>
      <h5 className="DistribuidorO">Distribuidor oficial</h5>
      <h6 className="Descrip">Nuestras cortinas blackout, están diseñadas para ofrecer la máxima privacidad y control de luz en cualquier lugar o espacio.</h6>
      <button className="Button">Asesorías</button>
      <Carousel className="HomeCarousel" interval={3000} indicators={true} controls={true}>
        <Carousel.Item>
          <img className='CarouselItemImage'
               src="/cortina1.jpg"
               alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Primera imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
               src="/cortina2.jpg"
               alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Segunda imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
               src="/cortina3.jpg"
               alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Tercera imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
               src="/cortina4.jpg"
               alt="Cuarta imagen"
          />
          <Carousel.Caption>
            <h3>Cuarta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
               src="/cortina5.jpg"
               alt="Quinta imagen"
          />
          <Carousel.Caption>
            <h3>Quinta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h6 className="Descrip">Brindamos experiencias y soluciones en cualquier ambiente.</h6>
    </div>
  );
}

export default Home;