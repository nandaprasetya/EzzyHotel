$(".btn-nav-link").mouseenter(function () {
    $(this).find(".inner-nav-link").addClass("active");
    $(this).find(".inner-nav-line").addClass("active");
  });
  $(".btn-nav-link").mouseleave(function () {
    $(this).find(".inner-nav-link").removeClass("active");
    $(this).find(".inner-nav-line").removeClass("active");
  });
  $(".btn-line").mouseenter(function () {
    $(this).find(".inner-line").addClass("active");
    $(this).find("img").addClass("active");
    $(this).find(".inner-btn-line").addClass("active");
  });
  $(".btn-line").mouseleave(function () {
    $(this).find(".inner-line").removeClass("active");
    $(this).find("img").removeClass("active");
    $(this).find(".inner-btn-line").removeClass("active");
  });
  var clickCount = 0;

  $("#nav-btn").click(function () {
    clickCount++;
    if (clickCount % 2 !== 0) {
      $(this).find("h1").text("CLOSE");
      $(this).find("h1").addClass("active");
      $(".nav-menu").addClass("active");
      $(".side-nav-menu").addClass("active");
      $(".close-nav").css("display", "block");
      $(this).find(".nav-line").addClass("active");
    } else {
      $(this).find("h1").text("MENU");
      $(this).find("h1").removeClass("active");
      $(".nav-menu").removeClass("active");
      $(".side-nav-menu").removeClass("active");
      $(".close-nav").css("display", "none");
      $(this).find(".nav-line").removeClass("active");
    }
  });

  $(".close-nav").click(function () {
    $("#nav-btn").click();
  });

  $(".outer-nav-menu").mouseenter(function () {
    $(".outer-nav-menu img").removeClass("active");
    $(".outer-nav-menu h1").css("color", "#002039");
    $(this).find("h1").css("color", "#d09e13");
    $(this).find("img").addClass("active");
    // $(".content-side-nav1").removeClass("active");
  });
  $(".outer-nav-menu").mouseleave(function () {
    $(this).find("h1").css("color", "#002039");
    $(this).find("img").removeClass("active");
  });

  $("#btn-link-home").mouseenter(function () {
    $(".content-side-nav1").addClass("active");
    $(".content-side-nav2").removeClass("active");
    $(".content-side-nav3").removeClass("active");
    $(".content-side-nav4").removeClass("active");
    $(".content-side-nav5").removeClass("active");
  });
  $("#btn-link-home").mouseleave(function () {
    $(".content-side-nav1").removeClass("active");
  });
  $("#btn-link-about").mouseenter(function () {
    $(".content-side-nav2").addClass("active");
    $(".content-side-nav1").removeClass("active");
    $(".content-side-nav3").removeClass("active");
    $(".content-side-nav4").removeClass("active");
    $(".content-side-nav5").removeClass("active");
  });
  $("#btn-link-about").mouseleave(function () {
    $(".content-side-nav2").removeClass("active");
  });
  $("#btn-link-room").mouseenter(function () {
    $(".content-side-nav3").addClass("active");
    $(".content-side-nav2").removeClass("active");
    $(".content-side-nav1").removeClass("active");
    $(".content-side-nav4").removeClass("active");
    $(".content-side-nav5").removeClass("active");
  });
  $("#btn-link-room").mouseleave(function () {
    $(".content-side-nav3").removeClass("active");
  });
  $("#btn-link-feature").mouseenter(function () {
    $(".content-side-nav4").addClass("active");
    $(".content-side-nav2").removeClass("active");
    $(".content-side-nav3").removeClass("active");
    $(".content-side-nav1").removeClass("active");
    $(".content-side-nav5").removeClass("active");
  });
  $("#btn-link-feature").mouseleave(function () {
    $(".content-side-nav4").removeClass("active");
  });
  $("#btn-link-facilities").mouseenter(function () {
    $(".content-side-nav5").addClass("active");
    $(".content-side-nav2").removeClass("active");
    $(".content-side-nav3").removeClass("active");
    $(".content-side-nav4").removeClass("active");
    $(".content-side-nav1").removeClass("active");
  });
  $("#btn-link-facilities").mouseleave(function () {
    $(".content-side-nav5").removeClass("active");
  });

  function openTransition() {
    setTimeout(() => {
      $(".transition").addClass("open-web");
    }, 800);
  }

  function closeTransition() {
    setTimeout(() => {
      $(".transition").removeClass("open-web");
    }, 300);
  }

  $("#btn-link-home").click(function(){
    closeTransition();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
  $("#btn-link-about").click(function(){
    closeTransition();
    setTimeout(() => {
      window.location.href = "about.html";
    }, 1000);
  });
  $("#btn-link-room").click(function(){
    closeTransition();
    setTimeout(() => {
      window.location.href = "room.html";
    }, 1000);
  });
  $("#btn-link-feature").click(function(){
    closeTransition();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
  $("#btn-link-facilities").click(function(){
    closeTransition();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });