import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Work from './Work';
import '../../styles/portfolio.css';
import { getPortfolio } from '../portfolio/portfolioSlice';

export default function Works() {

    
    let dispatch = useDispatch();
	  const works = useSelector((state) => state.portfolio.portfolio);
    const loading = useSelector((state) => state.portfolio.loading);
    const error = useSelector((state) => state.portfolio.error);

    useEffect(() => {
      dispatch(getPortfolio());
    }, [dispatch]);
  
   
  return (
    <section className='container-portfolio'>
    <section className='grid-portfolio'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred.</p>
      ) : (
        works.map((w) => <Work key={w.id} work={w} />)
      )}
    </section>
  </section>
);
};


