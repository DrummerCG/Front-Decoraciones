import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/specific/Home.css';

const Home = () => {
  return (
    <div className="HomeContainer">
      <h1>Decoraciones Ortiz</h1>
      <h5>Distribuidor oficial</h5>
      <p>Nuestras cortinas blackout, están diseñadas para ofrecer la máxima privacidad y control de luz en cualquier lugar o espacio.</p>
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
            src="/cortina3.jpg"
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Segunda imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
            src="/cortina1.jpg"
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Tercera imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
            src="/cortina2.jpg"
            alt="Cuarta imagen"
          />
          <Carousel.Caption>
            <h3>Cuarta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='CarouselItemImage'
            src="/cortina1.jpg"
            alt="Quinta imagen"
          />
          <Carousel.Caption>
            <h3>Quinta imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;