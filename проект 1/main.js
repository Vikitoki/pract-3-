"use strict";

let numberOfFilms;

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLvl: function () {
    if (personalMovieDb.count < 10) {
      alert("Просмотренно слишком мало фильмов");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDb.count >= 30) {
      alert("Вы киноман!");
    } else {
      alert("Произошла ошибка!");
    }
  },
  showMyDb: function () {
    if (!personalMovieDb.privat) {
      console.log(personalMovieDb);
    }
  },
  writeYourGenres: function () {
    let genre;
    for (let i = 0; i < 3; i++) {
      genre = prompt(`Ваш любимы жанр под номером ${i + 1}`).toLowerCase();

      if (genre) {
        personalMovieDb.genres.push(genre);
      } else {
        i--;
      }
    }

    personalMovieDb.genres.forEach((item, index) => {
      console.log(`Ваш любимый жанр под номером ${index + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDb: function () {
    if (personalMovieDb.privat) {
      personalMovieDb.privat = false;
    } else {
      personalMovieDb.privat = true;
    }
  },
};

// personalMovieDb.start();
// personalMovieDb.rememberMyFilms();
// personalMovieDb.detectPersonalLvl();
personalMovieDb.writeYourGenres();
// personalMovieDb.showMyDb();
