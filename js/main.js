// main

// home 

var typed = new Typed('#typingEffect', {
    strings: ['Uma Sankar.', 'Frontend Developer.'],
    startDelay: 1500,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
});

// about
let isReadMore = false;
const readMoreButton = document.querySelector('.readmore');
const readLessButton = document.querySelector('.readless');
const aboutPara = document.querySelector('.aboutPara2');

readMoreButton.onclick = () => {
    readMoreButton.hidden = true;
    aboutPara.hidden = false;
    readLessButton.hidden = false;
}

readLessButton.onclick = () => {
    readLessButton.hidden = true;
    aboutPara.hidden = true;
    readMoreButton.hidden = false;
}

