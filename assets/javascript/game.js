
//create number range 
var minNum = 19;
var maxNum = 120;
// var randomGoal = randomNumberRange(minNum, maxNum);
var randomGoal = Math.floor(Math.random()*120)+19;

//counter to track the users total clicks on a bike
var counter = 0;
var wins = 0;
var losses = 0;
var minBikeNum = 1;
var maxBikeNum = 12;

resetGame();

$(".bike").on("click", function() {
    var bikeValue = ($(this).attr("data-bikeValue"));
    bikeValue = parseInt(bikeValue);
    // counter += increment;
    counter += bikeValue; //adds bikes as the user clicks
    // alert("you clicked this bike: " + counter);
    $(".totalScore").text(counter);
    
    console.log(counter, "counter");
    console.log(randomGoal, "goal");

    if (counter === randomGoal) {
        // alert("you win");
        $(".totalScore").text(counter);
        wins++;
        $(".wins").text(wins);
        console.log("won");
        setTimeout(function() {
            resetGame()},10000);

    } else if (counter > randomGoal) {
        // alert("you lose");
        $(".totalScore").text(counter);
        losses++;
        $(".losses").text(losses);
        console.log("lost");
        setTimeout(function() {
            resetGame()},3000);
    }
})
function resetGame() {
    //reset the random goal number at reset game
    randomGoal = Math.floor(Math.random()*120)+19;
        $(".randomGoal").text(randomGoal);

    //generate a random number for each bike at reset game
    var bike1 = Math.floor(Math.random()*12)+1;
        $(".1").attr("data-bikeValue", bike1);
        console.log(bike1 +"bike 1");
    var bike2 = Math.floor(Math.random()*12)+1;
        $(".2").attr("data-bikeValue", bike2);
    var bike3 = Math.floor(Math.random()*12)+1;
        $(".3").attr("data-bikeValue", bike3);
    var bike4 = Math.floor(Math.random()*12)+1;
        $(".4").attr("data-bikeValue", bike4);
        
    //bring the counter back to 0 at reset game
    counter = 0;
    $(".totalScore").text(counter);
    console.log("reset here");
}

// //Psudocoding

// //random number assigned to each crystal 1-12
// //user selects a crystal
// //add crystal amount to user total
// // if user hits goal computer number 
//   //then they win, add one point to wins
//   //reset game
//     //user total goes to 0
//     //goal random computer number is selected
//     //crystals are assigned new random numbers
// //if user guess is over goal computer number
//   //they they lose, add one point to losses
//   //reset game
//     //user total goes to 0
//     //goal random computer number is selected
//     //cyrstals are assigned new random numbers