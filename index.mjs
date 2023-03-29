let films = JSON.parse(localStorage.getItem("films"))||[];

let favourites = [];
favourites = films.filter((film)=>film.favourite);

let titles = [];
films.forEach((film)=>titles.push(film.title));

let watchedTime=0;

class Film{
  constructor(){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
  
  
};
//Ex 2
function cadastrar(){
  let film = new Film;
    film.title = document.getElementById("title").value;
    film.rating = document.getElementById("rating").value;
    film.length = document.getElementById("length").value;
    //Favorito e asistido (em ingles igual ao resto do meu codigo)
    film.favourite = false;
    film.watched = false;
  
  let titles = [];
  films.forEach((existingFilm)=> {titles.push(existingFilm.title)});
  
  if (titles.includes(film.title)) {
    alert(`Já possui um filme com esse mesmo título`);
    return;
  }

  films.push(film);
  alert(`filme ${film.title} adicionado com suceso!`);
  localStorage.setItem("films", JSON.stringify(films));
  
  document.getElementById("films-form").reset(); 
  }
function clearStorage(){
  localStorage.clear();
  location.reload();
  films= [];
}

function listFilms (){
 films.forEach(listar);
  };
 //Ex 3  
async function listar(film){
  const filmCard = document.createElement("div");
  filmCard.id = film.title;
  filmCard.classList="filmCard";
    
  let poster = await fetch("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query="+film.title)
  .then((response) => {
    r = response; 
    r = r.json();
    return r;
  } ).then((data) => {
    resultsArray= data.results;
    results= resultsArray[0];
    path= results.poster_path;
    let poster = document.createElement("img");
    poster.id="filmPoster";
    poster.src= "http://image.tmdb.org/t/p/w500/"+ path;
    return poster;
  }).catch(()=>{alert(`poster nao achado para filme ${film.title}`);
  films.pop()});
  
  let favourite= document.createElement('img');
  favourite.src = film.favourite?"img/heart-full.png":"img/heart-empty.png";
  favourite.id =`${film.title} favourite`;
  favourite.addEventListener('click',()=>setFavourite(film));

  let watched= document.createElement('img');
  watched.src = film.watched?"img/watched-yes.png":"img/watched-no.png";
  watched.id =`${film.title} watched`;
  watched.classList='watchedimg'
  
  watched.addEventListener('click',()=>setWatched(film));

  let title = document.createElement("span");
  title.innerHTML=film.title;
  title.id="filmTitle";
  let length = document.createElement("span");
  length.innerHTML = film.length + "mins";
  let rating = document.createElement("img");
  rating.id = "ratingimg";
  switch(film.rating){
    case "5":
      rating.src= "./img/5-stars.jpg";
      break;
    case "4": 
      rating.src="./img/4-stars.jpg";
      break;
    case "3":
      rating.src="./img/3-stars.jpg";
      break;
    case "2":
      rating.src="./img/2-stars.jpg";
      break;
    case "1":
      rating.src="./img/1-star.jpg";
      break;
}


filmCard.appendChild(title);
filmCard.appendChild(favourite); 
filmCard.appendChild(watched);
filmCard.appendChild(length);
filmCard.appendChild(poster);
filmCard.appendChild(rating);
filmsList.appendChild(filmCard);

}


 async function buscar(){
  let termo= document.getElementById("buscar").value;
  filmsList.innerHTML="";
  let resultsObjects=films.filter((film)=>film.title.includes(termo));
  console.log(resultsObjects);
  resultsObjects.forEach((film)=>listar(film));
  
}

//Assistido e favoritos funcoes do ex 6
function setWatched(film) {
  film.watched = !film.watched;
  favourites = films.filter((film) => film.watched);
  
  const watchedIcon = document.getElementById(`${film.title} watched`);
  watchedIcon.src = film.watched ? "img/watched-yes.png" : "img/watched-no.png";

  let filmHours = film.length/60; 

  film.watched?(watchedTime+=filmHours):(watchedTime-=filmHours);
  
  watchedTime?document.getElementById('watched-hours').innerHTML = watchedTime.toFixed(2) +" horas asistidas":document.getElementById('watched-hours').innerHTML="";

}

function setFavourite(film){
  if(!film.favourite && favourites.length == 3){
    alert('Já existem três filmes favoritos');
    return;
  }
  film.favourite = !film.favourite;
  favourites = films.filter((film)=>film.favourite);
  const favouriteIcon = document.getElementById(`${film.title} favourite`);
  favouriteIcon.src = film.favourite ? "img/heart-full.png" : "img/heart-empty.png";
}