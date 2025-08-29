import "./style.css";

const toggle = document.getElementById("toggle") as HTMLDivElement;
const nav = document.getElementById("nav") as HTMLDivElement;

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
