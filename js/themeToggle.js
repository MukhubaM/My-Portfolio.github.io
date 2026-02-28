(function () {
  const toggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    root.setAttribute(
      "data-theme",
      currentTheme === "light" ? "dark" : "light"
    );
  });
})();