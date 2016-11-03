
var letter = "X";

function click(id) {
    var element = document.getElementById(id);
    element.innerHTML = letter;
    if (letter == "X") {
        letter = "O";
    } else if (letter == "O") {
        letter = "X";
    }
    document.getElementById("info").innerHTML = letter + "'s turn";
    check();
}

function check() {
    console.log("check() is not yet implemented");
}


document.getElementById("slot1").addEventListener("click", function() {click("slot1");});
document.getElementById("slot2").addEventListener("click", function() {click("slot2");});
document.getElementById("slot3").addEventListener("click", function() {click("slot3");});
document.getElementById("slot4").addEventListener("click", function() {click("slot4");});
document.getElementById("slot5").addEventListener("click", function() {click("slot5");});
document.getElementById("slot6").addEventListener("click", function() {click("slot6");});
document.getElementById("slot7").addEventListener("click", function() {click("slot7");});
document.getElementById("slot8").addEventListener("click", function() {click("slot8");});
document.getElementById("slot9").addEventListener("click", function() {click("slot9");});

