$(document).ready(function() {

  $('.builderBody .menuControlsBtn').on('click', function() {
    $('.builderControls').toggleClass('hidden');
    $('.menuControlsBtn').toggleClass('flipped');
  });

  $('.builderControls .closeBtn').on('click', function() {
    $('.builderControls').toggleClass('hidden');
    $('.menuControlsBtn').toggleClass('flipped');
  });

  $('.bannerHeader .expandBtn').on('click', function() {
    $('.bannerSection').toggleClass('hidden');
    $('.bannerHeader .expandBtn').toggleClass('flipped');
  });

  $('.bannerHeader input').on('click', function() {
    $('.banner').toggleClass('hidden');
    $('.bannerSection').toggleClass('disabled');
  });

  $('.bannerSection input[type="checkbox"]').on('click', function() {
    $('.banner .bannerBtn').toggleClass('hidden');
  });

  $('.hHeader .expandBtn').on('click', function() {
    $('.headerSection').toggleClass('hidden');
    $('.hHeader .expandBtn').toggleClass('flipped');
  });

  $('.introHeader .expandBtn').on('click', function() {
    $('.introSection').toggleClass('hidden');
    $('.introHeader .expandBtn').toggleClass('flipped');
  });

  $('.missionHeader .expandBtn').on('click', function() {
    $('.missionSection').toggleClass('hidden');
    $('.missionHeader .expandBtn').toggleClass('flipped');
  });

  $('.overviewHeader .expandBtn').on('click', function() {
    $('.overviewSection').toggleClass('hidden');
    $('.overviewHeader .expandBtn').toggleClass('flipped');
  });

  $('.featureHeader .expandBtn').on('click', function() {
    $('.featureRichSection').toggleClass('hidden');
    $('.featureHeader .expandBtn').toggleClass('flipped');
  });

  $('.cardHeader .expandBtn').on('click', function() {
    $('.cardSection').toggleClass('hidden');
    $('.cardHeader .expandBtn').toggleClass('flipped');
  });

  $('.cardListHeader .expandBtn').on('click', function() {
    $('.cardListSection').toggleClass('hidden');
    $('.cardListHeader .expandBtn').toggleClass('flipped');
  });

  $('.minFeatureHeader .expandBtn').on('click', function() {
    $('.minFeatureSection').toggleClass('hidden');
    $('.minFeatureHeader .expandBtn').toggleClass('flipped');
  });

  $('.personalHeader .expandBtn').on('click', function() {
    $('.personalSection').toggleClass('hidden');
    $('.personalHeader .expandBtn').toggleClass('flipped');
  });

  $('.basicHeader .expandBtn').on('click', function() {
    $('.basicSection').toggleClass('hidden');
    $('.basicHeader .expandBtn').toggleClass('flipped');
  });

});
