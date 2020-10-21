$( document ).ready(function() {
    console.log(3);
    setVals();
    $('#updateGoalsBTN').click( function(){
        $('#editGoalsModal').modal('hide');
        updateGoals();
    });


});
function setVals(){
        $("#goalCals").html(1);
        $("#goalCarbs").html("1");
        $("#goalFat").html("1");
        $("#goalProtein").html("1");
        $("#goalSatFat").html("1");
        $("#goalPolyFat").html("1");
        $("#goalTransFat").html("1");
        $("#goalCholesterol").html("1");
        $("#goalSodium").html("1");
        $("#goalPotassium").html("1");
        $("#goalFiber").html("1");
        $("#goalSugar").html("1");
        $("#goalVitA").html("1");
        $("#goalVitC").html("1");
        $("#goalCalcium").html("1");
        $("#goalIron").html("1");
    
      
        $("#consCals").html("1");
        $("#consCarbs").html("1");
        $("#consFat").html("1");
        $("#consProtein").html("1");
        $("#consSatFat").html("1");
        $("#consPolyFat").html("1");
        $("#consTransFat").html("1");
        $("#consCholesterol").html("1");
        $("#consSodium").html("1");
        $("#consPotassium").html("1");
        $("#consFiber").html("1");
        $("#consSugar").html("1");
        $("#consVitA").html("1");
        $("#consVitC").html("1");
        $("#consCalcium").html("1");
        $("#consIron").html("1");

    $("#calories").val(1);
    $("#carbs").val(1);
    $("#fat").val(1);
    $("#protein").val(1);
    $("#satFat").val(1);
    $("#polyFat").val(1);
    $("#transFat").val(1);
    $("#cholesterol").val(1);
    $("#sodium").val(1);
    $("#potassium").val(1);
    $("#fiber").val(1);
    $("#sugar").val(1);
    $("#vitA").val(1);
    $("#vitC").val(1);
    $("#calcium").val(1);
    $("#iron").val(1);
    
    
}
function updateGoals(){
    let cals =$("#calories").val();

    let carbs =$("#carbs").val();
    let fat =$("#fat").val();
    let protein =$("#protein").val();
    let satFat = $("#satFat").val();
    let polyFat = $("#polyFat").val();
    let transFat = $("#transFat").val();
    let cholesterol = $("#cholesterol").val();
    let sodium = $("#sodium").val();
    let potassium = $("#potassium").val();
    let fiber =$("#fiber").val();
    let sugar =$("#sugar").val();
    let vitA = $("#vitA").val();
    let vitC = $("#vitC").val();
    let calcium = $("#calcium").val();
    let iron = $("#iron").val();
    setVals();
}