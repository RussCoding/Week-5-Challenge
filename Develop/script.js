// Shows the date in the header
$(document).ready(function() {
    var date = moment().format('dddd, MMM Do');
    $("#currentDay").text(date);
});