
import React from 'react';

export default function Work({ work }) {

  const { description, title, imageUrl, path } = work;

  const handleClick = () => {
    window.open(path, '_blank');
  };


  return (
    <article className="card-work">
      <h1>{title}</h1>
      <img src={`/images/${imageUrl}`} alt={title} onClick={handleClick} />
      <p>{description}</p>
    </article>
  );
}


