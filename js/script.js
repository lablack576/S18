$(document).ready(function () {
  $(".icon-mobile-nav.open").click(function () {
    $(".nav-list").css("display", "flex");
    $(".icon-mobile-nav.open").css("display", "none");
    $(".icon-mobile-nav.close").css("display", "flex");
  });

  $(".icon-mobile-nav.close").click(function () {
    $(".nav-list").css("display", "none");
    $(".icon-mobile-nav.close").css("display", "none");
    $(".icon-mobile-nav.open").css("display", "block");
  });
});
