import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/specific/Home.css';
import '../../styles/specific/buttons.css'; 
import '../../styles/specific/buttons.css';
import { BsFillBookmarksFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { SiHuggingface } from "react-icons/si";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home-container" style={{ marginTop: '100px' }}>
      <img className="imagenfondo"
           src="/oip.jpeg"
           alt="imagen de fondo" 
        />
      <span>
        <h1 className="title">Decoraciones Ortiz</h1>
        <h3 className="subtitle">Distribuidor oficial</h3>
        <p className="description">Nuestras cortinas blackout, están diseñadas para ofrecer la máxima privacidad y control de luz en cualquier lugar o espacio.</p>
      </span>
      <button className="asesorias-button">Asesorías</button>
      
      <Carousel className="HomeCarousel" interval={3000} indicators={false} controls={true} pause={false}> 
        <Carousel.Item>
          <img className="carousel-item-image"
               src="panel japones/panel-japones-08.webp"
               alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item-image"
               src="cortinas catalogo/img10.jpg"
               alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item-image"
               src="cortinas catalogo/img6.jpg"
               alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item-image"
               src="cortinas catalogo/img2.jpg"
               alt="Cuarta imagen"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item-image"
            src="Sheer elegance/sheer-elegance-01.webp"
            alt="Quinta imagen"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel className="description-carousel" interval={3000} indicators-barra={true} controls={false} pause={false}>
        <Carousel.Item>
          <h3 className="carousel-text">Cortina elegante para sala de estar</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="carousel-text">Cortina enrollable moderna</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="carousel-text">Cortina blackout para dormitorio</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="carousel-text">Cortina de diseño minimalista</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3 className="carousel-text">Cortina con estampado floral</h3>
        </Carousel.Item>
      </Carousel>

      <h5 className="descrip1">Brindamos experiencias y soluciones en cualquier ambiente.</h5>
      <h4 className="descrip2">Cortinas y persianas a medida...</h4>
      <div className="presentation-container">
        <strong>
          <div className="icon-container">
            <p className="presentation1">"Buscamos ser los cortineros #1 en servicio y atención"</p>
            <div className="icon-group" >
              <BsFillBagCheckFill className="icon" />
              <p className="icon-text">Compras Online</p>
            </div>
            <div className="icon-group ">
              <AiFillTool className="icon" />
              <p className="icon-text">Instalación y Reparación</p>
            </div>
            <div className="icon-group ">
              <BsFillBookmarksFill className="icon" />
              <p className="icon-text">Vanguardia y Elegancia</p>
            </div>
            <div className="icon-group ">
              <FaMedal className="icon" />
              <p className="icon-text">Mejor Calidad</p>
            </div>
            <div className="icon-group ">
              <FcClock className="icon" />
              <p className="icon-text">Preparación y Experiencia</p> 
              </div>
              <div className="icon-group ">
              <SiHuggingface className="icon" />
              <p className="icon-text">Atención y Servicio</p>
              </div>
            <div className="icon-group ">    
              <AiOutlineCheckSquare className="icon" />
              <p className="icon-text">Excelentes Precios</p>
              </div>
          </div>
        </strong>
       </div>
      <p className="presentation2">En Decoraciones Ortiz, nuestra misión es transformar tus espacios con cortinas y persianas de la más alta calidad,
             mientras ofrecemos un servicio excepcional y atención personalizada.
              Entendemos que cada hogar y negocio tiene sus propias necesidades y estilo,
               por lo que trabajamos incansablemente para asegurar que encuentres la solución perfecta.</p>
      <div className="gallery-container">
        <div className="gallery-content">
          <strong>
            <h1 className="gallery-title">Galería de Productos y Servicios</h1>
            <h1 className="gallery-subtitle">Explora nuestra amplia gama de productos y servicios</h1>
          </strong>
          <div className="image-grid">
            <div className="image-container">
              <img className="image-gallery" src="Enrollables/enrollables04.webp"/>
              <div className="image-description">Cortina Enrollable Tipo Screen en Tono Claro, Ideal para Controlar la Luz y Mantener la Privacidad con un Diseño Moderno y Minimalista.</div>
            </div>
            </div> 
                
                  <h2 className="section-title">Servicios Completados</h2>
                  <p className="section-description">Observa algunos de nuestros proyectos completados con éxito.</p>
                  <div className="video-container">
                  <video width="80%" controls>
                    <source src="Video/video3.mp4" type="video/mp4" />
                  </video>
                  <p className="section-description">En el anterior video se visualiza unas cortinas tipo panel japones con diseño y domotizada.  </p>
                  </div>
                  <div className="process-section">
                  <h2 className="section-title">Proceso de Trabajo</h2>
                  <p className="section-description">Conoce nuestro meticuloso proceso de trabajo desde el inicio hasta la finalización del proyecto.</p>
                  <div className="image-grid">
                    <div className="image-container">
                    <img className="image" src="panel japones/panel-japones-02.webp" alt="Inicio del proyecto" />
                    <div className="image-description">Inicio del proyecto</div>
                    </div>
                    <div className="image-container">
                    <img className="image" src="panel japones/panel-japones-05.webp" alt="Progreso del proyecto" />
                    <div className="image-description">Progreso del proyecto</div>
                    </div>
                    <div className="image-container">
                    <img className="image" src="Sheer elegance/sheer-elegance-07.webp" alt="Finalización del proyecto" />
                    <div className="image-description">Finalización del proyecto</div>
                    </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Home;
