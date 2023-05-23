//*METODOS ATUALIXACAO DE MODELO DE DADOS

import { livros } from "./data.js";


let myBooks = [...livros];

// ler todos os livros
export const getBooks = () => myBooks;

// mostrar livros ja lidos
export const getReadBooks = () => myBooks.filter( livro => livro.alreadyRead === true);

// mostrar livros Nao lidos
export const getNotReadBooks = () => myBooks.filter( livro => livro.alreadyRead === false);

// pesquisar pelo titulo
export const getBooksByTitle = (text) => myBooks.filter( livro => livro.title.search(text) > -1  );

// apagar livro pelo id
export const deleteBook = (id) => myBooks = myBooks.filter( livro => livro.id !== Number(id));


export const addBook = (livro) => {
    myBooks.push(livro);
    return myBooks;
}



