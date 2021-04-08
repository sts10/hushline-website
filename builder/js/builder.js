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

  $('#instructions-intro').on('click', function() {
    $('.homeIntro').addClass('hidden');
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.articleIntro').addClass('hidden');
    $('.instructionsIntro').removeClass('hidden');
  });

  $('#home-intro').on('click', function() {
    $('.homeIntro').removeClass('hidden');
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.articleIntro').addClass('hidden');
    $('.instructionsIntro').addClass('hidden');

  });

  $('#book-cover-intro').on('click', function() {
    $('.homeIntro').addClass('hidden');
    $('.bookCover').removeClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.articleIntro').addClass('hidden');
    $('.instructionsIntro').addClass('hidden');
  });

  $('#secondary-intro').on('click', function() {
    $('.homeIntro').addClass('hidden');
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').removeClass('hidden');
    $('.articleIntro').addClass('hidden');
    $('.instructionsIntro').addClass('hidden');
  });

  $('#article-intro').on('click', function() {
    $('.bookCover').addClass('hidden');
    $('.secondaryIntro').addClass('hidden');
    $('.homeIntro').addClass('hidden');
    $('.articleIntro').removeClass('hidden');
    $('.instructionsIntro').addClass('hidden');
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

  $('#statement').on('click', function() {
    $('.statement').toggleClass('hidden');
  });

  $('#example-list').on('click', function() {
    $('.exampleList').toggleClass('hidden');
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

  $('#primary-list').on('click', function() {
    $('.primaryList').toggleClass('hidden');
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

  $('.utilityIcon').on('click', function() {
    $('aside').toggleClass('hidden');
    $('.canvas').toggleClass('wide');
    $('.canvas header').toggleClass('wide');
  });

  $('aside .navButton').on('click', function() {
    $('aside').toggleClass('hidden');
    $('.canvas').toggleClass('wide');
    $('.canvas header').toggleClass('wide');
  });
});
