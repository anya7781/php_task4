$(document).ready(function(){
	
	/* Changing pictures */
	
	var main = $(".images__main").attr("src");
	var obj = $("img[src$="+main+"][class$='several__image']");
	obj.css('opacity', '0.4');
	
	$(".several__image" ).click(function() {
		var main = $(".images__main").attr("src");
		var obj = $("img[src$="+main+"][class$='several__image']");
		obj.css('opacity', '1');
		var src = $(this).attr('src');
		$(".images__main").attr('src', src);
		$(this).css('opacity', '0.4');
	});
	
})