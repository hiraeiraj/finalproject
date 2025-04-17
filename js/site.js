// JavaScript to toggle the mobile dropdown menu
document.getElementById('hamburger-icon').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});
