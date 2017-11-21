var quotes = [
    '\"When one loves, one does not calculate.\" - St. Therese of Lisieux',
    '\“Energy creates energy. It is by spending myself that I become rich.\" - Sarah Bernhardt',
    '\“We are never so much disposed to quarrel with others as when we are dissatisfied with ourselves.\” - William Hazlitt, Characteristics',
    '\"We can only know others by ourselves.\" - Robert Louis Stevenson, The Lantern-Bearers and Other Essays',
    '\"The thankful receiver bears a plentiful harvest.\"- William Blake, The Marriage of Heaven and Hell',
    '\"The days are long, but the years are short.\" - Gretchen Rubin',
    '\"The best is the enemy of the good.\" - Voltaire',
    '\"If information was the answer, then we\'d all be billionaires with perfect abs.\" - Derek Sivers',
    '\"You miss the opportunity to learn when you want to play it safe.\" - Emilie Aries',
    '\"Mindfulness is the ability to know what is happening right now in your head without getting carried away by it.\" - Dan Harris',
    '\"Being an adult means learning to live with regret.\" - Liz Craft',
    '\"Outer order contributes to inner calm.\" - Gretchen Rubin',
    '\"Things often get harder before they get easier.\" - Gretchen Rubin',
    '\"It\'s easier to keep up than to catch up.\" - Gretchin Rubin',
    '\"Don\'t let yourself fall into \'empty\': eat when you\'re hungry, put gas in the car, keep some cash on hand.\" - Gretchen Rubin',
    '\"Everyday is a new day, and you\'ll never be able to find happiness if you don\'t move on.\" - Carrie Underwood',
    '\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\" - Albert Schweitzer',
    '\"Happiness is not something ready made. It comes from your own actions.\" - Dalai Lama',
    '\"The secret to happiness is freedom... And the secret to freedom is courage.\" - Thucydides',
    '\"The best way to pay for a lovely moment is to enjoy it.\" - Richard Bach',
    '\"Joy is prayer; joy is strength: joy is love; joy is a net of love by which you can catch souls.\" - Mother Teresa',
    '\"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.\" - Buddha',
    '\"Happiness is when what you think, what you say, and what you do are in harmony.\" - Mahatma Gandhi',
    '\"I don\'t have to chase extraordinary moments to find happiness - it\'s right in front of me if I\'m paying attention and practicing gratitude.\" - Brene Brown',
    '\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\" - Mother Teresa',
    '\"If you can\'t feed a hundred people, then feed just one.\" - Mother Teresa',
    '\"Love begins at home, and it is not how much we do... but how much love we put in that action.\" - Mother Teresa',
    '\"Loneliness and the feeling of being unwanted is the most terrible poverty.\" - Mother Teresa',
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
    element.click(function() {
        element.addClass('animated' + 'bounceInDown');
        window.setTimeout(function() {
            element.removeClass('animated' + 'bounceInDown');
        }, 2000);
    });
}
//https://www.brainyquote.com/authors/mother_teresa
//https://www.brainyquote.com/topics/happiness
