var menuButton = document.getElementById("compartilhar");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});