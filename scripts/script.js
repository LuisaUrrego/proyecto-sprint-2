import { videoCards } from "./data.js";
console.log(videoCards);

//Mostrar los imagenes de los videos 
const containerVideos = document.querySelector(".main__videos");
console.log(containerVideos)

//Funcion para pintar las portadas de los videos
const portadaVideos = (container, portadasList) =>{
    container.innerHTML = "";
    portadasList.forEach((portada) => {
        container.innerHTML+= `
        <articule class="portadas">
            <figure class="imagenes__portadas">
                <img class= "imegenes__portada" data-card='cards' name=${portada.id} src= ${portada.image} alt=${portada.videoName, portada.details.nameCreator, portada.details.numberViews, portada.details.date}>
            </figure>
            <section class= "detalles__portada">
                <h3  name=${portada.id} data-card='cards'>${portada.videoName}</h3>
                <h4  name=${portada.id} data-card='cards'>${portada.details.nameCreator}</h4>
                <h4  name=${portada.id} data-card='cards'>${portada.details.numberViews}</h4>
                <h4  name=${portada.id} data-card='cards'>${portada.details.date}</h4>
            </section>
        </articule>
        `;
    });



};
//Escuchar eventos cuando se recarga la pagina
document.addEventListener('DOMContentLoaded', () => {
    portadaVideos(containerVideos, videoCards );
})

//Escuchar en evento click de los videos
document.addEventListener('click', (event) =>{
    const dataCardAttribute = event.target.getAttribute('data-card');
    if (dataCardAttribute === "cards") {
        const idVideo = event.target.getAttribute('name');
        sessionStorage.setItem('idVideo', JSON.stringify(idVideo));
        window.location.href = "./pages/details.html";
    }
})
//Funcionamiento de los botones del filtrado
//1.Creacion del array con las categorias del array principal
const categorias = ['all'];
videoCards.forEach((item) => {
    if (!categorias.includes(item.details.category)) {
        categorias.push(item.details.category);
        
    }
});

categorias.forEach((item) => {
    const filtraciones = document.getElementsByName(item)[0];
    filtraciones.addEventListener("click" , () => {
        const videosFiltrados = 
        item === 'all'
        ? videoCards
        :videoCards.filter((element) => 
        element.details.category === item);
        portadaVideos(containerVideos, videosFiltrados);
    });
   

});

