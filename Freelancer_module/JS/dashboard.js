// The jobs dropdown menu
const dropdown = document.querySelector('.dropdown');
const jobs = document.querySelector('#jobs');
const subMenu = document.querySelector('.sub-menu');

console.log(subMenu)

jobs.addEventListener('click', (e) => {
    subMenu.classList.toggle('active');
    document.querySelector('.dropdown_down').classList.toggle('active');
    document.querySelector('.dropdown').classList.toggle('active');
});