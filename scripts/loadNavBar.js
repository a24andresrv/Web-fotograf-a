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



// --- PARTE 2: CARGAR EL FOOTER (AÑADIDO) ---
    // Usamos el ID del placeholder para el footer
    const footerPlaceholder = document.querySelector("#footer-placeholder");

    if (footerPlaceholder) {
         // Asumiendo que footer.html está en la misma carpeta que components.js
        fetch("/componentes/footer.html") 
            .then(response => {
                if (!response.ok) throw new Error("No se pudo cargar el Footer");
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
                // No necesitamos el código de enlace activo para el footer
            })
            .catch(error => console.error("Error al cargar el Footer:", error));
    }
});
