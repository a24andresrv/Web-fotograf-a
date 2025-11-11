document.addEventListener("DOMContentLoaded", () => {
  const topBar = document.querySelector(".topBar");

  // Ruta relativa desde index.html hacia la carpeta componentes
  fetch("/componentes/header.html")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar la barra de navegación");
      return response.text();
    })
    .then(data => {
      topBar.innerHTML = data;

      // --- OPCIONAL: marcar automáticamente el enlace activo según la página ---
      const links = topBar.querySelectorAll("a");
      const currentPath = window.location.pathname.split("/").pop(); // ejemplo: "portafolio.html"

      links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.includes(currentPath)) {
          link.classList.add("active");
        }
      });
    })
    .catch(error => console.error("Error al cargar la barra:", error));
});
