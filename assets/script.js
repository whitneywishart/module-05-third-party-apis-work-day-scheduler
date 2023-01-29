//global variable for current time
var now = dayjs().format("HH");
var today = dayjs();


//add current date at top of page
$("#currentDay").text(today.format("MMM D, YYYY, h:m A"));


//add clear calendar button..because that seems like a thing we need
$("#clear").click(function (event) {
  event.preventDefault;

  $("textarea").val("");
  localStorage.clear();
});


$(function () {
  //add listener for save buttons
  $(".saveBtn").click(function (event) {
    event.preventDefault();

    var time = $(this).parent().attr("id").split("-")[1];
    var value = $(this).siblings(".description").val();

    //set entry to local storage
    localStorage.setItem(time, value);
  });


  //get local storage and display on expected row
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));



  //change row color for each hour based on current time
  $(".row").each(function () {

    var time = $(this).attr("id").split("-")[1];

    if (now == time) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).children(".description").addClass("present");


    } else if (now < time) {
      $(this).removeClass("present");
      $(this).addClass("future");

    } else if (now > time) {
      $(this).removeClass("future");
      $(this).addClass("past");

    }
  })
});