$(document).ready(function() {
/* alert("JQuery is working!"); */

$("button").addClass("animated bounce");

$(".well").addClass("animated shake");

$("#target3").addClass("animated fadeOut");

$("#target5").removeClass("animated bounce");

$("h1").css("color", "red");

$("#target4").prop("disable", true);


$("#headingid").remove();

$("#target2").appendTo("#right-well");

$("#fadeinout").fadeIn(2500);

$("#target4").clone().appendTo("#left-well");

$("#target4").parent().css("background-color", "#FFFFE0");

$("#right-well").children().css("color", "orange");

$(".target:nth-child(1)").addClass("animated shake");


});
