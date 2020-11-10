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
