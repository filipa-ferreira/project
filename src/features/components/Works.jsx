import React from 'react'
import { useSelector } from 'react-redux'
import Work from './Work';
import '../../styles/portfolio.css';

export default function Works() {

    const works = useSelector(state => state.portfolio.works);

    

  return (
    <section className='container-portfolio'>
      <section className='grid-portfolio'>
        {            works.map(w => <Work
                                    key={w.id}
                                    work={w}
                                    />)
        }
    </section>
    </section>
  )
}


