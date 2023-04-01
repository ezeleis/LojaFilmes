import { Film, cadastrar, films,listar } from './filme.js';

window.onload = ()=>listFilms();
document.getElementById('films-form').addEventListener('submit', cadastrar);
document.getElementById('cadastrar').addEventListener('click', cadastrar);
document.getElementById('clear').addEventListener('click', clearStorage);
document.getElementById('buscar').addEventListener('keyup',buscar);

function clearStorage(){
    localStorage.clear();
    location.reload();
    films= [];
  };

function listFilms (){
  films.forEach(listar);
    };

function buscar(){
    let termo= document.getElementById("buscar").value;
    filmsList.innerHTML="";
    let resultsObjects=films.filter((film)=>film.title.includes(termo));
    console.log(resultsObjects);
    resultsObjects.forEach((film)=>listar(film));
  }

export let titles = films.map((film) => film.title);