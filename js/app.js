//app.js


window.addEventListener(
    "load",
    () => {

        loadTheme();

    }
);

themeBtn.addEventListener(
    "click",
    toggleTheme
);

document
.getElementById("contactForm")
.addEventListener(
    "submit",
    validateForm
)