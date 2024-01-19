$(document).ready(function () {
  // header menu js
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
      $("header").addClass("nav-fixed");
    } else {
      $("header").removeClass("nav-fixed");
    }
  });

  $(".checkbtn").on("click", function () {
    $("body").toggleClass("menu-open");
  });

  // icon close js
  const toggle = document.getElementById("toggle");
  toggle.onclick = function () {
    toggle.classList.toggle("active");
  };

  // slider js
  $(".slider-for").slick({
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    asNavFor: ".slider-for",
    centerMode: true,
    variableWidth: true,
    asNavFor: ".slider-for",
    responsive: [
      {
        breakpoint: 1064,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });

  $("#prev").click(function () {
    $(".slider-nav").slick("slickPrev");
  });
  $("#next").click(function () {
    $(".slider-nav").slick("slickNext");
  });

  // slider blog js
  $(".slider-blog").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  // compaines logo slider js
  $(".autoplay").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
