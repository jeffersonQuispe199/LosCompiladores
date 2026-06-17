document.addEventListener('DOMContentLoaded', () => {
    // Inicializar los iconos vectoriales de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Capturar botones y bloques de contenidos
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Quitar la clase 'active' de todos los botones
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Añadir la clase 'active' al botón presionado
            tab.classList.add('active');

            // 3. Ocultar todos los bloques de contenido
            contents.forEach(content => content.classList.remove('active'));

            // 4. Mostrar el bloque de contenido correspondiente (según el data-tab)
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});