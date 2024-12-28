// Add ripple effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", function (e) {
    this.style.transform = "scale(1.02)";
  });

  button.addEventListener("mouseleave", function (e) {
    this.style.transform = "scale(1)";
  });
});
