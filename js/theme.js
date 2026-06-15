//theme.js

const themeBtn =
document.getElementById("themeBtn");

function toggleTheme(){

    document.body.classList.toggle(
        "dark"
    );

    const isDark =
    document.body.classList.contains(
        "dark"
    );

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    themeBtn.textContent =
    isDark
    ? "Light Mode"
    : "Dark Mode";

}

function loadTheme(){

    const savedTheme =
    localStorage.getItem(
        "theme"
    );

    if(savedTheme === "dark"){

        document.body.classList.add(
            "dark"
        );

        themeBtn.textContent =
        "Light Mode";
    }

}