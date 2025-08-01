// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();
});

/* Add this CSS animation to style.css:
.section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.section.visible {
  opacity: 1;
  transform: translateY(0);
}
*/
