import{videoCards} from "../scripts/data.js"


//Escuchar el logo para redirecionar a la imagenes

const logoVideoTube = document.querySelector(".header__image");
logoVideoTube.addEventListener('click', () => {
    location.href = "../index.html"
})
//Activar link
const activacionLink = document.querySelector(".header__link");
activacionLink.classList.add("activacion")
//escuchar boton capturar formulario
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //array
    const  childrenForm = Array.from(form.children);
    
    //capturar inputs y selects
    const input = childrenForm.filter((item) => item.localName === "input" ||  item.localName === "select" );
    const itemSelect = childrenForm.filter((item)=> item.localName === "select");
   
    //creacion del objeto
    const nuevoVideo = {
        videoName: "",
        image: "",
        details: {
            name: "",
            nameCreator: "",
            numberViews: "",
            date: "",
            category: "",

    },
};
 for (const key in nuevoVideo) {
    if (typeof nuevoVideo [key] === 'object') {
        for (const propertyName in nuevoVideo [key] ) {
            const input= childrenForm.find((item) => item.id == propertyName)
              nuevoVideo [key] [propertyName] = input.value
            
        }
        
    }else{
        const input= childrenForm.find((item) => item.id == key)
        nuevoVideo [key]= input.value

    }
    console.log(nuevoVideo)
    const validation = validacion(nuevoVideo);
    if (validation) {
        nuevoVideo.id = videoCards.length + 1;
        videoCards.push(nuevoVideo)
        sessionStorage.setItem('videos', JSON.stringify(videoCards));
        Swal.fire("Buen trabajo!", "El nuevo video fue creado exitosamente", "success");
        
        form.reset();
        
    }
//console.log(videosSession);
    
 }
    

});
//validacion de la existencia no
 const validacion = (objectData) => {
    let stringsVacios = "";
    for (const key in objectData) {
        if (typeof objectData [key] === "object") {
            for (const propertyName in objectData [key]) {
                const valuePropertyName = objectData [key] [propertyName]
                stringsVacios +=  !valuePropertyName ? `${propertyName} `: "";
                
            }
            
        }else{
           const valuePropertyName = objectData [key]
                stringsVacios += !valuePropertyName ? `${key} `: "";

        }
        
    }
    if (stringsVacios) {
        Swal.fire("Oops!", `Hay campos vacíos: ${stringsVacios}`, "error");
        
        
    }else{
        return true;
    }
 }
