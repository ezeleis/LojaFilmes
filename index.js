let films = JSON.parse(localStorage.getItem("films"))||[];
let favourites = [];

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
function clearStorage(){
  localStorage.clear();
  location.reload();
  films= [];
}

function listFilms (){
 films.forEach(createCard);
  };
function setFavourite(film){
  film.favourite=true;
  
}
   
  async function createCard(film){
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
    favourite.src = "img/heart-empty.png";
    favourite.id ="favourite";
    favourite.addEventListener('click',function(){
      setFavourite(film);
    })
    let breakLine = document.createElement("br");
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
filmCard.appendChild(length);
filmCard.appendChild(poster);
filmCard.appendChild(rating);
filmsList.appendChild(filmCard);

}
