var colors = ["red", "orange", "yellow"];

//colors
//returns ["red", "orange", "yellow"]

//colors[1]
//returns "orange"

//add in green
//colors[3] = "green"

//change colors
//colors[3] = "dark green";

var numbers = [22, 67, 33, 96, 88];
//What does the following line print?
console.log(numbers[numbers.length]);
//undefined

//nested or 2 dimensional array
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"],
];

//What is the result of this line?
console.log(friendGroups[2][0]);
//Mooney
//console.log(friendGroups[2]); ["Mooney", "Wormtail", "Prongs"],
//then the [0] index of that is Mooney