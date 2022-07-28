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
   } if (firstTwo > 22)
        clear()
}
}




colorChange()


$(".item1").val(localStorage.getItem("5 AM"))
$(".item2").val(localStorage.getItem("6 AM"))
$(".item3").val(localStorage.getItem("7 AM"))
$(".item4").val(localStorage.getItem("8 AM"))
$(".item5").val(localStorage.getItem("9 AM"))
$(".item6").val(localStorage.getItem("10 AM"))
$(".item7").val(localStorage.getItem("11 AM"))
$(".item8").val(localStorage.getItem("12 PM"))
$(".item9").val(localStorage.getItem("1 PM"))
$(".item10").val(localStorage.getItem("2 PM"))
$(".item11").val(localStorage.getItem("3 PM"))
$(".item12").val(localStorage.getItem("4 PM"))
$(".item13").val(localStorage.getItem("5 PM"))
$(".item14").val(localStorage.getItem("6 PM"))
$(".item15").val(localStorage.getItem("7 PM"))
$(".item16").val(localStorage.getItem("8 PM"))
$(".item17").val(localStorage.getItem("9 PM"))
$(".item18").val(localStorage.getItem("10 PM"))

// for (i=0; i < 18; i++) {
//     var item = "item" + (i + 1)
//     var time = (i + 5) + " AM"
//     $(item).val(localStorage.getItem(time))
//     console.log(item)
// }