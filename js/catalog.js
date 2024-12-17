document.querySelectorAll('.btn, .img-ph').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card');
        const modal = document.getElementById('productModal');
        const mainImage = document.getElementById('modalImage');
        const thumbnail1 = document.getElementById('thumbnail1');
        const thumbnail2 = document.getElementById('thumbnail2');

        const cardImage = card.querySelector('img').src;
        mainImage.src = cardImage;
        thumbnail1.src = cardImage;
        thumbnail2.src = cardImage;

        modal.style.display = 'flex';

        document.getElementById('closeModal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        thumbnail1.addEventListener('click', function() {
            mainImage.src = this.src;
        });

        thumbnail2.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});
