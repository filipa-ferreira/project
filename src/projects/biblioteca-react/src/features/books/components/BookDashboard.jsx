import BookList from "./BookList";

import { useEffect, useState } from 'react';
import BookCounter from "./BookCounter";
import BookFilters from "./BookFilters";
import { useDispatch } from 'react-redux';
import { getBooks } from "../booksSlice";

export default function BookDashboard() {

  let dispatch = useDispatch();

   useEffect(() => {

    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => dispatch(getBooks(data)))
      .catch(err => console.log('ocorreu um erro'));

   }, []);
   

  return (
    <section>
        <h1>BookDashBoard</h1>
        <BookCounter  />
        <BookFilters />
        <BookList />
    </section>
  )
}
