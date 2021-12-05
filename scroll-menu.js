$(document).scroll(function (e) {
  $(window).scrollTop() > 450
    ? $(".header").addClass("nav__color")
    : $(".header").removeClass("nav__color");
});
$(document).ready(function () {
  $("#header__menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 500);
  });
});
$(document).ready(function () {
  $("#mainbtn").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 500);
  });
});
