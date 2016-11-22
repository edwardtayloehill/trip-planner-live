$(function loadButton (){  //when dom has been loaded, call this option
  $("#hotelsButton").click(function(){
    $("#hotelItinerary").append(`<span class="title">${$("select#hotel-choices option:selected").text()}</span>
      <button id="${$("select#hotel-choices option:selected").text()}" class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    drawMarker('hotel', hotels[$("select#hotel-choices")[0].selectedIndex].place.location)
  })
  $(".btn").on('click', (function(){console.log(this.id)}));


  $("#restaurantsButton").click(function(){
    $("#restaurantsItinerary").append(`<span class="title">${$("select#restaurant-choices option:selected").text()}</span>
      <button id="${$("select#restaurant-choices option:selected").text()}" class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    drawMarker('restaurant', restaurants[$("select#restaurant-choices")[0].selectedIndex].place.location)
  })
  $("#activitiesButton").click(function(){
    $("#activitiesItinerary").append(`<span class="title">${$("select#activity-choices option:selected").text()}</span>
      <button id="${$("select#activity-choices option:selected").text()}" class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    drawMarker('activity', activities[$("select#activity-choices")[0].selectedIndex].place.location)
  })
});
