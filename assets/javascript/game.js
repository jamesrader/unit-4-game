$(document).ready(function () {
    var winsCount = 0;
    var lossesCount = 0;
    var targetScore = 0;
    var playerScore = 0;
    var crystalValues = [];
    var randomValue = 0;
    var whichCrystal = "";


    function initializeGame() {
        $(".winLoseMessage").hide();
        //$(".loseMessage").hide();
        //$(".playAgain").hide();
        $(".crystal").css("visibility", "visible");
        //$(".loseMessage").css("visibility", "hidden");
        //$(".winMessage").css("visibility", "hidden");
        targetScore = Math.floor((Math.random() * 102) + 19);
        $("#targetScore").text(targetScore);
        crystalValues=[];
        for (i = 0; i < 4; i++) {
            randomValue = Math.floor((Math.random() * 12) + 1);
            if (crystalValues.indexOf(randomValue) > -1) {
                console.log("DUPE!")
                i--;
            } else {
                crystalValues.push(randomValue);
            }
        }
        console.log(crystalValues);
        playerScore = 0;
        $("#yourScore").text(playerScore);
        $("#winsCount").text(winsCount);
        $("#lossesCount").text(lossesCount);
    }

    function playerWin() {
        //$(".crystal").toggle();
        $(".winLoseMessage").show();
        //$(".playAgain").show();
        $(".crystal").css("visibility", "hidden");
        //$(".winMessage").css("visibility", "visible");
        //alert("You win!!!");
        winsCount++;
        $("#winsCount").text(winsCount);
        //initializeGame();
    }

    function playerLose() {
        //$(".crystal").toggle();
        $(".winLoseMessage").toggle();
        //$(".playAgain").show();
        $(".crystal").css("visibility", "hidden");
        //$(".loseMessage").css("visibility", "visible");

        //alert("You lose!!!");
        lossesCount++;
        $("#lossesCount").text(lossesCount);
        //initializeGame();
    }

    $(".crystal").on("click", function () {
        whichCrystal = ($(this).attr("crystal-index"));
        playerScore += crystalValues[whichCrystal];
        $("#yourScore").text(playerScore);
        if (playerScore > targetScore) {
            playerLose();
        } else if (playerScore === targetScore) {
            playerWin();
        }
    });



    initializeGame();

});