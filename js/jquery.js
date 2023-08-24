$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    // arrows: true,
    // adaptiveHeight: true,
    // centerMode: true,
    // centerPadding: "300px",
    // focusOnSelect: true,
    mobileFirst: true,
    // vertical: true,
    infinite: true,
    // verticalSwiping: true,
    arrows: false,
  });
});
