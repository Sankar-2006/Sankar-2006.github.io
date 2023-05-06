// this contains main elements 

const nav = document.querySelectorAll('.nav');

const sections = document.querySelectorAll('section');

window.onscroll = () => {
    let active;
    sections.forEach(section => {
        let offset = section.offsetTop;
        let height = section.clientHeight;
        if (pageYOffset >= (offset - height/4)) {
            active = section.getAttribute('id');
        }
    })
    nav.forEach(e => {
        e.classList.remove('active');
        if(e.classList.contains(active)) {
            e.classList.add('active');
        }
    })
};

// nav icon

let icon = document.getElementById('menu');
let sidebar = document.getElementById('sideBar');

icon.onclick = () => {
    sidebar.classList.toggle('active');
    icon.classList.toggle('active');
}

document.onclick = e => {
    if (e.target.id !== 'sideBar' && e.target.id !== 'menu') {
        navElement.classList.remove('active');
    }
}

nav.forEach(e => {
    e.onclick = () => {
        navElement.classList.remove('active');
    }
})