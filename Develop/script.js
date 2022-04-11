// Shows the date in the header
$(document).ready(function() {
    var date = moment().format('dddd, MMM Do');
    $("#currentDay").text(date);
});

//sets a class for each hour block to change background color
function checkTime() {
    var currentHour = moment().hour();    
    $(".row").each(function() {
        var timeblock = parseInt($(this).attr("name"));
        
        if (currentHour > timeblock){
            $(this).addClass("past");
        }
        else if (currentHour === timeblock){
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}
// stores text values in local storage on button press
$(document).ready(function(){
    $(".btn-primary").on("click",function(){
        var block = $(this).siblings(".text-box").attr("id");
        var newText = $(this).siblings(".text-box").val();
        localStorage.setItem(block, newText);
    })
})
//populates every text box with stored value on refresh
$("#text9").val(localStorage.getItem("text9"));
$("#text10").val(localStorage.getItem("text10"));
$("#text11").val(localStorage.getItem("text11"));
$("#text12").val(localStorage.getItem("text12"));
$("#text1").val(localStorage.getItem("text1"));
$("#text2").val(localStorage.getItem("text2"));
$("#text3").val(localStorage.getItem("text3"));
$("#text4").val(localStorage.getItem("text4"));
$("#text5").val(localStorage.getItem("text5"));


checkTime();