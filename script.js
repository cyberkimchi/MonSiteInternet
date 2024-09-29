if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = 'redirect.html';
}

const modeSwitch = document.getElementById('modeSwitch');
const logo = document.querySelector('.logo_dark');
const up = document.querySelector('.up_light');
const body = document.body;
const html = document.documentElement;

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
        logo.src = 'img/logo_light.png'; 
        up.src = 'img/up_light.gif';
        updateCursor('light');
    } else {
        logo.src = 'img/logo_dark.png';
        up.src = 'img/up.gif';
        updateCursor('dark');
    }
});

const isLightMode = localStorage.getItem('isLightMode') === 'true';
if (isLightMode) {
    body.classList.add('light-mode');
    modeSwitch.checked = true;
    logo.src = 'img/logo_light.png';
    up.src = 'img/up_light.gif';
    updateCursor('light');
} else {
    body.classList.remove('light-mode');
    logo.src = 'img/logo_dark.png';
    up.src = 'img/up.gif';
    updateCursor('dark');
}
