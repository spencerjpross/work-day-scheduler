var dateInputEl = $('#datepicker');

var today = moment();

var reformatDate = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#time-stamp").text(reformatDate);

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  //document.queryselector .addeventlistener
$(".btn").on('click', function(){
    const inputValue = $(this).siblings("#todo-list").val()
    const timeValue= $(this).siblings(".time-box")[0].innerHTML
    localStorage.setItem(timeValue, inputValue)
})

// $(item).val(localStorage.getItem("5 AM"))
// $(".item3").val(localStorage.getItem("7 AM"))


for (i=0; i < 18; i++) {
    var item = "item" + (i + 1)
    var time = (i + 5) + " AM"
    $(item).val(localStorage.getItem(time))
    console.log($(item).val)
}