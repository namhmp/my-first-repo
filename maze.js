"use strict";
$(document).ready(function () {
    var gamestart = false;
	const loseText = "Sorry, You lost. :[";
	const winText = "You win! :]";
	const gameStarted = "Game started....";
	const gameOver = "Game is over. Click the \"S\" to begin.";

    $(".boundary").mouseover(function () {
        if (gamestart) {
            $(".boundary").addClass("youlose");
			$("#status").text(gameOver);
            alert(loseText);
            gamestart = false;
        }
    });

    $("#start").click(function () {
        gamestart = true;
        $(".boundary").removeClass("youlose");
        $("#status").text(gameStarted);
    });

    $("#end").mouseover(function () {
        if (gamestart) {
            alert(winText);
            gamestart = false;
        }
    });

    $("#maze").mouseleave(function () {
        if (gamestart) {
            $(".boundary").addClass("youlose");
            $("#status").text(gameOver);
            gamestart = false;
        }
    });
});