$(document).ready(function(){ 
	console.log("page is loaded");
	// Your code goes below!
var title = $("#title");
title.fadeOut(4000);
$("#title").css('color', 'green');

var words = $(".word");
words.hide();

$(".keep").show();

$("#we").fadeTo(4000,.2);

var love = $(".phrase");
love.hide();
love.fadeIn(5000);



});