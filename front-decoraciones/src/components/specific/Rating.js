import React, { useState } from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-top: 1rem;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
`;

const Star = styled.span`
  font-size: 2rem;
  cursor: pointer;
  color: ${props => (props.filled ? '#FFD700' : '#ccc')};

  &:hover {
    color: #FFD700;
  }
`;

const CommentBox = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0AA1DD;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #095bc2;
  }
`;

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleStarHover = (index) => {
    setHoverRating(index);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = () => {
    // Lógica para enviar la calificación y el comentario
    alert(`Calificación: ${rating}\nComentario: ${comment}`);
  };

  return (
    <RatingContainer>
      <h2>Califica este producto</h2>
      <Stars>
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            filled={index <= (hoverRating || rating)}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarLeave}
          >
            ★
          </Star>
        ))}
      </Stars>
      <CommentBox
        rows="4"
        placeholder="Deja tu comentario"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>
    </RatingContainer>
  );
};

export default Rating;
