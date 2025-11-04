// Alternar modo oscuro
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Enviar formulario simulado
const form = document.getElementById("formulario");
const msg = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "¡Gracias por compartir tu historia! 🌎";
  msg.style.color = "lime";
  form.reset();
});
