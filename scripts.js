let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

//Declaring variables which convert movieData into an array, define the container which will hold film information & define film info button

let filmArray = Object.entries(movieData).map(([name, obj]) => ({ name, ...obj }));
const container = document.getElementById("movie-container");
const filmInfoButton = document.getElementById("show-film-info");

//Testing filmArray with a for loop to log to console

// for (var i = 0; i < filmArray.length; i++){
//   var film = filmArray[i];
//   for (var key in film){
//     console.log(key, film[key]);
//   }
// }

//Use filmArray to populate webpage with elements and corresponding information, then append to movie-container element

filmInfoButton.addEventListener('click', displayFilmInfo)


function displayFilmInfo(event) {
event.preventDefault();
container.innerHTML ='' 

for (var x = 0; x < filmArray.length; x++){
//filmInfoButton.style.display = 'none';
var film = filmArray[x];
let filmName = document.createElement('h3')
let plot = document.createElement('h4');
let starring = document.createElement('p');
let runtime = document.createElement('p');
let rating = document.createElement('p');
let year = document.createElement('p');

filmName.textContent = filmArray[x].name;
plot.textContent = filmArray[x].plot;
starring.textContent = "Starring: " + filmArray[x].cast;
runtime.textContent = "Runtime: " + filmArray[x].runtime + " minutes";
rating.textContent = "Rated " + filmArray[x].rating + "/10";
year.textContent = filmArray[x].year;
container.append(filmName, plot, starring, runtime, rating, year);

}}

//Function to sort by year

const sortFilms = document.getElementById("sort");
sortFilms.addEventListener('click', sortByYear)

function sortByYear(event){
event.preventDefault();
container.innerHTML =''

filmArray = filmArray.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
console.log(filmArray)
for (var x = 0; x < filmArray.length; x++){
  //filmInfoButton.style.display = 'none';
  var filmxx = filmArray[x];
  // for (var key in filmxx){
  //   console.log(key, filmxx[key]);
  let filmName = document.createElement('h3')
  let plot = document.createElement('h4');
  let starring = document.createElement('p');
  let runtime = document.createElement('p');
  let rating = document.createElement('p');
  let year = document.createElement('p');

  filmName.textContent = filmArray[x].name;
  plot.textContent = filmArray[x].plot;
  starring.textContent = "Starring: " + filmArray[x].cast;
  runtime.textContent = "Runtime: " + filmArray[x].runtime + " minutes";
  rating.textContent = "Rated " + filmArray[x].rating + "/10";
  year.textContent = filmArray[x].year;
  container.append(filmName, plot, starring, runtime, rating, year);
  }
}



 




//container.innerHTML = xx

//displayFilmInfo(xx)