class Animal{
    constructor(nombre,edad,comentarios,imagen,sonido){
        let _nombre =nombre
        let _edad =edad
        let _comentarios =comentarios
        let _imagen =imagen
        let _sonido =sonido
        this.getNombre =_nombre 
        this.getEdad=_edad
        this.getComentarios=_comentarios
        this.getImagen=_imagen
        this.getSonido=_sonido
            }
get nombre (){return this.getNombre};
get edad (){return this.getEdad};
get comentarios (){return this.getComentarios};
get imagen (){return this.getImagen};
get sonido (){return this.getSonido};


};
class Leon extends Animal { 
    constructor(nombre,edad,comentarios,imagen,sonido){
        let _nombre =nombre
        let _edad =edad
        let _comentarios =comentarios
        let _imagen =imagen
        let _sonido =sonido
    super(nombre,edad,comentarios,imagen,sonido)}

    Rugir (audio){
    audio.play()}
    
}
class Lobo extends Animal { 
    constructor(nombre,edad,comentarios,imagen,sonido){
        let _nombre =nombre
        let _edad =edad
        let _comentarios =comentarios
        let _imagen =imagen
        let _sonido =sonido
    super(nombre,edad,comentarios,imagen,sonido)}

    Aullar (audio){audio.play()}
    
}
class Oso extends Animal { 
    constructor(nombre,edad,comentarios,imagen,sonido){
        let _nombre =nombre
        let _edad =edad
        let _comentarios =comentarios
        let _imagen =imagen
        let _sonido =sonido
    super(nombre,edad,comentarios,imagen,sonido)}

    Gruñir (audio){audio.play()}
    
}

class Serpiente extends Animal { 
    constructor(nombre,edad,comentarios,imagen,sonido){
        let _nombre =nombre
        let _edad =edad
        let _comentarios =comentarios
        let _imagen =imagen
        let _sonido =sonido
    super(nombre,edad,comentarios,imagen,sonido)}

    Sisear (audio){
           audio.play()}
    
}

class Aguila extends Animal { 
    constructor(nombre,edad,comentarios,imagen,sonido){
        let _nombre =nombre
        let _edad =edad
        let _comentarios =comentarios
        let _imagen =imagen
        let _sonido =sonido
    super(nombre,edad,comentarios,imagen,sonido)}

    Chillar (audio){audio.play()}
    
}

const crearLeon = (nombre,edad,comentarios,imagen,sonido)=> new Leon(nombre,edad,comentarios,imagen,sonido)
const crearLobo = (nombre,edad,comentarios,imagen,sonido)=> new Lobo(nombre,edad,comentarios,imagen,sonido)
const crearOso = (nombre,edad,comentarios,imagen,sonido)=> new Oso(nombre,edad,comentarios,imagen,sonido)
const crearSerpiente = (nombre,edad,comentarios,imagen,sonido)=> new Serpiente(nombre,edad,comentarios,imagen,sonido)
const crearAguila = (nombre,edad,comentarios,imagen,sonido)=> new Aguila(nombre,edad,comentarios,imagen,sonido);


(async()=>{
    
    url = "/assets/animales.json"
    response = await (await fetch(url)).json()
    data = await response.animales
    prototiposAnimales = data
})();




const tarjetasAnimalesEnInvestigacion = []
let prototiposAnimales = []
const animalesEnInvestigacion = []
const registroAnimalesEnInvestigacion = document.querySelector("#Animales")
const modalDetalleAnimal = document.querySelector(".modal-content")
const registerBtn = document.querySelector("#btnRegistrar")
const selectorAnimal = document.querySelector("#animal")
const imagenPreview =  document.querySelector("#preview")
selectorAnimal.addEventListener("change",()=>{
    let imagenUrl = prototiposAnimales.find((animal)=>animal.name===selectorAnimal.value).imagen
    imagenPreview.style.backgroundImage = `url("/assets/imgs/${imagenUrl}")`;
    imagenPreview.style.backgroundSize = `cover`;
    imagenPreview.style.backgroundPosition = `center`;
    imagenPreview.style.margin = `0px`
})




const registrarAnimal = (animal)=>{
const nombreAnimalAInvestigar =animal
const prototipoAnimalAInvestigar =  prototiposAnimales.filter((animal)=>animal.name === nombreAnimalAInvestigar).shift()
const edadAnimalAInvestigar = document.querySelector("#edad").value
const comentariosAnimalAInvestigar = document.querySelector("#comentarios").value
const imagenAnimalAInvestigar = prototipoAnimalAInvestigar.imagen
const sonidoAnimalAInvestigar = prototipoAnimalAInvestigar.sonido
if (nombreAnimalAInvestigar ==="Oso"){
return crearOso(nombreAnimalAInvestigar,edadAnimalAInvestigar,comentariosAnimalAInvestigar,imagenAnimalAInvestigar,sonidoAnimalAInvestigar)}
if (nombreAnimalAInvestigar ==="Leon"){
    return crearLeon(nombreAnimalAInvestigar,edadAnimalAInvestigar,comentariosAnimalAInvestigar,imagenAnimalAInvestigar,sonidoAnimalAInvestigar)}
if (nombreAnimalAInvestigar ==="Lobo"){
    return crearLobo(nombreAnimalAInvestigar,edadAnimalAInvestigar,comentariosAnimalAInvestigar,imagenAnimalAInvestigar,sonidoAnimalAInvestigar)}
if (nombreAnimalAInvestigar ==="Serpiente"){
    return crearSerpiente(nombreAnimalAInvestigar,edadAnimalAInvestigar,comentariosAnimalAInvestigar,imagenAnimalAInvestigar,sonidoAnimalAInvestigar)}
if (nombreAnimalAInvestigar ==="Aguila"){
    return crearAguila(nombreAnimalAInvestigar,edadAnimalAInvestigar,comentariosAnimalAInvestigar,imagenAnimalAInvestigar,sonidoAnimalAInvestigar)}
}
    
                        


const crearTarjetaAnimal = (imagen,sonido,array)=> `<div id="animal${array.length-1}" class=" cardAnimal">
<div id="imagenAnimal${array.length-1}" data-toggle="modal" data-target="#exampleModal" class="cardAnimalImg" style="background-image: url('/assets/imgs/${imagen}'); background-size: cover; background-position:center;width:100%; height:70%; margin:auto;" ></div>
<div class="card-body" style="background-color:gray;">  
<i onclick ="playSonido(${array.length-1})" class="audioIcons fas fa-volume-up""></i>
  <audio src="assets/sounds/${sonido}"></audio>
  </div>
</div>`

  const crearModalAnimal = (nombre,edad,comentarios,imagen)=> `
  <div data-toggle="modal" data-target="#exampleModal" id="modalImage" style="background-image: url('/assets/imgs/${imagen}')" ></div>
<div class="card-body">
  <h5 class="pt-5">${nombre}</h5>
  <p class="card-text pt-2">${edad}</p>
  <p class="card-text pt-2">${comentarios}.</p>
</div>
  
`

registerBtn.addEventListener("click", ()=>{
   
    const nombreAnimalAInvestigar = document.querySelector("#animal").value
    const nuevoAnimal =  registrarAnimal(nombreAnimalAInvestigar)
    animalesEnInvestigacion.push(nuevoAnimal) 
    const tarjetaNuevoAnimal = crearTarjetaAnimal(nuevoAnimal.imagen,nuevoAnimal.sonido,animalesEnInvestigacion)
    registroAnimalesEnInvestigacion.innerHTML += tarjetaNuevoAnimal
    tarjetasAnimalesEnInvestigacion.push(document.querySelector(`#animal${animalesEnInvestigacion.length-1}`))
       
})


const playSonido = (indiceAnimal)=> {
let audio = document.querySelector( `#animal${indiceAnimal} audio`)
let animal= animalesEnInvestigacion[indiceAnimal]
if (animal.nombre==="Leon"){animal.Rugir(audio)}
if (animal.nombre==="Lobo"){animal.Aullar(audio)}
if (animal.nombre==="Oso"){animal.Gruñir(audio)}
if (animal.nombre==="Serpiente"){animal.Sisear(audio)}
if (animal.nombre==="Aguila"){animal.Chillar(audio)}


}




 $(document).on('click','.cardAnimalImg',(e)=>{
   
     const indice = parseInt(e.target.id.split("l")[1])
     const animalElegido = animalesEnInvestigacion[indice]
     modalDetalleAnimal.innerHTML= crearModalAnimal(animalElegido.nombre, animalElegido.edad, animalElegido.comentarios, animalElegido.imagen)
     })

