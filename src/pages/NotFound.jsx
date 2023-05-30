import '../styles/notFound.css';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const imageRef = useRef();

  useEffect(() => {
    const element = imageRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0 },
      { duration: 0.5, opacity: 1, scale: 1 }
    );
  }, []);

  return (
    <section className="not-found">
      <h1>Página não encontrada!</h1>
      <div className="image-container">
        <img
          ref={imageRef}
          src="images/notFound.jpg"
          alt="notFound"
        />
      </div>
      
    </section>
  );
}

