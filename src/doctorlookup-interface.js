$(document).ready(function() {
  $('#doctorLookup').click(function() {
    let city = $('#medicalNeed').val();
    $('#medicalNeed').val("");


    let doctorLookup = new DoctorLookup();  // create instance of DoctorLookup class
    let promise = doctorLookup.getWeatherByCity(city);  // call the instance method and pass in user input

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showDoctor').text(`The humidity in ${city} is ${body.main.humidity}%`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});