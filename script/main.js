function yes() {
  var img = document.getElementById("img");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var spn = document.getElementById("hide");

  document.getElementById("reward").style.display = "block";
  btn1.classList.add("cont");
  btn2.classList.add("cont");
  spn.classList.add("cont");

  img.src = "../images/yay-kitty.gif";
  document.getElementById("h1").innerHTML = "I LOVE YOU SO MUCH!!!!";
  img.classList.remove("img-ask");
}
function reward() {
  var img = document.getElementById("img");
  var btn = document.getElementById("reward");
  img.src = "../images/reward.jpg";
  document.getElementById("h1").innerHTML =
    "YOU'LL RECEIVE YOUR REWARD SOON!!! 😘😘😘<br> MwaMwaMwa..";

  btn.style.display = "none";
}
