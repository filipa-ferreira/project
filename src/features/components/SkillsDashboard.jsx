import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function SkillsDasboard() {

  let dispatch = useDispatch();

  useEffect(()=>{
    fetch('http://localhost:3000/skills')
    .then(resp => resp.json())
    .then(data => dispatch(getSklills(data)))
    .catch(error => console.log('ocorreu um erro'));
  }, []);
  
  return (
    <div>SkillsDasboard</div>
  )
}
