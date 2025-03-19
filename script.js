
/* DARK / LIGHT MODE */

const toggleMode = () => {

    document.body.classList.toggle("light-mode");

    // Guardamos la preferencia del usuario
    const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", mode);
};

// Aplicar el tema guardado al cargar cualquier pestaña de la pagina
document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

});

document.getElementById("themeToggle").addEventListener("click", toggleMode);