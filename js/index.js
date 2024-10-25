// For toggling the navbar in mobile mode;
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbarMenu = document.getElementById('navbar-sticky');
    
    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
    });
});