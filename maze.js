"use strict";
$(document).ready(function () {
    var gamestart = false;

    $(".boundary").mouseover(function () {
        if (gamestart) {
            $(".boundary").addClass("youlose");
            alert("Sorry, You lost. :[");
            gamestart = false;
        }
    });

    $("#start").click(function () {
        gamestart = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started....");
    });

    $("#end").mouseover(function () {
        if (gamestart) {
            alert("You win! :]");
            gamestart = false;
        }
    });

    $("#maze").mouseleave(function () {
        if (gamestart) {
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, You lost. :[");
            gamestart = false;
        }
    });
});