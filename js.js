function goToSection(id) {
    // Find the section by ID
    const section = document.getElementById(id);
    if (!section) return; // safety check

    // Scroll smoothly to that section
    section.scrollIntoView({
        behavior: 'smooth', // smooth scrolling
        block: 'start'      // align section to top
    });

    // Optional: give the section a temporary highlight to show focus
    section.style.transition = 'background 0.5s ease';
    const originalBg = section.style.background;
    section.style.background = 'rgba(255, 235, 59, 0.3)'; // soft yellow highlight
    setTimeout(() => {
        section.style.background = originalBg; // revert after 0.8s
    }, 800);
}