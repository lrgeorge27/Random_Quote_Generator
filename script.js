var quotes = [
    '\"When one loves, one does not calculate.\" - St. Therese of Lisieux',
    '\“Energy creates energy. It is by spending myself that I become rich.\" - Sarah Bernhardt',
    '\“We are never so much disposed to quarrel with others as when we are dissatisfied with ourselves.\” - William Hazlitt, Characteristics',
    '\"We can only know others by ourselves.\" - Robert Louis Stevenson, The Lantern-Bearers and Other Essays'
];


function getQuote() {
    var number = Math.floor(Math.random() * (quotes.length));
    var share = document.getElementById("quote").innerHTML = quotes[number];
}
//console.log(Math.floor(Math.random() * 3));
console.log(getQuote());

function tweet() {
    var share = document.getElementById("quote").innerText;
    var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(share) + "&url=&original_referer=";
    window.open(url);
    console.log(share);
}

function animationClick(element, animation) {
    element = $(button);
    element.click(
        function() {
            element.addClass('animated' + 'bounceInDown');
            window.setTimeout(function() {
                element.removeClass('animated' + 'bounceInDown');
            }, 2000);
        });
}
