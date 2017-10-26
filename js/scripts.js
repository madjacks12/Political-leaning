 // we need to set the conservative etc variables to zero. Then use if statements to assign selections value to those variables.
var conservative = 0
var moderate = 0
var liberal = 0

var weed = parseInt($("#weed").val());
var money = parseInt($("#money").val());
var music = parseInt($("#music").val());
var age = parseInt($("#age").val());
var food = parseInt($("#food").val());

if (weed === 1){
  liberal += 1;
} else if (weed === 2) {
  moderate += 1;
} else {
  conservative += 1;
}

if (money === 1){
  liberal += 1;
} else if (money === 2) {
  moderate += 1;
} else {
  conservative += 1;
}

if (music === 1){
  liberal += 1;
} else if (music === 2) {
  moderate += 1;
} else {
  conservative += 1;
}

if (age === 1){
  liberal += 1;
} else if (age === 2) {
  moderate += 1;
} else {
  conservative += 1;
}

if (food === 1){
  liberal += 1;
} else if (food === 2) {
  moderate += 1;
} else {
  conservative += 1;
}


$(document).ready(function() {
  $("#politicpicker").submit(function (event) {
    event.preventDefault();
    debugger;
    if (liberal > moderate && liberal > conservative) {
    $("#liberal").show();
    $("#moderate").hide();
    $("#conservative").hide();
  } else if (moderate > conservative && moderate > liberal) {
    $("#liberal").hide();
    $("#moderate").show();
    $("#conservative").hide();
    } else if (conservative > liberal && conservative > moderate) {
    $("#liberal").hide();
    $("#moderate").hide();
    $("#conservative").show();
    }

  });
});
