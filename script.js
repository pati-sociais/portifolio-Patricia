// scroll suave
document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(a.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// efeito leve nos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});