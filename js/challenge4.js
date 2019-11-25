$("#ch4form").submit(function(){
    var validInput = true;
    var name = $("#fullname");
    var address = $("#streetaddr");
    console.log("Here");
    console.log(name);
    console.log(address);
    if($("#fullname").val() == "") {
        $("#nameerrormsg").css("display", "block");
        validInput = false;
    }
    else {
        $("#nameerrormsg").css("display", "none");
    }
    if ($("#streetaddr").val() == "") {
        $("#addrerrormsg").css("display", "block");
        validInput = false;
    }
    else{
        $("#addrerrormsg").css("display", "none");
    }
    return validInput;
});