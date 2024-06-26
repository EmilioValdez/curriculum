function showSection(sectionId) {
    const sections = document.querySelectorAll('main.content section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Mostrar la sección 'profile' al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('profile');
});
