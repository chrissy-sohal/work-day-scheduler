// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

 // current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

  // saveBtn click listener and save text in local storage
  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })
 
  function timeBlock() {
   var hour = moment().hours();

   $(".time-block").each(function() {
       var currHour = parseInt($(this).attr("id"));

       if (currHour > hour) {
           $(this).addClass("future");
       } else if (currHour === hour) {
           $(this).addClass("present");
       } else {
           $(this).addClass("past");
       }
   })
  }

  // Get item from local storage
  $("#hour-8 .description").val(localStorage.getItem("hour8"));
  $("#hour-9 .description").val(localStorage.getItem("hour9"));
  $("#hour-10 .description").val(localStorage.getItem("hour10"));
  $("#hour-11 .description").val(localStorage.getItem("hour11"));
  $("#hour-12 .description").val(localStorage.getItem("hour12"));
  $("#hour-13 .description").val(localStorage.getItem("hour13"));
  $("#hour-14 .description").val(localStorage.getItem("hour14"));
  $("#hour-15 .description").val(localStorage.getItem("hour15"));
  $("#hour-16 .description").val(localStorage.getItem("hour16"));
  $("#hour-17 .description").val(localStorage.getItem("hour17"));

  timeBlock();
})

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
