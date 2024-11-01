const modeSwitch = document.getElementById('modeSwitch');
const loading = document.querySelector('.loading');
const me = document.querySelector('.me');
const up = document.querySelector('.up_light');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const insta = document.querySelector('.insta');
const body = document.body;
const html = document.documentElement;

window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    const isLightMode = document.body.classList.contains('light-mode');

    loading.style.transition = "opacity 2s ease-in";
    loading.style.opacity = "1";

    setTimeout(() => {
        loading.style.opacity = "0";
    }, 100);

    loading.addEventListener('transitionend', () => {
        loading.classList.add('hidden');
    });

    setTimeout(() => {
        loading.classList.add('hidden');
    }, 2000);
});

document.querySelector('.loading').addEventListener('transitionend', () => {
    document.querySelector('.loading').classList.add('hidden');
});


function showImageAfterLoad(img) {
    img.classList.remove('visible');
    img.addEventListener('load', () => {
        img.classList.add('visible');
    });
}

function updateCursor(mode) {
    if (mode === 'light') {
        body.style.cursor = 'url(img/cursor.png), auto';
        html.style.cursor = 'url(img/cursor.png), auto';
    } else {
        body.style.cursor = 'url(img/cursor_light.png), auto';
        html.style.cursor = 'url(img/cursor_light.png), auto';
    }
}

modeSwitch.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('isLightMode', modeSwitch.checked);

    if (modeSwitch.checked) { 
        me.src = 'img/me_light.gif';
        up.src = 'img/up_light.gif';
        github.src = 'img/github_light.png'; 
        linkedin.src = 'img/linkedin_light.png'; 
        insta.src = 'img/insta_light.png'; 
        updateCursor('light');
    } else {
        me.src = 'img/me.gif';
        up.src = 'img/up.gif';
        github.src = 'img/github.png'; 
        linkedin.src = 'img/linkedin.png'; 
        insta.src = 'img/insta.png';
        updateCursor('dark');
    }
    showImageAfterLoad(me);
});

const isLightMode = localStorage.getItem('isLightMode') === 'true';
if (isLightMode) {
    body.classList.add('light-mode');
    modeSwitch.checked = true;
    me.src = 'img/me_light.gif';
    up.src = 'img/up_light.gif';
    github.src = 'img/github_light.png'; 
    linkedin.src = 'img/linkedin_light.png'; 
    insta.src = 'img/insta_light.png';
    updateCursor('light');
} else {
    body.classList.remove('light-mode');
    me.src = 'img/me.gif';
    up.src = 'img/up.gif';
    github.src = 'img/github.png'; 
    linkedin.src = 'img/linkedin.png';
    insta.src = 'img/insta.png';
    updateCursor('dark');
}
showImageAfterLoad(me);