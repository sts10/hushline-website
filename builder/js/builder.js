$(document).ready(function() {
  $('.navButton').on('click', function() {
    $('.staged').toggleClass('open');
  });

  $('#glow-theme').on('click', function() {
    $('BODY').toggleClass('.glow');
  });

  $('.closeButton').on('click', function() {
    $('.staged').removeClass('open');
  });

  $('NAV li').on('click', function() {
    $('.staged').removeClass('open');
  });

  $('#portfolio-intro').on('click', function() {
    $('.intro').removeClass('hidden');
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.articleIntro').addClass('hidden');
  });

  $('#book-cover-intro').on('click', function() {
    $('.intro').addClass('hidden');
    $('.bookCover').removeClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.articleIntro').addClass('hidden');
  });

  $('#secondary-intro').on('click', function() {
    $('.intro').addClass('hidden');
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').removeClass('hidden');
    $('.articleIntro').addClass('hidden');
  });

  $('#article-intro').on('click', function() {
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.intro').addClass('hidden');
    $('.articleIntro').removeClass('hidden');
  });

  $('#glow-theme').on('click', function() {
    $('BODY').toggleClass('glow');
  });

  $('#flipped-item').on('click', function() {
    $('.flippedItem').toggleClass('hidden');
  });

  $('#mobile-item').on('click', function() {
    $('.mobileItem').toggleClass('hidden');
  });

  $('#featured-item').on('click', function() {
    $('.featuredItem').toggleClass('hidden');
  });

  $('#basic-list').on('click', function() {
    $('.basicList').toggleClass('hidden');
  });

  $('#standard-item').on('click', function() {
    $('.standardItem').toggleClass('hidden');
  });

  $('#item-avatar').on('click', function() {
    $('.itemAvatar').toggleClass('hidden');
  });

  $('#tertiary-list').on('click', function() {
    $('.tertiaryList').toggleClass('hidden');
  });

  $('#secondary-list').on('click', function() {
    $('.secondaryList').toggleClass('hidden');
  });

  $('#simple-item').on('click', function() {
    $('.simpleItem').toggleClass('hidden');
  });

  $('#item-list').on('click', function() {
    $('.itemList').toggleClass('hidden');
  });

  $('#centered-item').on('click', function() {
    $('.centeredItem').toggleClass('hidden');
  });

  $('#button-group').on('click', function() {
    $('.buttonGroupList').toggleClass('hidden');
  });

  $('#button-item').on('click', function() {
    $('.buttonItem').toggleClass('hidden');
  });

  $('#metadata-item').on('click', function() {
    $('.metadataItem').toggleClass('hidden');
  });

  $('#secondary-nav').on('click', function() {
    $('.tabs').toggleClass('hidden');
    $('.intro').toggleClass('withNav');
  });

  $('#article').on('click', function() {
    $('.articleSection').toggleClass('hidden');
  });

  $('#hint').on('click', function() {
    $('.hint').toggleClass('hidden');
  });
});
