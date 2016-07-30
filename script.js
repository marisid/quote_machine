$(document).ready(function() {
  var quotes = [{
    "text": "The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence.",
    "origin": "Charles Bukowski"
  }, {
    "text": "Life isn't about finding yourself. Life is about creating yourself.",
    "origin": "George Bernard Shaw"
  }, {
    "text": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "origin": "Maya Angelou"
  },{
    "text": "Our greatest glory is not in never falling, but in rising every time we fall.", "origin": "Confucius"
  },{
    "text": "If we wait for the moment when everything, absolutely everything is ready, we shall never begin.", "origin":"Ivan Turgenev"
  }, {
  "text": "Be the change you wish to see in the world.", "origin": "Mahatma Gandhi"
  },{
  "text": "It doesn't matter where you are coming from. All that matters is where you are going.", "origin": "Brian Tracy"
  },{
    "text": "Nothing has more strength than dire necessity.", "origin":"Euripides"
  },{
    "text": "Logic will take you from A to B.  Imagination will take you everywhere.", "origin": "Albert Einstein"
  },{
    "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "origin": "Aristotle"
  }, {
    "text":"Wise men talk because they have something to say. Fools, because they have to say something.", "origin":"Plato"
  }, {
    "text": "To improve is to change. To be perfect is to change often.",
    "origin": "Winston Churchill"
  }, {
    "text": "It is a common experience that a problem difficult at night is resolved in the morning after the committee of sleep has worked on it.", 
    "origin": "John Steinbeck"
  }, {
    "text": "There are no facts, only interpretations.",
    "origin": "Friedrich Nietzsche"
  }, {
    "text": "One day, in retrospect, the years of struggle will strike you as the most beautiful.",
    "origin": "Sigmund Freud"},{
    "text": "The spirit of a man is constructed out of his choices.",
    "origin": "Irvin D. Yalom"
  }];
  
  var previousIndex = 0;
  
  $(".new-quote").on("click", getNewQuote);
  $(".click-to-tweet").on("click", clickToTweet);
  
  function getQuoteIndex() {
    return Math.floor(Math.random()*quotes.length);
  }
  
  function getNewQuote(evt) {
    var randomIndex = getQuoteIndex();
    while (randomIndex === previousIndex) {
      randomIndex = getQuoteIndex();
    }
    previousIndex = randomIndex;
    
    var randomQuote = quotes[randomIndex].text;
    var randomOrigin = quotes[randomIndex].origin;
    $(".quote-text").html(randomQuote);
    $(".origin-text").html(randomOrigin);
  }
  
  function clickToTweet(evt) {
    var twitterStatus = "https://twitter.com/home?status=";
    var quoteText = $(".quote-text").text();
    var originText = $(".origin-text").text()
    $("a").attr("href",twitterStatus+quoteText+" "+originText);
  }
});