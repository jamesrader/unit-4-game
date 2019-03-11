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
        $(".crystal").css("visibility", "visible");
        targetScore = Math.floor((Math.random() * 102) + 19);
        $("#targetScore").text(targetScore);
        crystalValues = [];

        for (i = 0; i < 4; i++) {
            randomValue = Math.floor((Math.random() * 12) + 1);
            if (crystalValues.indexOf(randomValue) > -1) {
                i--;
            } else {
                crystalValues.push(randomValue);
            }
        }
        
        playerScore = 0;
        $("#yourScore").text(playerScore);
        $("#winsCount").text(winsCount);
        $("#lossesCount").text(lossesCount);
    }

    function playerWin() {
        $("#winLoseText").text("Congratulations...you win!");
        $("#playAgainButton").removeClass("btn-danger");
        $("#playAgainButton").addClass("btn-success");
        $(".winLoseMessage").show();
        $(".crystal").css("visibility", "hidden");
        winsCount++;
        $("#winsCount").text(winsCount);
        $("#playAgainButton").click(initializeGame);
    }

    function playerLose() {
        $("#winLoseText").text("Sorry...you lost.");
        $("#playAgainButton").removeClass("btn-success");
        $("#playAgainButton").addClass("btn-danger");
        $(".winLoseMessage").show();
        $(".crystal").css("visibility", "hidden");
        lossesCount++;
        $("#lossesCount").text(lossesCount);
        $("#playAgainButton").click(initializeGame);
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