$( document ).ready(function() {
    setWelcomeCard();
    setRecs();
    $(".add-food-btn").click(function() {
       setAddModal($(this).attr('data-foodID'));
    });
});
function setWelcomeCard(){
    $("#wcGoal").html("2000");
    $("#wcFood").html("0");
    $("#wcRemaining").html("1");
    $("#wcHeadRemaining").html("1");
    $("#wcHello").html("Mike");

}
function setRecs(){
    for(let i =1; i<5;i++){
        $("#recTitle"+i).html("Food");
        $("#recReason"+i).html("Protien");
        $("#recCal"+i).html("100");
        $("#recCarb"+i).html("50");
        $("#recProtein"+i).html("50");
        $("#recFat"+i).html("50");
        $("#recMore"+i).attr("data-foodID" , "id");
    }

}

function setAddModal(data){
    console.log(data);
    //make sure the colapsible is colapsed
    $("#addModalTitle").html("Burger");
    $("#addModalTitle2").html("Burger");
    $("#addModalRecReason").html("protein");
    $("#addModalCals").html("0");
    $("#addModalCarbs").html("0");
    $("#addModalFat").html("0");
    $("#addModalProtein").html("0");
    $("#addModalSatFat").html("0");
    $("#addModalPolyFat").html("0");
    $("#addModalTransFat").html("0");
    $("#addModalCholesterol").html("0");
    $("#addModalSodium").html("0");
    $("#addModalPotassium").html("0");
    $("#addModalFiber").html("0");
    $("#addModalSugar").html("0");
    $("#addModalVitA").html("0");
    $("#addModalVitC").html("0");
    $("#addModalCalcium").html("0");
    $("#addModalIron").html("0");
}

