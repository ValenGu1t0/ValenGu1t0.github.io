
/* DARK / LIGHT MODE */

const toggleMode = () => {

    document.body.classList.toggle("light-mode");

    // Guardamos la preferencia del usuario
    const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", mode);
};

/* LENGUAJE / LANGUAGE SWITCHER */

const setLanguage = (language) => {
    localStorage.setItem("lang", language);
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations && translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });

    const langText = document.getElementById("langText");
    if (langText) {
        langText.innerText = language === "en" ? "EN" : "ES";
    }
};

const toggleLanguage = () => {
    const currentLang = localStorage.getItem("lang") === "en" ? "es" : "en";
    setLanguage(currentLang);
};

// Aplicar el tema guardado y lenguaje al cargar la página
document.addEventListener("DOMContentLoaded", () => {

    // Theme setup
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    // Language setup
    const savedLang = localStorage.getItem("lang") || "es";
    setLanguage(savedLang);
});

document.getElementById("themeToggle").addEventListener("click", toggleMode);

const langToggleBtn = document.getElementById("langToggle");
if (langToggleBtn) {
    langToggleBtn.addEventListener("click", toggleLanguage);
}