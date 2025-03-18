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
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

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

const GalleryContainer = styled.div`
  margin-top: 100px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
  font-family: 'Open Sans', sans-serif;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageDescription = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0 0 8px 8px;
`;

const VideoContainer = styled.div`
  margin-bottom: 2rem;
`;

const VideoLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ProcessSection = styled.div`
  margin-bottom: 3rem;
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
        Aqui va el logo decortiz
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
      <GalleryContainer>
        <div>
      <SectionTitle> Galería de Productos Destacados</SectionTitle>
      <SectionDescription>Descubre algunos de nuestros productos más populares, diseñados para embellecer tus espacios.</SectionDescription>
      <ImageGrid>
        <ImageContainer>
          <Image src="path-to-image1.jpg" alt="Descripción del producto" />
          <ImageDescription>Descripción del producto o servicio</ImageDescription>
        </ImageContainer>
        {/* Repetir para más imágenes */}
      </ImageGrid>
      
      <SectionTitle>Servicios Completados</SectionTitle>
      <SectionDescription>Observa algunos de nuestros proyectos completados con éxito.</SectionDescription>
      <VideoContainer>
        <video width="100%" controls>
          <source src="path-to-video1.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <SectionDescription>Descripción del video</SectionDescription>
      </VideoContainer>
      <VideoLink href="https://www.youtube.com/watch?v=your-video-id" target="_blank">
        Ver video en YouTube
      </VideoLink>
      
      <ProcessSection>
        <SectionTitle>Proceso de Trabajo</SectionTitle>
        <SectionDescription>Conoce nuestro meticuloso proceso de trabajo desde el inicio hasta la finalización del proyecto.</SectionDescription>
        <ImageGrid>
          <ImageContainer>
            <Image src="path-to-image-step1.jpg" alt="Inicio del proyecto" />
            <ImageDescription>Inicio del proyecto</ImageDescription>
          </ImageContainer>
          <ImageContainer>
            <Image src="path-to-image-step2.jpg" alt="Progreso del proyecto" />
            <ImageDescription>Progreso del proyecto</ImageDescription>
          </ImageContainer>
          <ImageContainer>
            <Image src="path-to-image-step3.jpg" alt="Finalización del proyecto" />
            <ImageDescription>Finalización del proyecto</ImageDescription>
          </ImageContainer>
          {/* Repetir para más pasos */}
        </ImageGrid>
      </ProcessSection>
        </div>
      </GalleryContainer>    
    </HomeContainer>
  );
}

export default Home;
