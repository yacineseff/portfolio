

const CursorDot = document.querySelector("[data-cursor-dot]");
const CursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    CursorDot.style.left = `${posX}px`;
    CursorDot.style.top = `${posY}px`;

    CursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 50, fill: "forwards" });
});
const logoElements = document.getElementsByClassName("logo");

for (let i = 0; i < logoElements.length; i++) {
    logoElements[i].onmouseenter = function() {
     
        this.classList.toggle('rotate');
       
    };
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});