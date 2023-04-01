import {films} from './filme.js';
let watchedTime=0;

export function setWatched(film) {
    film.watched = !film.watched;
    
    const watchedIcon = document.getElementById(`${film.title} watched`);
    watchedIcon.src = film.watched ? "img/watched-yes.png" : "img/watched-no.png";
  
    let filmHours = film.length/60; 
  
    film.watched?(watchedTime+=filmHours):(watchedTime-=filmHours);
    
    watchedTime?document.getElementById('watched-hours').innerHTML = watchedTime.toFixed(2) +" horas asistidas":document.getElementById('watched-hours').innerHTML="";
  
  }
  
export function setFavourite(film){
    let favourites = films.filter((film)=>film.favourite);
    if(!film.favourite && favourites.length == 3){
      alert('Já existem três filmes favoritos');
      return;
    }
    film.favourite = !film.favourite;
    favourites = films.filter((film)=>film.favourite);
    const favouriteIcon = document.getElementById(`${film.title} favourite`);
    favouriteIcon.src = film.favourite ? "img/heart-full.png" : "img/heart-empty.png";
  }