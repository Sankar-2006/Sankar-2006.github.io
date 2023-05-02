const nav = document.querySelectorAll('.nav');

nav.forEach(e => {
    e.addEventListener(('click'), () => {
        removeActive();
        e.classList.add('active');
    });
})

function removeActive() {
    nav.forEach((e) => {
        e.classList.remove('active');
    })
}