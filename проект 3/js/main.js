// Tabs ==========================================================

const contentBlocks = document.querySelectorAll(".tabcontent"),
  tabsItems = document.querySelectorAll(".tabheader__item"),
  tabsParent = document.querySelector(".tabheader__items");

function hideContentTabs() {
  contentBlocks.forEach((item) => item.classList.add("hide"));
  tabsItems.forEach((item) => item.classList.remove("tabheader__item_active"));
}

function showContentTabs(i = 0) {
  contentBlocks[i].classList.remove("hide");
  contentBlocks[i].classList.add("show");

  tabsItems[i].classList.add("tabheader__item_active");
}

function choosePreferedCategory() {
  tabsParent.addEventListener("click", function (event) {
    let target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabsItems.forEach((item, index) => {
        if (target === item) {
          hideContentTabs();
          showContentTabs(index);
        }
      });
    }
  });
}

hideContentTabs();
showContentTabs();
choosePreferedCategory();

// Timer =========================================

const deadline = "2020-12-11";

function getTimeRemaining(endtime) {
  const deltaTime = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(deltaTime / (1000 * 60 * 60 * 24)),
    hours = Math.floor((deltaTime / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((deltaTime / (1000 * 60)) % 60),
    seconds = Math.floor((deltaTime / 1000) % 60);

  console.log(days);
  return {
    total: deltaTime,
    days,
    hours,
    minutes,
    seconds,
  };
}

function getZero(number) {
  if (+number <= 9) {
    return `0${number}`;
  } else {
    return number;
  }
}

function setClock(selector, endtime) {
  const parent = document.querySelector(selector),
    days = parent.querySelector("#days"),
    hours = parent.querySelector("#hours"),
    minutes = parent.querySelector("#minutes"),
    seconds = parent.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);

    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (+t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock(".timer", deadline);

// Modal =========================================

// Values

const openModalBtns = document.querySelectorAll("[data-modal]"),
  closeModalBtn = document.querySelector("[data-close]"),
  modalWindow = document.querySelector(".modal");

// Main

openModalBtns.forEach((item) =>
  item.addEventListener("click", function (event) {
    event.preventDefault();

    openModal();
  })
);

closeModalBtn.addEventListener("click", function (event) {
  event.preventDefault();

  closeModal();
});

modalWindow.addEventListener("click", function (event) {
  if (event.target === modalWindow) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (modalWindow.classList.contains("show") && event.code === "Escape") {
    closeModal();
  }
});

const modalTimerId = setTimeout(openModal, 60000);

window.addEventListener("scroll", showModalByScroll);

// Function

function closeModal() {
  modalWindow.classList.remove("show");
  document.body.classList.remove("no_scroll");
}

function openModal() {
  modalWindow.classList.add("show");
  document.body.classList.add("no_scroll");

  clearInterval(modalTimerId);
}

function showModalByScroll() {
  const htmlPage = document.documentElement;
  if (htmlPage.scrollTop + htmlPage.clientHeight >= htmlPage.scrollHeight) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

// Cards =========================================

class MenuCard {
  constructor(src, alt, title, description, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.description = description;
    this.parent = document.querySelector(parentSelector);
    this.price = price;
    this.transactionCourse = 27;
    this.classes = classes;

    this.changePrice();
  }

  changePrice() {
    this.price = this.price * this.transactionCourse;
  }

  renderCard() {
    const element = document.createElement("div");

    if (this.classes.length == 0) {
      this.defaultClass = "menu__item";
      element.classList.add(this.defaultClass);
    } else {
      this.classes.forEach((item) => element.classList.add(item));
    }

    element.innerHTML = `
			<img src=${this.src} alt=${this.alt} />
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.description}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		`;

    this.parent.append(element);
  }
}

new MenuCard(
  "img/tabs/elite.jpg",
  "elite",
  "Меню 'Шлюха'",
  `В меню “Премиум” мы используем не только красивый дизайн упаковки,
	но и качественное исполнение блюд. Красная рыба, морепродукты,
	фрукты - ресторанное меню без похода в ресторан!`,
  12,
  ".menu__field .container"
).renderCard();
