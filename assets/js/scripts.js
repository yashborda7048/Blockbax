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

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Adjust threshold based on requirement
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //   // Determine which draw-line to adjust based on the intersecting section's ID
        //   let drawLineId;
        //   if (entry.target.id === "asset_topology") {
        //     drawLineId = "draw-line-1";
        //   } else if (entry.target.id === "demo-2") {
        //     // Replace "demo-2" with the ID of the section corresponding to draw-line-2
        //     drawLineId = "draw-line-2";
        //   }

        //   const drawLine = document.getElementById(drawLineId);
        //   if (drawLine) {
        //     // Adjust the height calculation as needed for your layout
        //     const newHeight = entry.target.offsetHeight + entry.target.offsetTop;
        //     drawLine.style.height = `${newHeight}px`;
        //   }
        // Update active state in the sidebar
        updateActiveNavLink(entry.target.id);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll(".timeline-item").forEach((section) => {
    observer.observe(section);
  });

  function updateActiveNavLink(activeId) {
    // Remove active class from all nav links
    document.querySelectorAll(".feature_list .nav").forEach((nav) => {
      nav.classList.remove("active");
    });

    // Add active class to the current nav link
    const activeNavLink = document.querySelector(
      `.feature_list .nav[href="#${activeId}"]`
    );
    if (activeNavLink) {
      activeNavLink.classList.add("active");

      // Close all submenus
      document.querySelectorAll(".sub_menu").forEach((subMenu) => {
        subMenu.classList.remove("show");
      });

      // Open the submenu of the active item, if it exists
      const parentSubMenu = activeNavLink.closest(".sub_menu");
      if (parentSubMenu) {
        parentSubMenu.classList.add("show");
        const parentMenu = parentSubMenu.previousElementSibling;
        if (parentMenu) {
          parentMenu.classList.add("active");
        }
      }
    }
  }
});

// scrolling Timeline 1
var items = $(".timeline li"),
  timelineHeight = $(".timeline ul").height(),
  greyLine = $(".timeline-with-icons"),
  lineToDraw = $(".draw-line");

if (lineToDraw.length) {
  $(window).on("scroll", function () {
    var redLineHeight = lineToDraw.height(),
      greyLineHeight = greyLine.height(),
      windowDistance = $(window).scrollTop(),
      windowHeight = $(window).height() / 2,
      timelineDistance = $(".timeline").offset().top;

    if (windowDistance >= timelineDistance - windowHeight) {
      line = windowDistance - timelineDistance + windowHeight;

      if (line <= greyLineHeight) {
        lineToDraw.css({
          height: line + 20 + "px",
        });
      }
    }

    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
    items.each(function (index) {
      var circlePosition = $(this).offset();

      if (bottom > circlePosition.top) {
        $(this).addClass("in-view");
      } else {
        $(this).removeClass("in-view");
      }
    });
  });
}

// scrolling timeline 2
var itemss = $(".timelines li"),
  greyLines = $(".timeline-with-icons1"),
  linesToDraw = $(".draw-lines");

if (linesToDraw.length) {
  $(window).on("scroll", function () {
    var greyLineHeights = greyLines.height(),
      windowDistances = $(window).scrollTop(),
      windowHeights = $(window).height() / 2,
      timelineDistances = $(".timelines").offset().top;

    if (windowDistances >= timelineDistances - windowHeights) {
      line = windowDistances - timelineDistances + windowHeights;

      if (line <= greyLineHeights) {
        linesToDraw.css({
          height: line + 20 + "px",
        });
      }
    }

    var bottom = linesToDraw.offset().top + linesToDraw.outerHeight(true);
    itemss.each(function (index) {
      var circlePosition = $(this).offset();

      if (bottom > circlePosition.top) {
        $(this).addClass("in-view");
      } else {
        $(this).removeClass("in-view");
      }
    });
  });
}
