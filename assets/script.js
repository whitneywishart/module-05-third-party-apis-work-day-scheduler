//global variable for current time
var now = dayjs().format("HH");

//add current date at top of page
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY, H:m A"));


$(function () {
  //add click event listener for save button and send entry value to local storage
  var saveBtn = document.querySelector("#hour-09 > button > i");
  var getTextEntry = document.querySelector("#hour-09 > textarea");

  saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    //create calendar entry object
    var entry = {
      textEntry: getTextEntry.value.trim(),
    };

    //send entry to local storage
    console.log(entry);
    localStorage.setItem("entry", JSON.stringify(entry));

  })


  
  //change row color for each hour based on current time
  $(".row").each(function () {

    var time = $(this).attr("id").split("-")[1];
    // console.log(this);
    // console.log(now);
    console.log(time);


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
  });




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});

