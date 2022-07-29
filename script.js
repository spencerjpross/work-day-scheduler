var dateInputEl = $('#datepicker');

var today = moment();

var reformatDate = today.format("dddd, MMMM Do YYYY");
$("#time-stamp").text(reformatDate);

var actualTime = today.format('H a');


  //document.queryselector .addeventlistener
$(".btn").on('click', function(){
    const inputValue = $(this).siblings("#todo-list").val()
    const timeValue= $(this).siblings(".time-box")[0].innerHTML
    localStorage.setItem(timeValue, inputValue)
})



function colorChange() {   
   for (i=5; i < 23; i++){
    const scheduleTime = document.getElementsByClassName('time-box')[i-5].innerHTML
    const boxColor = document.getElementsByClassName(`row-${i-4}`)[0].children[1]
    const firstTwo = scheduleTime.slice(0, 2)
    const firstTwoTime = actualTime.slice(0, 2)
    console.log(firstTwoTime) 
     if (firstTwo < firstTwoTime) {
            boxColor.classList.toggle('past')
   } if (firstTwo == firstTwoTime) {
       boxColor.classList.toggle('past')
       boxColor.classList.toggle('present')
   } if (firstTwo > firstTwoTime) {
       boxColor.classList.toggle('future')
   } 
}
}




colorChange()


$(".item1").val(localStorage.getItem("05 AM"))
$(".item2").val(localStorage.getItem("06 AM"))
$(".item3").val(localStorage.getItem("07 AM"))
$(".item4").val(localStorage.getItem("08 AM"))
$(".item5").val(localStorage.getItem("09 AM"))
$(".item6").val(localStorage.getItem("10 AM"))
$(".item7").val(localStorage.getItem("11 AM"))
$(".item8").val(localStorage.getItem("12 PM"))
$(".item9").val(localStorage.getItem("13 PM"))
$(".item10").val(localStorage.getItem("14 PM"))
$(".item11").val(localStorage.getItem("15 PM"))
$(".item12").val(localStorage.getItem("16 PM"))
$(".item13").val(localStorage.getItem("17 PM"))
$(".item14").val(localStorage.getItem("18 PM"))
$(".item15").val(localStorage.getItem("19 PM"))
$(".item16").val(localStorage.getItem("20 PM"))
$(".item17").val(localStorage.getItem("21 PM"))
$(".item18").val(localStorage.getItem("22 PM"))

// for (i=0; i < 18; i++) {
//     var item = "item" + (i + 1)
//     var time = (i + 5) + " AM"
//     $(item).val(localStorage.getItem(time))
//     console.log(item)
// }