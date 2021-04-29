if (window.performance.navigation.type === 1) {
  rollDice();
}

function rollDice() {
var randomNumber1 = Math.floor(Math.random() *6)+1;
document.querySelector(".img1").setAttribute("src","dice" + randomNumber1 +".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","dice" + randomNumber2 +".png");
if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2){
   document.querySelector("h1").textContent = "🚩 Player 2 Wins";
}
else {
   document.querySelector("h1").textContent = "Draw";
}
}
