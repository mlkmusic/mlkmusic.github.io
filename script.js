// Array of inspirational quotes
const quotes = [
    "The best way to predict the future is to create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Your time is limited, don't waste it living someone else's life.",
    "You only live once, but if you do it right, once is enough.",
    "The purpose of our lives is to be happy.",
    "In the end, we only regret the chances we didn't take.",
    "Don't watch the clock; do what it does. Keep going."
];

// Function to generate a new quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex];
    document.getElementById('quote').innerText = quoteText;
}

// Add event listener to the button
document.getElementById('generate-quote').addEventListener('click', generateQuote);
