document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".cards.right, .cards.left");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% visible
    });

    sections.forEach(section => observer.observe(section));
});