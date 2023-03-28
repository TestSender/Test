document.addEventListener("mousemove", function(event) {
  const glow = document.createElement("div");
  glow.className = "glow";
  glow.style.left = event.clientX + "px";
  glow.style.top = event.clientY + "px";
  document.body.appendChild(glow);
  setTimeout(function() {
    glow.remove();
  }, 1000);
});
