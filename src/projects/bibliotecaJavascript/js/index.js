import { Livro } from "./data.js";
import { addBook, deleteBook, getBooks, getBooksByTitle, getNotReadBooks, getReadBooks } from "./data-utils.js";
import {showPopup, closePopup} from './dom-utils.js';



/// Definição variaveis/elementos Globais
let grid = document.querySelector('section#grid');
let filters = document.querySelector('section#filters');
let popup = document.querySelector('section#popup');

// definir/declarar variaveis do form
let addEditForm = document.querySelector('#addEditForm');
let title = addEditForm.titleTxt;
let author = addEditForm.authorTxt;
let alreadyRead = addEditForm.alreadyReadChb;
let imageUrl = addEditForm.imageTxt;
let imageUrlGr = addEditForm.imageGrTxt;


showBooks(getBooks());

/// EVENTOS
filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false);
popup.addEventListener('click', closePopup, false);
addEditForm.addEventListener('submit', addBookForm, false);

/// LISTENERS DOS EVENTOS
//function filterEvents(e){
function filterEvents({target:{id, value}, type }){

   // PARA OS EVENTOS DE CLICK
    
    if (id === 'allBtn'){ // caso botao seja o all
        showBooks(getBooks());
    }

    if (id === 'readBtn'){ // caso botao seja o read
        showBooks(getReadBooks());
    }

    if (id === 'notReadBtn'){ // caso botao seja o notRead
        showBooks(getNotReadBooks());
    }


    /// PARA O INPUT do SEARCH
    if( (id === 'searchTxt') && (type === 'input') ){
       showBooks(getBooksByTitle(value))
    }

    if( (id === 'showFormBtn') ){
        console.log('teste');
        addEditForm.parentElement.classList.toggle('open');
    }

}

function gridEvents({target:{dataset:{type, id, popup}}}){

    if(type === 'deleteBtn'){
        showBooks(deleteBook(id));
    }

    if (type === 'thumbnail'){
        showPopup(popup)
    }

}

function addBookForm(e){
    e.preventDefault();

    let id = new Date().getTime();
    console.log(id);

    let livro = new Livro(id, title.value, author.value, alreadyRead.checked, imageUrl.value, imageUrlGr.value);

    showBooks(addBook(livro));

    addEditForm.reset();
    
}

/// FUNCOES - Business Logic
function showBooks(arrayLivros){

    grid.innerHTML = '';

    arrayLivros.map( ({title, author, imageUrl, imageUrlGr, alreadyRead, id}) => {
        grid.innerHTML += `
            <article>
                <h1>${title}</h1>
                <h2>${author}</h2>

                <img src="livros/${imageUrl}" data-popup='livros/${imageUrlGr}' alt="${title}" data-type='thumbnail' class='thumbnail' />

                <p>Already read: ${alreadyRead ? '✅' : '❌'} </p>
                
                <button class='btn' data-type='deleteBtn' data-id='${id}' >delete</button>

                <button class='btn' data-type='editBtn' data-id='${id}' >edit</button>
            </article>`;

    });
}

