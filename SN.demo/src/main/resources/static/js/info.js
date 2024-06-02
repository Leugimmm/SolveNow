document.addEventListener('DOMContentLoaded', (event) => {
    const alertButton = document.getElementById('alertButton');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const footer = document.querySelector('footer');

    alertButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    window.addEventListener('scroll', () => {
            const footerRect = footer.getBoundingClientRect();
            const buttonRect = alertButton.getBoundingClientRect();

            if (footerRect.top < window.innerHeight) {
                alertButton.style.position = 'absolute';
                alertButton.style.bottom = '20px';
            } else {
                alertButton.style.position = 'fixed';
                alertButton.style.bottom = '20px';
            }
        });
});