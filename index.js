var films = JSON.parse(localStorage.getItem("films"));
function cadastrar() {
  let film = {};
    film.title = document.getElementById("title").value;
    film.rating = document.getElementById("rating").value;
    film.length = document.getElementById("length").value;
    //Favorito e asistido (em ingles igual ao resto do meu codigo)
    film.favourite = false;
    film.wathced = false;
  
  let titles = [];
  films.forEach(function(existingFilm) {
    titles.push(existingFilm.title);
  });
  if (titles.includes(film.title)) {
    alert(`Já possui um filme com esse mesmo título`);
    return;
  }

  films.push(film);
  alert(`filme ${film.title} adicionado com suceso!`);
  localStorage.setItem("films", JSON.stringify(films));
  
  document.getElementById("films-form").reset(); 
}