(function () {

    // Apply saved theme
    function setTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("website-theme", theme);

        const button = document.getElementById("themeToggle");

        if (button) {
            button.innerHTML =
                theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        }
    }

    // Toggle theme
    window.toggleTheme = function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme") || "light";

        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    // Initialize theme
    const savedTheme = localStorage.getItem("website-theme");

    setTheme(savedTheme || "light");

})();
