
import React from 'react';

export default function Work({ work }) {

  const { description, title, imageUrl, path } = work;

const handleClick = () => {
    const projectUrl = `${window.location.origin}/src/projects${path}/index.html`;
    window.open(projectUrl, '_blank');
  };

  return (
    <article className="card-work" onClick={handleClick}>
      <h1>{title}</h1>
      <img src={`/images/${imageUrl}`} alt={title} />
      <p>{description}</p>
    </article>
  );
}


