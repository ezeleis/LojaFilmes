import {titles} from './main.mjs';
import {setWatched, setFavourite} from './calculo.js'

export class Film {
    constructor(title, rating, length) {
      this.title = title;
      this.rating = rating;
      this.length = length;
      this.favourite = false;
      this.watched = false;
    }
  }
  
  export function cadastrar(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;
    let length = document.getElementById("length").value;
  
    let film = new Film(title, rating, length);
  
 
  
    if (titles.includes(title)) {
      alert(`Já possui um filme com esse mesmo título`);
      return;
    }
  
    films.push(film);
    listar(film);
  
    alert(`filme ${title} adicionado com sucesso!`);
    localStorage.setItem("films", JSON.stringify(films));
  
    document.getElementById("films-form").reset();
   
  }
  export async function listar(film) {
    
    const filmCard = document.createElement("div");
        filmCard.id = film.title;
        filmCard.classList = "filmCard";
    const favourite = document.createElement("img");
    favourite.src = film.favourite ? "img/heart-full.png" : "img/heart-empty.png";
    favourite.id = `${film.title} favourite`;
    favourite.classList='fav';
    favourite.addEventListener("click", () => setFavourite(film));
    filmCard.appendChild(favourite);
    
    const title = document.createElement("span");
    title.innerHTML = film.title;
    title.id = "filmTitle";
    filmCard.appendChild(title);

    const watched = document.createElement("img");
    watched.src = film.watched ? "img/watched-yes.png" : "img/watched-no.png";
    watched.id = `${film.title} watched`;
    watched.classList = "watchedimg";
    watched.addEventListener("click", () => setWatched(film));
    filmCard.appendChild(watched);

 

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${film.title}`);
      const data = await response.json();
      const resultsArray = data.results;
      const results = resultsArray[0];
      const path = results.poster_path;
      const poster = document.createElement("img");
        poster.id = "filmPoster";
        poster.src = `http://image.tmdb.org/t/p/w500/${path}`;
    poster.addEventListener('load', filmCard.appendChild(poster));
    } catch (error) {
      console.error(error);
      alert(`Poster not found for ${film.title}`);
      return;
    }
  
 
  
    const length = document.createElement("span");
    length.innerHTML = film.length + "mins";
    filmCard.appendChild(length);
  
    const rating = document.createElement("img");
    rating.id = "ratingimg";
    switch (film.rating) {
      case "5":
        rating.src = "./img/5-stars.jpg";
        break;
      case "4":
        rating.src = "./img/4-stars.jpg";
        break;
      case "3":
        rating.src = "./img/3-stars.jpg";
        break;
      case "2":
        rating.src = "./img/2-stars.jpg";
        break;
      case "1":
        rating.src = "./img/1-star.jpg";
        break;
    }
    filmCard.appendChild(rating);
   
    filmsList.appendChild(filmCard);
  }
  
 
  export let films = JSON.parse(localStorage.getItem("films")) || [];
  