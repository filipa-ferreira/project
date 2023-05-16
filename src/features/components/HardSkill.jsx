import React from 'react';

export default function HardSkill({ title, imageUrl }) {
    
  return (
  
    <article>
      <h3 className='skill-title skill-title-hard'>{title}</h3>
      <img className='skills hard-skills' src={`/images/${imageUrl}`} alt={title} />
    </article>
  );
}

