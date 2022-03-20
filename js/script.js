'use strict'

let numberOfFilms;

function start(str){
    str = prompt('Сколько фильмов вы уже смотрели?', '');
    while (isNaN(str) || str === null || str === "" || str === " ") {
        str = prompt('Сколько фильмов вы уже смотрели?', '');
    }
    return str;
}
numberOfFilms = start(numberOfFilms);

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false   
};

function detectPersonalLevel(){
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
}
detectPersonalLevel();

let nameOfMovies = [], raitingMovies = [];
function rememberMyFilms(){
for (let i = 0; i < 2; i++) {
    nameOfMovies[i] = prompt('Один из последних просмотренных фильмов?', '');
    while (!nameOfMovies[i].length || nameOfMovies[i].length > 50) {
        nameOfMovies[i] = prompt('Один из последних просмотренных фильмов?', '');
    }
    raitingMovies[i] = prompt('На сколько оцените его?', '');
    while (!raitingMovies[i].length || isNaN(raitingMovies[i])) {
        raitingMovies[i] = prompt('На сколько оцените его?', '');
    }
}
}
rememberMyFilms();

personalMovieDB.movies = {
    nameOfMovies,
    raitingMovies
};

function showMyDB(){
   if(!personalMovieDB.privat){
       console.log(personalMovieDB);
   }
}
showMyDB();

function writeYourGenres(){
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером " + i, "");
    while (!personalMovieDB.genres[i].length || !isNaN(personalMovieDB.genres[i])) {
        personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером " + i, "");
      }
    }
}
writeYourGenres();

