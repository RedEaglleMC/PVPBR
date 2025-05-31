document.addEventListener("DOMContentLoaded", () => {
    // Cria o modal zoom e adiciona ao body
    const zoomModal = document.createElement("div");
    zoomModal.classList.add("zoom-modal");

    const zoomImage = document.createElement("img");
    zoomModal.appendChild(zoomImage);
    document.body.appendChild(zoomModal);

    // Seleciona todas as imagens da galeria para ativar o zoom ao clicar
    const galleryImages = document.querySelectorAll(".carousel-container img");

    galleryImages.forEach(img => {
        img.style.cursor = "zoom-in"; // muda o cursor para indicar zoom

        img.addEventListener("click", () => {
            zoomImage.src = img.src;
            zoomModal.classList.add("active");
            document.body.style.overflow = "hidden"; // bloqueia scroll do fundo
        });
    });

    // Fecha o modal ao clicar fora da imagem ou no modal
    zoomModal.addEventListener("click", (e) => {
        if (e.target === zoomModal || e.target === zoomImage) {
            zoomModal.classList.remove("active");
            document.body.style.overflow = ""; // libera scroll
        }
    });

    // Fecha o modal ao pressionar ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && zoomModal.classList.contains("active")) {
            zoomModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});