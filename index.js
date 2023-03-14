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

function createCard(film){
let card = document.createElement("div");
card.classList = "filmCard";
let title = document.createElement("h1");
title.innerHTML=film.title;
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
let poster = document.createElement("img");
card.appendChild(title);
card.appendChild(rating);
card.appendChild(poster);
document.getElementById("filmsList").appendChild(card);
return card;
}



//console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"));


// $('#term').focus(function(){
//   var full = $("#poster").has("img").length ? true : false;
//   if(full == false){
//      $('#poster').empty();
//   }
// });

// var getPoster = function(){

//     var film = $('#title').val();

//      if(film == ''){

//         $('#poster').html('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');

//      } else {

//         $('#poster').html('<div class="alert"><strong>Loading...</strong></div>');

//         $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
//            if (json != "Nothing found."){                 
// console.log(json);
//                  $('#poster').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
//               } else {
//                  $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function(json) {
                   
//                    console.log(json);
//                     $('#poster').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
//                  });
//               }
//          });

//       }

//     return false;
// }

// $('#search').click(getPoster);
// $('#term').keyup(function(event){
//    if(event.keyCode == 13){
//        getPoster();
//    }
// });
