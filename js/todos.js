// Check Off Specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
	// if ($(this).css("color") === "rgb(128, 128, 128") {
	// 	$(this).css({
	// 		color: "black";
	// 		textdecoration:"none"; // no '-' in fields
	// 	});
	// } else {
	// 	$(this).css({
			
	// 	});
	// }
});


//Click on X to do remove action
$("ul").on("click","span",function(event){	// on will works on potential object
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// don't buble to parent event
	event.stopPropagation();
});


// Create a new Todo 
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});


$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});