const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box'); // Corrected ID

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`; 
}

function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    
    if (isLight) {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    } else {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    }
    
    imageMode(isLight ? 'light' : 'dark');
}

// Switch Theme Dynamically
function switchTheme(event){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(false); // Changed to false for dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(true); // Changed to true for light mode
        localStorage.setItem('theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Checking Local storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false); // Changed to false for dark mode
    }
}
