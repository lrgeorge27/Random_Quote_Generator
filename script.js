var quotes = [
    '\"When one loves, one does not calculate.\" - St. Therese of Lisieux',
    '\“Energy creates energy. It is by spending myself that I become rich.\" - Sarah Bernhardt',
    '\“We are never so much disposed to quarrel with others as when we are dissatisfied with ourselves.\” - William Hazlitt, Characteristics',
    '\"We can only know others by ourselves.\" - Robert Louis Stevenson, The Lantern-Bearers and Other Essays'
];


function getQuote() {
    var number = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote").innerHTML = quotes[number];
}
console.log(Math.floor(Math.random() * 3));
console.log(getQuote());
