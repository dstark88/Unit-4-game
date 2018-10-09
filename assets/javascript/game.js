
$(document).ready(function() {
    $("#randomGoal").on("click", function() {
        // alert ("clicked");
        var randomGoal = Math.floor(Math.random() * 120) + 1;
        // alert(randomNum);
        // document.getElementById("random-number").textContent = randomNum;
        $("#randomGoal").text(randomGoal);
    });
});
console.log(randomGoal);

//clicking on a bike
$(".bike").on("click", function() {
    alert("you clicked a bike");
})

// clicking counter on bike
var counter = 0; //keep var outside so it doesn't restart at 0 each time 
$(".bike").on("click", function() {
    counter += 1; //this is where the var is updated and keeps counting
    alert("you clicked this crystal " + counter + " times");
});
// adding up by 10. can change how much it's changing
var counter = 0; //keep var outside so it doesn't restart at 0 each time 
$(".bike").on("click", function() {
    counter += 10; //this is where the var is updated and keeps counting up by ten in this example 
    alert("you clicked this crystal " + counter + " times");
});

var targetNumber = 20; //would want to make random
$("#number-to-guess").text(targetNumber);// populates the html to print on page targetNumber is printing
var counter = 0; //everygame it starts at 0
alert("new score: " + counter);

var numberOptions = [10, 11],
//gives random number between 0 and 0.9999, either or coin flip. either get a 10 or 11 in this case
var increment = numberOptions[Math.round(Math.random())];
counter += increment; //either adding 10 or 11 randomly if it is outside of a click event that number will always be the same (static until page is refreshed or reset)

if (counter === targetNumber){
    alert("you won");
    //dont let them go over the number
}else if (counter > targetNumber) {
    alert("you lose");
}

var numberOptions = [10, 5, 3, 7]; //should be random, will need to update this to be random. in the click event how to grab that number
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>"),
    imageCrystal.addClass("crystal-image");
    //adding the picture to the page
    imageCrystal.attr("scr", "https.....");
    //data- needs to be there but crystalvalue can be unique, numberOptions is what the crystal is worth. this is the hidden value on html
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    //putting it on the page
    $("#crystals").append(imageCrystal);
}
$(".bike").on("click", function() {
console.log(this);
//formula for adding value to crystals
var crystalvalue = $(this).attr("data-crystalvalue");
//take the string and turn it into a value or number
crystalvalue = parseInt(crystalvalue);
//add to the counter of the value
counter += crystalvalue;
alert("new score: " + counter);

if (counter === targetNumber) {
    alert("you win");
} else if (counter > targetNumber) {
    alert("you lose");
}
});

// function goalRange(start, end) {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
// }
// var goalNum = goalRange(19, 120);
//     console.log(goalRange);

// var goalNum = goalRange[Math.floor(Math.random() * goalRange.length)];
//     console.log(goalNum);
//Psudocoding
//
//goal random number picked by computer 19-120
        //print to screeen
//random number assigned to each crystal 1-12
//user selects a crystal
//add crystal amount to user total
// if user hits goal computer number 
  //then they win, add one point to wins
  //reset game
    //user total goes to 0
    //goal random computer number is selected
    //crystals are assigned new random numbers
//if user guess is over goal computer number
  //they they lose, add one point to losses
  //reset game
    //user total goes to 0
    //goal random computer number is selected
    //cyrstals are assigned new random numbers