$(document).ready(function() {
  ///remove 'jsOff' class from the body, and add 'jsOn' class
  ///for users who have JS enabled
  $('body').removeClass('jsOff').addClass('jsOn');

  $('#tabs a').on('click', function(e) {
    $('#tabs a.current').removeClass('current');
    $('.tab-section:visible').hide();
    $(this.hash).show();
    $(this).addClass('current');
    e.preventDefault();
  });
});
