const menuBtn = document.querySelector(".menu-btn-container");
const menuContainer = document.querySelector(".menu-container");
menuBtn.addEventListener("click", function () {
  menuContainer.style.transform = "scale(1)";
});

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-btn") ||
    e.target.classList.contains("menu-container") ||
    e.target.classList.contains("menu-option")
  )
    return;
  menuContainer.style.transform = "scale(0)";
});
