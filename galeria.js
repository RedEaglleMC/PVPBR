document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel-container");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    const scrollAmount = 500; // Ajuste o valor conforme necessidade

    leftArrow.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});