let name = " Bea A. Sorinio";
let age = 21;

let compliments = [
  "You're shining brighter than the stars ✨",
  "Keep glowing and growing 🌻",
  "You’re coding like a pro 💻",
  "Stay awesome, future legend 🌈"
];

let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

console.log(`Hi, I'm ${name}, ${age} years old. ${randomCompliment}`);
