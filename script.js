
$(document).ready(function(){  //jQuery call to ensure html and css are "ready" before bootstrap functions are executed.



function clock(){
var todayDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'); /*day.js calender date and real time updating clock */
$('#currentDateTime').text(todayDate);}

setInterval(clock, 1000)




$(".saveBtn").on("click", function() {    //click event triggers function to log user input.

  console.log(this);                         
  var userInput = $(this).siblings(".userInput").val()  //captures value of user input
  var hourNum = $(this).parent().attr("id");         //captures the time hour where user input was entered in

  localStorage.setItem(hourNum, userInput)  //stores info to local storage
})

  

    function scheduleTracker() {
     var currentHour = parseInt(dayjs().format('H'));  //the current hour of day in 24 hour format converted to number using parseInt()

      $(".time-block").each(function() {
       var hourBlock = parseInt($(this).attr("id"));  //the ID of each time block converted into a number using parseInt
        //console.log(typeof hourBlock) 
        //console.log(typeof currentHour)
        console.log(currentHour, hourBlock)   

        if (currentHour === hourBlock) {       //if statements that will apply different classes depending on
          $(this).addClass("present");         //what the current hour of the day it is (in 24 hour format) compared to the hour block the task was entered on
          $(this).removeClass("past");
          $(this).removeClass("future")
        } else if (currentHour < hourBlock) {
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present")
        } else {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future")
        }
    })
   } 

   scheduleTracker()

    //console.log(currentHour)
    //console.log(hourBlock)


  

    
    $("#9 .userInput").val(localStorage.getItem("9"));
    $("#10 .userInput").val(localStorage.getItem("10"));  //calls items from local storage
    $("#11 .userInput").val(localStorage.getItem("11"));
    $("#12 .userInput").val(localStorage.getItem("12"));
    $("#13 .userInput").val(localStorage.getItem("13"));
    $("#14 .userInput").val(localStorage.getItem("14"));
    $("#15 .userInput").val(localStorage.getItem("15"));
    $("#16 .userInput").val(localStorage.getItem("16"));
    $("#17 .userInput").val(localStorage.getItem("17"));
    
  });


