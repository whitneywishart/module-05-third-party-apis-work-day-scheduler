//Add current date at top of page
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY, H:m A"));

var now = dayjs();


$(function () {
  var saveHour09 = document.getElementById("#hour-9");
  var saveHour09 = document.getElementById("#hour-10");
  var saveHour09 = document.getElementById("#hour-11");
  var saveHour09 = document.getElementById("#hour-12");
  var saveHour09 = document.getElementById("#hour-13");
  var saveHour09 = document.getElementById("#hour-14");
  var saveHour09 = document.getElementById("#hour-15");
  var saveHour09 = document.getElementById("#hour-16");
  var saveHour09 = document.getElementById("#hour-17");
  // TODO: 
  //Add a listener for click events on the save button. 
  //This code should use the id in the containing time-block as a key to save the user input in local storage. 

  //HINT: What does `this` reference in the click listener function? 
  //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

 
var saveBtn = document.querySelector("#hour-9 > button > i");
var getTextEntry = document.querySelector("#hour-9 > textarea");

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();

  //create calendar entry object
  var entry = {
    textEntry: getTextEntry.value.trim(),
  };

  //send entry to local storage
  console.log(entry);
  localStorage.setItem("entry", JSON.stringify(entry));

})

  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

