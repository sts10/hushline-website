$(document).ready(function() {

  $('.builderBody .menuControlsBtn').on('click', function() {
    $('.builderControls').toggleClass('hidden');
    $('.menuControlsBtn').toggleClass('flipped');
  });

  $('.builderControls .closeBtn').on('click', function() {
    $('.builderControls').toggleClass('hidden');
    $('.menuControlsBtn').toggleClass('flipped');
  });

});
