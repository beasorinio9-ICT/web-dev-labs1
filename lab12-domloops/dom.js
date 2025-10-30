function changeTitle() {
  const title = document.getElementById("page-title");

  // Random fun messages
  const messages = [
    " Title Updated Successfully!",
    " JavaScript Magic Activated!",
    " The Page Just Got Better!",
    "🔥 Boom! Dynamic Title Change!",
    " Hello from the DOM World!"
  ];

  //  Random color generator
  const colors = ["#ff6f61", "#6a4c93", "#1982c4", "#8ac926", "#ffb703", "#e63946"];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // 🪄 Animate + update text and style
  title.innerText = randomMessage;
  title.style.color = randomColor;
  title.style.transition = "all 0.5s ease";
  title.style.transform = "scale(1.2) rotate(2deg)";
  title.style.textShadow = `0 0 15px ${randomColor}`;

  // Reset to normal after animation
  setTimeout(() => {
    title.style.transform = "scale(1)";
    title.style.textShadow = "none";
  }, 600);

  console.log("Title changed to:", randomMessage);
}
