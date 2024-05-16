function generate() {
  var quotes = {
    "― Kent Beck":
      "“I’m not a great programmer; I’m just a good programmer with great habits.“",
    "― Alan Cooper":
      "“If we want users to like our software, we should design it to behave like a likable person.“",
    "― Ellen Ullman":
      "“Programming is the art of algorithm design and the craft of debugging errant code.“",
    "― Santosh Kalwar": "“Coding like poetry should be short and concise.“",
    "― Mohamed Faisal 😁 ":
      "“Programmer: A machine that turns coffee into code.“",
    "― Albert Einstein":
      "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it,s beauty.”"
  };
  var authors = Object.keys(quotes);
  // Verify that the random number is not repeated twice in a row
  var author = "";
  var quote = "";
  var prevAuthor = document.getElementById("author").innerHTML;
  for (var i = 0; (author === prevAuthor || author === "") && i < 100000; i++) {
    author = authors[Math.floor(Math.random() * authors.length)];
    quote = quotes[author];
  }

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
// typed-js

var typed5 = new Typed("#typed5", {
  strings: ["Mohamed Faisal"],
  typeSpeed: 60,
  backSpeed: 60,
  cursorChar: "|",
  shuffle: true,
  smartBackspace: false,
  loop: true
});
