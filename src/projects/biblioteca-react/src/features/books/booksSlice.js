import {createSlice} from '@reduxjs/toolkit';

const booksSlice = createSlice({
    name:'books',
    initialState:{
        books: [],
        filteredBooks: [],
    },
    reducers:{
        getBooks: (state, action) => {
            state.books = action.payload;
            state.filteredBooks = action.payload;
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter( b => b.id !== action.payload);
            state.filteredBooks = state.books;
            //fetch(`http://localhost:3000/books/${action.payload}`, {method: "DELETE"});
        },
        showAllBooks: (state, action) => {
            state.filteredBooks = state.books;
        },
        showReadBooks: (state, action) => {
            state.filteredBooks = state.books.filter( b => b.alreadyRead === true);
        },
        showNotReadBooks: (state, action) => {
            state.filteredBooks = state.books.filter( b => b.alreadyRead === false);
        },
        searchByTitle: (state, action) => {
            state.filteredBooks = state.books.filter( b => b.title.search(action.payload) > -1);
        }
    }
});

export const {getBooks, deleteBook, showAllBooks, showReadBooks, showNotReadBooks, searchByTitle} = booksSlice.actions;
export default booksSlice.reducer;