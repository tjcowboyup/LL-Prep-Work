$(document).ready(function() {
	
	console.log("Script included!");

	var $ingredient= $('ul li');

	$('img').dblclick(function(){
		$('img').hide();
	});
	$('h2').dblclick(function(){
		$('img').show();
	});

	$ingredient.click(function(){
		$(this).css('font-style', 'line-through');
	});

});
