 // we need to set the conservative etc variables to zero. Then use if statements to assign selections value to those variables.

 
var weed = parseInt($("#weed").val());
var money = parseInt($("#money").val());
var music = parseInt($("#music").val());
var age = parseInt($("#age").val());
var food = parseInt($("#food").val());

var selection = function (weed, money, music, age, food){
  return weed + money + music + age + food;
};


$(document).ready(function() {
  $("#politicpicker").submit(function (event) {
    debugger;
    event.preventDefault();
    if (selection <= 8) {
    $("#liberal").show();
    $("#moderate").hide();
    $("#conservative").hide();
  }
  else if (selection > 8 && selection <= 13) {
    $("#liberal").hide();
    $("#moderate").show();
    $("#conservative").hide();
    }
    else if (selection <= 13) {
    $("#liberal").hide();
    $("#moderate").hide();
    $("#conservative").show();
    }
  });
});
