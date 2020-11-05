
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat : false,
};


let questionOne = prompt('Один из последних просмотренных фильмов',''),
questionOneResult =  prompt('На сколько оцените его?','');	


personalMovieDb.movies[questionOne] = questionOneResult;