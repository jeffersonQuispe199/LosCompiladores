document.addEventListener('DOMContentLoaded', () => {
    // Inicializar los iconos vectoriales de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));

            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});