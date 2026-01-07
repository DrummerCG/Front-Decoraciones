import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos //

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

const Gallery = () => {
  return (
    <div>
      <img className='imagenfondo' 
      src="/oip.jpeg" 
      alt="imagen de fondo" />
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
    </div>
  );
}

export default Gallery;
