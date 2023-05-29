import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWorks } from '../portfolio/portfolioSlice';
import Works from './Works'
import axios from 'axios';

export default function Portfolio() {


    

    let dispatch = useDispatch();

    const [error, setError] = useState();

    useEffect(() => {
      fetch("http://localhost:4002/api/data")
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(getWorks(data.portfolio));
          
        })
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

