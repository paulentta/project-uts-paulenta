function toggleMenu() {
    if (window.innerWidth < 800) {
       const menu = document.getElementById('navbar');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
}
