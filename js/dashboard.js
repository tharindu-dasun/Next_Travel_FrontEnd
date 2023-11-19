document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.hash;
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hotelForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const hotelData = Object.fromEntries(formData.entries());
        console.log(hotelData);
    });
});