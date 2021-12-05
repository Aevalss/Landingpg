$(function () {
  $(".rev_slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // centerPadding: true,
  });
  $(".rev_slider2").slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    // centerPadding: true,
  });
});
