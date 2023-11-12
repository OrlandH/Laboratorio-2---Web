//Consultar la API
const consultarPokemon = (id, number) =>{
    //permite consumir apis : fetch()
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        pintarPokemon(data, number)
    })
    .catch(error=>{
        console.log(error);
    })
}

//Generar los pokemones de forma random
const btnSeleccionar = () =>{
    let primerPokemon = Math.round(Math.random()*150)
    let segundoPokemon = Math.round(Math.random()*150)    
    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)
}

//Invocar la funcion
btnSeleccionar()

//Obtener la referencia del div donde se va a pintar los pokemones
const lista = document.getElementById("listarpokemon")

//Funcion para poder presentar los pokemon
const pintarPokemon = (data, id) =>{
    let item = lista.querySelector(`#pok-${id}`)
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default)
    console.log(item.getElementsByTagName("img"));
    item.getElementsByTagName("p")[0].innerHTML=data.name
}