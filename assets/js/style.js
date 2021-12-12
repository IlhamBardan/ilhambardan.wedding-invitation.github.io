// Count Down Date
(() => {
  let countDownDate = new Date("Dec 15, 2021 00:00:00").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Clock Count Down Math
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Take time from id
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    // Time will be zero if time runs out
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("second").innerHTML = "00";
    }
  }, 1000);
})();

// Navigation Menu
(() => {
  $(document).ready(function () {
    $("ul li a").click(function () {
      $("li a").removeClass("active");
      $(this).addClass("active");
    });
  });
})();

// Google Map
//-6.529437939479915, 107.39507245777736
// -6.5295298273255495, 107.39471039114086
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "9ab6c594f3acee37",
    center: { lat: -6.5295298273255495, lng: 107.39471039114086 },
    zoom: 18,
  });
  // Marker Map
  marker = new google.maps.Marker({
    position: { lat: -6.529437939479915, lng: 107.39507245777736 },
    map,
  });
}

// Anime JS
(() => {
  const satu = document.getElementById("satu");
  const dua = document.getElementById("dua");
  const tiga = document.getElementById("tiga");

  anime({
    targets: satu,
    opacity: [0, 1],
    translateX: [-550, 0],
    duration: 1000, // 1 second
    delay: 500,
  });
  anime({
    targets: dua,
    opacity: [0, 1],
    translateX: [-550, 0],
    duration: 1000, // 1 second
    delay: 800,
  });
  anime({
    targets: tiga,
    opacity: [0, 1],
    translateX: [-550, 0],
    duration: 1000, // 1 second
    delay: 1000,
  });
})();

(() => {
  anime({
    targets: ".clock",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 700 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    opacity: [0, 1],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
  });
})();

// AOS
(() => {
  const parent = document.querySelectorAll(".parent");
  const friend = document.querySelectorAll(".friend");
  const gallery = document.querySelectorAll(".gallery-box");

  parent.forEach((parent, i) => {
    parent.dataset.aos = "zoom-in";
    parent.dataset.aosDelay = i * 200;
  });

  friend.forEach((friend, i) => {
    friend.dataset.aos = "zoom-in";
    friend.dataset.aosDelay = i * 500;
  });

  gallery.forEach((gallery, i) => {
    gallery.dataset.aos = "fade-down";
    gallery.dataset.aosDelay = i * 500;
  });

  AOS.init({
    once: true,
    duration: 2000,
  });
})();
