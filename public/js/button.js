$(function loadButton (){  //when dom has been loaded, call this option
  $("#hotelsButton").click(function(){
    $("#hotelItinerary").append(`<ol>${$("select#hotel-choices option:selected").text()}</ol>`)
  })
  $("#restaurantsButton").click(function(){
    $("#restaurantsItinerary").append(`<ol>${$("select#restaurant-choices option:selected").text()}</ol>`)
  })
  $("#activitiesButton").click(function(){
    $("#activitiesItinerary").append(`<ol>${$("select#activity-choices option:selected").text()}</ol>`)
  })
});
