$(document).ready(function () {
    
    var winsCount = 0;
    var lossesCount = 0;
    var targetScore = 0;
    var playerScore = 0;
    var crystalValues = [];
    var randomValue = 0;
    var whichCrystal = "";

    function initializeGame() {
        
        //Hide message, reveal crystals
        $(".winLoseMessage").hide();
        $(".crystal").css("visibility", "visible");
        
        //Choose random target score and display it
        targetScore = Math.floor((Math.random() * 102) + 19);
        $("#targetScore").text(targetScore);
        
        //Choose random numbers for crystals and ensure they are 4 DIFFERENT values
        crystalValues = [];
        for (i = 0; i < 4; i++) {
            randomValue = Math.floor((Math.random() * 12) + 1);
            if (crystalValues.indexOf(randomValue) > -1) {
                i--;
            } else {
                crystalValues.push(randomValue);
            }
        }

        //Reset player's score and display it
        playerScore = 0;
        $("#yourScore").text(playerScore);
    }

    function playerWin() {
                
        //Set win text
        $("#winLoseText").text("Congratulations...you win!");
        
        //Set button color to green
        $("#playAgainButton").removeClass("btn-danger");
        $("#playAgainButton").addClass("btn-success");
        
        //Hide crystals and display win message with Play Again button
        $(".crystal").css("visibility", "hidden");
        $(".winLoseMessage").show();
        
        //Update wins
        winsCount++;
        $("#winsCount").text(winsCount);

        //Start next game on button click
        $("#playAgainButton").click(initializeGame);
    }

    function playerLose() {
        
        //Set loss text
        $("#winLoseText").text("Sorry...you lost.");
        
        //Set button color to red
        $("#playAgainButton").removeClass("btn-success");
        $("#playAgainButton").addClass("btn-danger");
        
        //Hide crystals and display loss message with Play Again button
        $(".crystal").css("visibility", "hidden");
        $(".winLoseMessage").show();
        
        //Update losses
        lossesCount++;
        $("#lossesCount").text(lossesCount);

        //Start next game on button click
        $("#playAgainButton").click(initializeGame);
    }

    $(".crystal").on("click", function () {
        
        //Check which crystal was clicked by checking crystal-index attribute
        whichCrystal = ($(this).attr("crystal-index"));
        
        //Get crystal value using corresponding array index, add it to the player's score and update display
        playerScore += crystalValues[whichCrystal];
        $("#yourScore").text(playerScore);
        
        //Check for loss or win
        if (playerScore > targetScore) {
            playerLose();
        } else if (playerScore === targetScore) {
            playerWin();
        }
    });

    //Start the game
    initializeGame();

});