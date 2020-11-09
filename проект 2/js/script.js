/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

// First task
const advert = document.querySelector(".promo__adv");
advert.innerHTML = "";

// Second task
const genre = document.querySelector(".promo__genre");
genre.innerHTML = "<div class='promo__genre'>Драмма</div>";

// Third task
const promoBg = document.querySelector(".promo__bg");
promoBg.style.backgroundImage = "url(img/bg.jpg)";

// Forth task

movieDB.movies.sort();

function renewalMovies() {
  const movieElements = document.querySelectorAll(".promo__interactive-item"),
    movieList = document.querySelector(".promo__interactive-list");

  movieElements.forEach((item) => item.remove()); //  movieElements.innerHtml = "";

  movieDB.movies.forEach((key, index) => {
    movieList.innerHTML += `
		<li class="promo__interactive-item">${index+1} ${key}
				<div class="delete"></div>
		</li>
		`;
  });
}

renewalMovies();
