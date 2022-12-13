$(document).ready(function () {

  // saveBtn click listener and save text in local storage
  $(".saveBtn").on("click", function () {
      
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })
 
  //code to apply the past, present, or future class to each time block
  function timeBlock() {
    
    var hourSlot = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
 
        if (currHour > hourSlot) {
            $(this).addClass("future");
        } else if (currHour === hourSlot) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
 }

  // Get item from local storage
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  
 // Display today's day and date
 var time = dayjs().format('MMM D, YYYY');
 $('#currentDay').text(time);

});
