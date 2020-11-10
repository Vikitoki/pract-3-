/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

document.addEventListener("DOMContentLoaded", function () {
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

  // Task forth,seven

  let movieList = document.querySelector(".promo__interactive-list");

  renewalMovies(movieList, movieDB.movies);

  // Task five,six,eight

  const addForm = document.querySelector(".add"),
    addinput = addForm.querySelector(".adding__input"),
    addCheckbox = addForm.querySelector('[type = "checkbox"]');

  addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputValue = addinput.value.trim();

    if (inputValue) {
      if (inputValue && inputValue.length > 21) {
        inputValue = `${inputValue.slice(0, 22)}...`;
      }

      if (addCheckbox.checked) {
        console.log("Добавляем любимый фильм");
			}
			
      movieDB.movies.push(inputValue);
    }

    renewalMovies(movieList, movieDB.movies);
    event.target.reset();
  });

  // Function block
  function renewalMovies(filmsList, parent) {
    parent.sort();

    filmsList.innerHTML = "";

    parent.forEach((key, index) => {
      filmsList.innerHTML += `
		<li class="promo__interactive-item">${index + 1} ${key}
				<div class="delete"></div>
		</li>
		`;
    });

    document.querySelectorAll(".delete").forEach((item, index) =>
      item.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("done");

        let isParentElement = item.parentElement;
        isParentElement.remove();
        parent.splice(index, 1);

        renewalMovies(filmsList, parent);
      })
    );
  }
});
