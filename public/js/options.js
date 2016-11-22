$(function loadOptions (){  //when dom has been loaded, call this option
  $.each(hotels, function(key, value){ $("#hotel-choices").append(`<option>${value.name}</option>`)});
  $.each(restaurants, function(key, value){ $("#restaurant-choices").append(`<option>${value.name}</option>`)});
  $.each(activities, function(key, value){ $("#activity-choices").append(`<option>${value.name}</option>`)});
})