$(document).ready(function() {
  hideAlerts();

  function hideAlerts(){
    setTimeout(function() {
      $('.alerts-bar').slideUp('slow')
    }, 4000);
  }

});
