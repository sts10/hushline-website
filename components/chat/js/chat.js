$(document).ready(function() {

  $('.chatWindow').scrollTop($('.chatWindow')[0].scrollHeight);

  $('.usersTab').on('click', function() {
    $('.pinnedList').addClass('pinnedListVisible');
    // $('.mainStage').addClass('hidden');
    $('.usersTab').addClass('selected');
    $('.chatTab').removeClass('selected');
  });

  $('.chatTab').on('click', function() {
    $('.pinnedList').removeClass('pinnedListVisible');
    // $('.mainStage').removeClass('hidden');
    $('.usersTab').removeClass('selected');
    $('.chatTab').addClass('selected');
  });

});
