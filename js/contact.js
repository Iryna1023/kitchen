document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && phone && message) {
        alert('Заявка отправлена! Спасибо за ваше сообщение.');
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
