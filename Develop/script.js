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

checkTime();