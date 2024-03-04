const modeSwitch = document.getElementById('modeSwitch');
const logo = document.querySelector('.logo_dark');
const etoile1 = document.querySelector('.etoile1');
const etoile2 = document.querySelector('.etoile2');

modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('isLightMode', modeSwitch.checked);

    if (modeSwitch.checked) {
        logo.src = 'img/logo_light.png'; 
        etoile1.src = 'img/etoile_light.gif';
        etoile2.src = 'img/etoile_light.gif';
    } else {
        logo.src = 'img/logo_dark.png';
        etoile1.src = 'img/etoile.gif';
        etoile2.src = 'img/etoile.gif';
    }
});

const isLightMode = localStorage.getItem('isLightMode') === 'true';
if (isLightMode) {
    document.body.classList.add('light-mode');
    modeSwitch.checked = true;
    logo.src = 'img/logo_light.png';
    etoile1.src = 'img/etoile_light.gif';
    etoile2.src = 'img/etoile_light.gif';
}
