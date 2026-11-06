(function () {
    "use strict";

    const CSS_URL =
        "https://cdn.jsdelivr.net/gh/sumitbairagy/website-theme-toggle@main/theme.css";

    const STORAGE_KEY = "website-theme";

    // Load CDN CSS
    if (!document.getElementById("universal-theme-css")) {
        const link = document.createElement("link");

        link.id = "universal-theme-css";
        link.rel = "stylesheet";
        link.href = CSS_URL;

        document.head.appendChild(link);
    }

    // Apply theme
    function setTheme(theme) {

        theme = theme === "dark" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", theme);

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (error) {
            console.warn("Theme storage unavailable:", error);
        }

        updateButton();
    }

    // Update toggle button
    function updateButton() {

        const button = document.getElementById("themeToggle");

        if (!button) return;

        const theme =
            document.documentElement.getAttribute("data-theme") || "light";

        button.textContent =
            theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

        button.setAttribute("aria-label", "Switch website theme");
    }

    // Public functions
    window.toggleTheme = function () {

        const current =
            document.documentElement.getAttribute("data-theme") || "light";

        setTheme(current === "dark" ? "light" : "dark");
    };

    window.setTheme = setTheme;

    window.getTheme = function () {
        return document.documentElement.getAttribute("data-theme") || "light";
    };

    // Load saved theme
    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem(STORAGE_KEY) || "light";
    } catch (error) {
        console.warn("Theme storage unavailable:", error);
    }

    // Set theme immediately
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme === "dark" ? "dark" : "light"
    );

    // Update button after HTML loads
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateButton);
    } else {
        updateButton();
    }

})();
