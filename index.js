var films = JSON.parse(localStorage.getItem("films"));
function cadastrar() {
  var film = {};
    film.title = document.getElementById("title").value;
    film.rating = document.getElementById("rating").value;
    film.length = document.getElementById("length").value;
  
  
  let titles = [];
  films.forEach(function(existingFilm) {
    titles.push(existingFilm.title);
  });
  if (titles.includes(film.title)) {
    alert(`filme ${film.title} já está cadastrado!`);
    return;
  }
  
  films.push(film);
  alert(`filme ${film.title} foi cadastrado com suceso!`);
  localStorage.setItem("films", JSON.stringify(films));
  
  document.getElementById("films-form").reset(); 
}