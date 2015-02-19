$(function() {
  var $article = $('article');

  $article.readingtime({
    readingTimeTarget: $article.find('.readingtime'),
    wordPerMinute: 275,
    round: false,
    lang: 'en'
  });
});