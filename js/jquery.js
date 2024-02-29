$(function () {
  $(".opening-circle").delay(300).fadeIn(700);
  $("#opening").delay(2000).fadeOut(1000);

  function toggleImageIn() {
    $(".top-image").toggleClass("fadeIn");
  }
  function toggleLogoIn() {
    $(".top-logo-wrapper").toggleClass("fadeIn");
  }

  setTimeout(function () {
    toggleImageIn(); // 最初の toggleActive 関数の呼び出し
    setInterval(toggleImageIn, 15000); // 以降の 5 秒ごとの呼び出し
  }, 3300); // 3300 ミリ秒の遅延
  setTimeout(function () {
    toggleLogoIn();
    setInterval(toggleLogoIn, 15000);
  }, 18300);

  $(".slider").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "30%",
    pauseOnFocus: false,
    pauseOnHover: false,
    lazyLoad: "ondemand",
    prevArrow: '<div class="slick-prev">→</div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
    ],
  });

  const $tab = $("#tab-control");
  $tab.on("click", function () {
    $(".slider").slick("setPosition");
  });
});
