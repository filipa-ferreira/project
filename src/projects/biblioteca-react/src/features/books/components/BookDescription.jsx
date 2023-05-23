import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function BookDescription() {

    let params = useParams();

    let navigate = useNavigate();

    let book = useSelector( state => state.library.books.find(b => b.id == params.id))



  return (
    <article>
         <button onClick={()=>navigate(-1)}>back</button>
        <h1> {book.title} </h1>
        <h2> {book.author}</h2>
        <img src={`/livros/${book.imageUrlGr}`} alt={book.title} />
         <p>Already Read: {book.alreadyRead ? '✅' : '❌'} </p>
         <p>{book.description}</p> 
       

    </article>
  )
}
