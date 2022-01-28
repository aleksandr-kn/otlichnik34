$(function () {
  // $(".slider").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   arrows: false,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 1140,
  //       settings: {
  //         slidesToShow: 2,
  //         slidersToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 1,
  //         slidersToScroll: 1,
  //       },
  //     },
  //   ],
  // });

  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    autoplay: true,
    infinite: false,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 586,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
