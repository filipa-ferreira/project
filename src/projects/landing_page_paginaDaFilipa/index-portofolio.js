//grid
let grid = document.querySelector('section.grid');



function showAll(arrayProjects = []){
    arrayProjects.map(project => {
        grid.innerHTML +=`
            <article>
            <img src="images/${project.imageUrl}" data-link="${project.link}" alt="${project.name} data-type='thumbnail' "/>
            <p>${project.name}</p>
            </article>
        `;

    })
}

const getProjects = () => projects;

showAll(getProjects());

//projetos
let portfolio = document.querySelector('section#portfolio');

grid.addEventListener('click', mostrarProjeto, false);

function mostrarProjeto(event) {
    // console.log(event);
    const linkProjeto = event.target.dataset.link;
    window.location.href = linkProjeto;
  }

