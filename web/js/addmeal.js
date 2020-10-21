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

    $('#creatFoodForm').submit(function(e) {
        createFood($( this ).serializeArray() );

    });
    //make form for button and add serving amount



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
    $('#addFoodButton').attr('data-foodID',data);
    $("#addModalTitle").html("Burger");
    $("#addModalTitle2").html("Burger");
    $("#addModalRecReason").html("protein");
    $("#addModalServs").html("0");
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
function createFood(data){
    let name = data[0].value;
    let img = data[1].value;
    let servSize = data[2].value;
    let sers = data[3].value;
    let cals = data[4].value;
    let protein = data[5].value;
    let carbs = data[6].value;
    let fat = data[7].value;
    let satfat = data[8].value;
    let polyfat = data[9].value;
    let transfat = data[10].value;
    let chol = data[11].value;
    let sodium = data[12].value;
    let potassium = data[13].value;
    let fiber = data[14].value;
    let sugar = data[15].value;
    let vitA = data[16].value;
    let vitC = data[17].value;
    let calcium = data[18].value;
    let iron = data[19].value;

}
