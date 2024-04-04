const dropdown = document.querySelector('.dropdown');
const list = document.querySelector('.list');
const selected = document.querySelector('.selectedImg');

dropdown.addEventListener('click', () => {
    list.classList.toggle('hidden');
});

list.addEventListener('click', (e) => {
    const svg = e.target.closest('svg');
    const div = e.target.closest('div');
    if (svg) {
        selected.innerHTML = svg.outerHTML;
    } else if (div) {
        selected.innerHTML = div.innerHTML;
    }
    let viewBox = "0 0 30 30";
    selected.setAttribute('viewBox', viewBox);
});
