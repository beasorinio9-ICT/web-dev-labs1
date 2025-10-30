//  Fancy Fruit List Generator 

// Array of fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Strawberry", "Watermelon", "Pineapple", "Lemon"];

// Emoji map for automatic fruit icons 
const fruitEmojis = {
  apple: "🍎",
  banana: "🍌",
  mango: "🥭",
  orange: "🍊",
  grapes: "🍇",
  strawberry: "🍓",
  watermelon: "🍉",
  pineapple: "🍍",
  lemon: "🍋"
};

// Function to generate a random pastel color
function randomColor() {
  const colors = ["#ffd6ff", "#ffb5a7", "#bde0fe", "#caffbf", "#fefae0", "#faedcd", "#ffc8dd"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ✨ Reference the list container
const list = document.getElementById("fruit-list");

// 🪄 Clear any existing items (optional)
list.innerHTML = "";

//  Create each fruit item dynamically with style and animation
fruits.forEach(fruit => {
  const li = document.createElement("li");
  const emoji = fruitEmojis[fruit.toLowerCase()] || "🥝";
  
  li.innerHTML = `${emoji} ${fruit}`;
  li.style.backgroundColor = randomColor();
  li.style.padding = "15px";
  li.style.margin = "8px auto";
  li.style.width = "60%";
  li.style.borderRadius = "12px";
  li.style.fontFamily = "'Poppins', sans-serif";
  li.style.fontSize = "18px";
  li.style.transition = "all 0.3s ease";
  li.style.cursor = "pointer";
  li.style.opacity = "0";
  li.style.transform = "translateY(20px)";
  
  // Animation effect (fade-in one by one)
  setTimeout(() => {
    li.style.opacity = "1";
    li.style.transform = "translateY(0)";
  }, 200 * fruits.indexOf(fruit));

  // Hover interaction
  li.addEventListener("mouseover", () => {
    li.style.transform = "scale(1.05)";
    li.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  });

  li.addEventListener("mouseout", () => {
    li.style.transform = "scale(1)";
    li.style.boxShadow = "none";
  });

  // dd click interaction (removes fruit)
  li.addEventListener("click", () => {
    li.style.opacity = "0";
    li.style.transform = "translateX(50px)";
    setTimeout(() => li.remove(), 400);
  });

  list.appendChild(li);
});
