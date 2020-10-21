$(document).ready(function() {
    setRecs();
    $(".add-food-btn").click(function() {
        setAddModal($(this).attr('data-foodID'));
    });
    $(".dontRec-btn").click(function() {
        $('#dontRecConfirmBTN').attr('data-foodID', $(this).attr('data-foodID'));
    });
    $("#dontRecConfirmBTN").click(function() {
        dontRec($(this).attr('data-foodID'));
    });
    $("#creatFoodForm").onsubmit = function (){
     console.log(1);
    }
    $('#creatFoodForm').submit(function(e) {
        console.log("1");
        dontRec(1);
    });


});

function setRecs(){
    for(let i =1; i<5;i++){
        $("#recTitle"+i).html("Food");
        $("#recReason"+i).html("Protien");
        $("#recCal"+i).html("100");
        $("#recCarb"+i).html("50");
        $("#recProtein"+i).html("50");
        $("#recFat"+i).html("50");
        $("#recMore"+i).attr("data-foodID" , "id");
        $("#recDont"+i).attr("data-foodID" , i);

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
function dontRec(id){
    $('#dontRecModal').modal('hide');
    console.log(id);

}
