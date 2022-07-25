var dateInputEl = $('#datepicker');
var today = moment();
var reformatDate = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

$( function() {
    $( "#datepicker" ).datepicker();
  } );

