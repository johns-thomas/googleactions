var countDownDate = new Date("Oct 13, 2019 09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("D").innerHTML = days;
  document.getElementById("H").innerHTML = hours;
  document.getElementById("M").innerHTML = minutes;
  document.getElementById("S").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "BEGAN";
  }
}, 1000);


//Monster
