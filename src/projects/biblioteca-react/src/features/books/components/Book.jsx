import { useDispatch } from "react-redux";
import { deleteBook } from "../booksSlice";
import { Link } from "react-router-dom";


export default function Book({book}) {

  let dispatch = useDispatch();

  let {id, title, author, alreadyRead, imageUrl} = book;


  return (
    <article>
        <Link to={`/description/${id}`}>
          <h1>{title}</h1>
        </Link>
        <h2>{author}</h2>
        <img src={`./livros/${imageUrl}`} alt={title} />
        <p>Already Read: {alreadyRead ? '✅' : '❌'} </p>
        <button onClick={()=>dispatch(deleteBook(id))}>delete</button>
    </article>
  )
}
