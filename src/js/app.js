import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let hotPrice = document.querySelectorAll('.hot').forEach(pr => {
        pr.textContent += '🔥'
    });
});