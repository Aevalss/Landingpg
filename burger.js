$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    // От скроллинга при открытом burger
    $("body").toggleClass("lock");
  });
});
