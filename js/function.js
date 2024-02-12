function rollDice() {
    var diceImage = document.querySelector("#dice img");
    var rollingImage = document.getElementById("rollingImage");

    rollingImage.style.display = "inline";
    setTimeout(function() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        rollingImage.style.display = "none";
        diceImage.src = "img/" + randomNumber + ".png";
    }, 300);
}