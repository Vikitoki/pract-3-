"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let questionOne = prompt("Один из последних просмотренных фильмов", ""),
    questionOneResult = prompt("На сколько оцените его?", "");

  if (
    questionOne != null &&
    questionOneResult != null &&
    questionOne != "" &&
    questionOneResult != "" &&
    questionOne.length < 50 &&
    questionOneResult.length < 50
  ) {
    personalMovieDb.movies[questionOne] = questionOneResult;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDb.count < 10) {
  alert("Просмотренно слишком мало фильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDb.count >= 30) {
  alert("Вы киноман!");
} else {
  alert("Произошла ошибка!");
}

console.log(personalMovieDb);
