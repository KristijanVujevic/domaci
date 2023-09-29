const snowflakesContainer = document.querySelector(".snowflakes");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";

  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

  snowflakesContainer.appendChild(snowflake);
}

for (let i = 0; i < 50; i++) {
  createSnowflake();
}
