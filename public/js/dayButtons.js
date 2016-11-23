const dayArray = [];

//on start
//we need the clean version
const initialClone = $("#itinerary").clone()
var dayCount
var selectedDay
var newDayID

$(function loadDayButtons (){
  $(".day-btn").click(function(){


    // get the day
    var dayID = document.getElementById("dayID").innerHTML;
    dayCount = dayID.slice(-1);
    var buttonDay = this.innerHTML

    selectedDay = Number(dayCount) + 1;
    newDayID = "Day " + selectedDay;
    $("#dayID").html(`${newDayID}`);

    //on click
    //we need to clone the populated version and push it to our dayArray
    var clone = $("#itinerary").clone();
    dayArray[dayCount] = clone;

    //we need to remove the populated version
    $("#itinerary").remove()


    //load clean version
    //if the array position is empty then push the initialClone else push the clone
    if(buttonDay === '+'){
        $('#itinerary-panel').append(initialClone)
    } else {
      console.log("this is it")
      $('#itinerary-panel').append(dayArray[buttonDay])
        }
      })
})
