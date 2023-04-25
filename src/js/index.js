// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const darkMode = document.getElementById ('dark-mode');
const icon = document.getElementById ('icon');
const headerText = document.getElementById ('icon-text');
const logo = document.getElementById ('logo');


function handleClick (){
    if (icon.classList.contains('fa-moon')){
        icon.classList.replace('fa-moon','fa-sun');
        headerText.textContent= 'Light mode';
        logo.src="./assets/images/logo.svg";
        
    } else if (icon.classList.contains('fa-sun')){
        icon.classList.replace('fa-sun','fa-moon');
        headerText.textContent= 'Dark mode';
        logo.src="./assets/images/logo-dark.svg";
    }
    document.body.classList.toggle('light');


}

darkMode.addEventListener('click',handleClick);
