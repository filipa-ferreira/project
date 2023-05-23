//* METODOS QUE NAO IMPLICAM ALTERACAO DO MODELO DE DADOS

// mostrar popup e alterar source da imagem
export const showPopup = (url) => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
}

export const closePopup = () => popup.classList.remove('open');