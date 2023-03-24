import{videoCards} from "../scripts/data.js"

//Escuchar el logo para redirecionar a la imagenes
const logoVideoTube = document.querySelector(".header__image");
logoVideoTube.addEventListener('click', () => {
    location.href = "../index.html"
})

//Capturar informacion que hay en el Session storage
const idVideoTubeStg = JSON.parse(sessionStorage.getItem('idVideo')) || 0;
const idVideoTube = Number(idVideoTubeStg);
console.log(idVideoTube);

// Hacer busqueda del video al hacer click
const videos = videoCards.find((video) => video.id === idVideoTube);
console.log(videos);

//Capturar informacion

const videoDetails = document.querySelector(".reproducir");
console.log(videoDetails);

//Pintar informacion video
const pintarInformacion = (video__Details, videoPpal) => {
    video__Details.innerHTML = "";
     video__Details.innerHTML = `
    <iframe class= "main__videos" src= ${videoPpal.video}></iframe>`;

    //Pintar informacion detalles
  const list = document.createElement("ul");
  list.classList.add("main__list")
  for (const key in videoPpal.details) {
    console.log(key, "--->",videoPpal.details[key] );
    const liItem = document.createElement ("li");
    liItem.innerText= `${videoPpal.details[key]}`;
    list.appendChild(liItem);
}
  video__Details.appendChild(list);
  
}

pintarInformacion(videoDetails, videos);






