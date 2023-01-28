//global variable for current time
var now = dayjs().format("HH");

//add current date at top of page
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY, h:m A"));


$(function () {
  //add click event listener for save button and send entry value to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);

  })



  //change row color for each hour based on current time
  $(".row").each(function () {

    var time = $(this).attr("id").split("-")[1];
    // console.log(this);
    // console.log(now);
    // console.log(time);


    if (now == time) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");


    } else if (now < time) {
      $(this).removeClass("present");
      $(this).addClass("future");

    } else if (now > time) {
      $(this).removeClass("future");
      $(this).addClass("past");

    }
  })

});

