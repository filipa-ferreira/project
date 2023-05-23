import React from 'react'
import { useSelector } from 'react-redux'

export default function BookCounter() {

  let num = useSelector(state => state.library.filteredBooks.length)

  return (
    <section>
        <h1>Nº Livros: {num} </h1>
    </section>
  )
}
