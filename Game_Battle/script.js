var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var warriorStats = document.getElementById('warriorStats');
var warriorHP = document.getElementById('warriorHP');
var devilHP = document.getElementById('devilHP');
var warriorMoves = document.getElementById('warriorMoves');
var speMoves = document.getElementById('speMoves');

var music_status = "on";
var musicControls = document.getElementById("music-controls");
var battleMusic = document.getElementById("myAudio");

var WarriorHP = 100;
var DevilHP = 100;

function beginBattle() {
    bottomRow.innerHTML = "Pick warrior's ability by clicking the button above.";
    for (var x = 0; x < stats.length; x++) {
        stats[x].style.visibility = "visible";
    }
    battleMusic.play();
    battleMusic.volume = 0.2;
}

function devilAttack() {
    var attackchoice = Math.round(Math.random() * 3);
    if (attackchoice == 1) {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 7) {
            var dmg = Math.round(Math.random() * 10) + 10;
            WarriorHP -= dmg;
            if (WarriorHP < 0) {
                WarriorHP = 0;
            }
            bottomRow.innerHTML += "<br>Devil hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + WarriorHP + " " + "hp.";
            var warriorHPBarWidth = (WarriorHP / 100) * 300;
            warriorHP.style.width = warriorHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Devil missed!";
        }
    } else if (attackchoice == 2) {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 7) {
            var dmg = Math.round(Math.random() * 15) + 15;
            WarriorHP -= dmg;
            if (WarriorHP < 0) {
                WarriorHP = 0;
            }
            bottomRow.innerHTML += "<br>Devil hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + WarriorHP + " " + "hp.";
            var warriorHPBarWidth = (WarriorHP / 100) * 300;
            warriorHP.style.width = warriorHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Devil missed!";
        }
    } else {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 3) {
            var dmg = Math.round(Math.random() * 20) + 20;
            WarriorHP -= dmg;
            if (WarriorHP < 0) {
                WarriorHP = 0;
            }
            bottomRow.innerHTML += "<br>Devil hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + WarriorHP + " " + "hp.";
            var warriorHPBarWidth = (WarriorHP / 100) * 300;
            warriorHP.style.width = warriorHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Devil missed!";
        }
    }
    if (WarriorHP == 0) {
        bottomRow.innerHTML += "<br>Devil has defeated you!!!<br><button onclick='restartGame()'>Play Again?</button>";
        warriorMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";

    }
}

function attack() {
    var hitChance = Math.round(Math.random() * 10);
    if (hitChance <= 7) {
        var dmg = Math.round(Math.random() * 10) + 10;
        DevilHP -= dmg;
        if (DevilHP < 0) {
            DevilHP = 0;
        }

        bottomRow.innerHTML = "You hit Devil with your Punch, doing" + " " + dmg + " " + "damage.Devil now has" + " " + DevilHP + " " + "hp.";
        var devilHPBarWidth = (DevilHP / 100) * 300;
        devilHP.style.width = devilHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (DevilHP == 0) {
        bottomRow.innerHTML += "<br>You have successfully defeated Devil!!!!!<br><button onclick='restartGame()'>Play Again?</button>";
        warriorMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";

    } else {
        devilAttack()
    }
}

function special() {
    var hitChance = Math.round(Math.random() * 20);
    if (hitChance <= 7) {
        var dmg = Math.round(Math.random() * 20) + 20;
        DevilHP -= dmg;
        if (DevilHP < 0) {
            DevilHP = 0;
        }
        bottomRow.innerHTML = "You hit Devil with your Blast, doing" + " " + dmg + " " + "damage. Devil now has" + " " + DevilHP + " " + "hp.";
        var devilHPBarWidth = (DevilHP / 100) * 300;
        devilHP.style.width = devilHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (DevilHP == 0) {
        bottomRow.innerHTML += "<br>You have successfully defeated Devil!!!!!<br><button onclick='restartGame()'>Play Again?</button>";
        warriorMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";
    } else {
        devilAttack()
    }
}



function restartGame() {
    WarriorHP = 100;
    DevilHP = 100;
    var warriorHPBarWidth = (WarriorHP / 100) * 300;
    warriorHP.style.width = warriorHPBarWidth + "px";
    var devilHPBarWidth = (DevilHP / 100) * 300;
    devilHP.style.width = devilHPBarWidth + "px";
    warriorMoves.style.visibility = "visible";
    speMoves.style.visibility = "visible";
    beginBattle();
}