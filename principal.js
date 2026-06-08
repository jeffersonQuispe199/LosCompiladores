document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar los iconos de Lucide cargados desde el CDN
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Manejo interactivo de la navegación (Cambio de clase activa)
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Removemos la clase 'active' de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Añadimos la clase 'active' al enlace clickeado
            link.classList.add('active');
        });
    });

    // Opcional: Cambiar estado activo según el scroll de la página
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 100;

        navLinks.forEach(link => {
            let sectionId = link.getAttribute('href');
            if (sectionId && sectionId.startsWith('#')) {
                let section = document.querySelector(sectionId);
                
                if (section) {
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            }
        });
    });
});