// script.js
const facts = [
 "A dog's sense of smell is 100,000 times better than a human's.",
 "Dogs can be trained to detect cancer and other diseases.",
 "The Basenji is the only barkless dog breed.",
 "Dogs have three eyelids.",
 "A dog's nose print is unique, like a human fingerprint.",
 "Dogs can see in color, but not as vividly as humans.",
 "The average dog can understand around 165 words.",
 "Dogs sweat through their paws.",
 "The oldest dog on record lived to be 29 years old.",
 "Dogs curl up in a ball when they sleep to protect their vital organs."
];

const factContainer = document.getElementById('fact-container');

facts.forEach(fact => {
 const factElement = document.createElement('div');
 factElement.classList.add('fact');
 factElement.textContent = fact;
 factContainer.appendChild(factElement);
});
