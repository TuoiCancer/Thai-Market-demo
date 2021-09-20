const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBar = $(".menu__bar");
const menuItems = $(".menu__items");
const Top = $(".top");

menuBar.addEventListener("click", function (e) {
  menuBar.classList.toggle("active");
  menuItems.classList.toggle("active");
});

window.addEventListener("scroll", function (e) {
  const x = window.pageYOffset;
  if (x > 80) {
    Top.classList.add("active");
  } else {
    Top.classList.remove("active");
  }
});

const menuBtns = $$(".menu-btn");
const foodContents = $$(".food-content");
const line = $(".menu-title .line");
const menuBtnActive = $(".menu-btn.active");

line.style.left = menuBtnActive.offsetLeft + "px";
const left = menuBtnActive.offsetLeft + "px";
console.log(left);
line.style.width = menuBtnActive.offsetWidth + "px";

menuBtns.forEach((item, index) => {
  const foodItem = foodContents[index];

  item.onclick = function () {
    $(".menu-btn.active").classList.remove("active");
    $(".food-content.active").classList.remove("active");
    this.classList.add("active");
    foodItem.classList.add("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
  };
});
