var films = JSON.parse(localStorage.getItem("films"))||[];

class Film{
  title
  rating
  length
  constructor(){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
  
  
};

function add(){
  let film = new Film;
    film.title = document.getElementById("title").value;
    film.rating = document.getElementById("rating").value;
    film.length = document.getElementById("length").value;
    //Favorito e asistido (em ingles igual ao resto do meu codigo)
    film.favourite = false;
    film.wathced = false;
  
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

function listFilms (){
 films.forEach(createCard);
  };

  let card;
async function createCard(film){
card = document.createElement("div");
card.classList = "filmCard";
let title = document.createElement("h1");
title.innerHTML=film.title;
title.id="filmTitle";
let rating = document.createElement("img");
  if(film.rating==5){
    rating.src= "img/5-stars.jpg";
  }
  else if (film.rating==4){
    rating.src="img/4-stars.jpg";
  }
  else if (film.rating==3){
    rating.src="img/3-stars.jpg";
  }
   else if (film.rating==2){
    rating.src="img/2-stars.jpg";
  }
  else if (film.rating==1){
    rating.src="img/1-star.jpg";
  }
await getPoster(title.innerHTML);
// poster.src = url;
card.appendChild(title);
card.appendChild(rating);
document.getElementById("filmsList").appendChild(card);
return card;
}



async function getPoster(title){
  console.log(title);
  await fetch("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query="+title)
  .then((response) => {
    r = response; 
    console.log( 1, r);
    r = r.json();
    console.log(2, r);
    return r;
  } )
  .then((data) => {
    console.log( 3, data);
    r= data.results;
    console.log(4, r);
    r = r[0];
    console.log(5,r);
    r= r.poster_path;
    console.log(6,r);
    let poster = document.createElement("img");
    poster.id="poster";
    poster.src= "http://image.tmdb.org/t/p/w500/"+ r;
    obj = card.appendChild(poster);
    console.log(obj);
   })


}