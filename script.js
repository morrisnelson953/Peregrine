function displayQuote() {
  const quotes = [
    "Travel far, travel wide, and let the world inspire you.",
    "Adventure is worthwhile in itself. – Amelia Earhart",
    "Life is short and the world is wide.",
    "The journey of a thousand miles begins with a single step. – Lao Tzu"
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
