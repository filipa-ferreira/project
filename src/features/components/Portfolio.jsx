import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWorks } from '../portfolio/portfolioSlice';
import Works from './Works'

export default function Portfolio() {

    let dispatch = useDispatch();

    const [error, setError] = useState();

    useEffect(()=> {
        fetch('http://localhost:3000/portfolio')
        .then(resp=> resp.json())
        .then(data => dispatch(getWorks(data)))
        .catch((error) => {
            console.log("Ocorreu um erro:", error);
            setError("Ocorreu um erro. Tente novamente mais tarde.");
          });
      }, []);

          useEffect(()=> {
        fetch('http://localhost:3000/portfolio')
        .then(resp=> resp.json())
        .then(data => dispatch(getWorks(data)))
        .catch((error) => {
            console.log("Ocorreu um erro:", error);
            setError("Ocorreu um erro. Tente novamente mais tarde.");
          });
      }, []);

  return (
    <section>
        <Works/>
    </section>
  )
}

