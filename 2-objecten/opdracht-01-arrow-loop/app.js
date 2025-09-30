const films = ["Spiderman", "Thor", "Deadpool", "Avengers"];  

const calculate = (a, b) => {
  console.log(a * b);
};

function voegMarvelFilmToe(filmNaam) {
  films.unshift(filmNaam);             
  console.log(`Film toegevoegd: ${filmNaam}`);
}


voegMarvelFilmToe("Black Panther");


for (let film of films) {
  console.log(film);
}
