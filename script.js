document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Hentikan default behavior link
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = document.querySelector("header").offsetHeight; // Ambil tinggi navbar
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
