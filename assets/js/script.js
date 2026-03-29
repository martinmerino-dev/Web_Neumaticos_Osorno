// Espera que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  
  // 📱 HAMBURGER MENU TOGGLE
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Cambia el ícono del botón
      menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
    });

    // Cierra el menú al hacer click en un enlace
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Selecciona todos los botones de "ver más"
  const toggleButtons = document.querySelectorAll(".toggle-info");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const info = button.nextElementSibling;

      // Toggle de clase para animar
      info.classList.toggle("active");

      // Cambia el texto del botón si quieres (opcional)
      button.textContent = info.classList.contains("active") ? "Ocultar info" : "Ver más";
    });
  });
});
