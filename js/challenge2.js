$("#useBilling").click(function(){
	if (this.checked){
		console.log("selected");
		$("#home").val($("#billing").val());
		$("#home").prop('disabled', true); 
	}
	else{
		console.log("Not Selected");
		$("#home").val("");
		$("#home").prop('disabled', false);
	}
});
