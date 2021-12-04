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
