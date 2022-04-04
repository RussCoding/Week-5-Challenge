// Shows the date in the header
$(document).ready(function() {
    var m = moment().format('dddd, MMM Do');
    $("#currentDay").text(m);
});