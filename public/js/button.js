var markerCounter = 0;

$(function loadButton (){  //when dom has been loaded, call this option
  $("#hotelsButton").click(function(){

    var hotelID = $("select#hotel-choices option:selected").text();
    hotelID = hotelID.replace(/\s+/g, '') + markerCounter

    $("#hotelItinerary").append(`<span id="${hotelID}" class="title">${$("select#hotel-choices option:selected").text()}</span>
      <button id="${hotelID}" class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    drawMarker('hotel', hotels[$("select#hotel-choices")[0].selectedIndex].place.location)
    markerCounter++
  })

  $("#hotelItinerary").on('click', ".remove", (function(event){
    // event.preventDefault();
    clearMap(`#${this.id}`.slice(-1));
   $(`#${this.id}`).remove()
   $(`#${this.id}`).remove()
    }));

  $("#restaurantsButton").click(function(){

    var restaurantID = $("select#restaurant-choices option:selected").text();
    restaurantID = restaurantID.replace(/\s+/g, '') + markerCounter

    $("#restaurantsItinerary").append(`<span id="${restaurantID}" class="title">${$("select#restaurant-choices option:selected").text()}</span>
      <button id="${restaurantID}" class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    drawMarker('restaurant', restaurants[$("select#restaurant-choices")[0].selectedIndex].place.location)
    markerCounter++
  })

  $("#restaurantsItinerary").on('click', ".remove", (function(event){
    // event.preventDefault();
    clearMap(`#${this.id}`.slice(-1));
   $(`#${this.id}`).remove()
   $(`#${this.id}`).remove()
    }));


  $("#activitiesButton").click(function(){

    var activityID = $("select#activity-choices option:selected").text();
    activityID = activityID.replace(/\s+/g, '') + markerCounter

    $("#activitiesItinerary").append(`<span id="${activityID}" class="title">${$("select#activity-choices option:selected").text()}</span>
      <button id="${activityID}" class="btn btn-xs btn-danger remove btn-circle">x</button>`)
    drawMarker('activity', activities[$("select#activity-choices")[0].selectedIndex].place.location)
    markerCounter++
  })
});


$("#activitiesItinerary").on('click', ".remove", (function(event){
  // event.preventDefault();
  clearMap(`#${this.id}`.slice(-1));
 $(`#${this.id}`).remove()
 $(`#${this.id}`).remove()
  }));
