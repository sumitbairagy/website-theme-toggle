
(function () {

    const CSS_URL =
        "https://cdn.jsdelivr.net/gh/USERNAME/website-theme-toggle@main/theme.css";

    // Load theme CSS automatically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_URL;
    document.head.appendChild(link);

    // Apply theme
    function setTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("website-theme", theme);

        const button = document.getElementById("themeToggle");

        if (button) {
            button.textContent =
                theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        }
    }

    // Public toggle function
    window.toggleTheme = function () {

        const current =
            document.documentElement.getAttribute("data-theme") || "light";

        setTheme(current === "dark" ? "light" : "dark");
    };

    // Public functions
    window.setTheme = setTheme;

    window.getTheme = function () {
        return document.documentElement.getAttribute("data-theme") || "light";
    };

    // Initialize
    const savedTheme = localStorage.getItem("website-theme");

    setTheme(savedTheme || "light");

})();
