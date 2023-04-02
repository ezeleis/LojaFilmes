import {Film, setWatched, setFavourite, listarFilmes, listar, cadastrar} from './filme.js';
let films = JSON.parse(localStorage.getItem("films"))||[];
listFilms();

function clearStorage(){
    localStorage.clear();
    location.reload();
    films= [];
  }
  
function listFilms (){
  films.forEach(listar);
  };

async function buscar(){
    let termo= document.getElementById("buscar").value;
    filmsList.innerHTML="";
    let resultsObjects=films.filter((film)=>film.title.includes(termo));
    console.log(resultsObjects);
    resultsObjects.forEach((film)=>listar(film));
  }