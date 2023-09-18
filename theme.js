// Function to set the theme color
function setThemeColor(color) {
    document.body.className = color;
}

// Function to toggle between themes
function toggleTheme() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'dark-theme' ? '' : 'dark-theme';
    setThemeColor(newTheme);

    // Store the selected theme in localStorage
    localStorage.setItem('theme', newTheme);
}

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setThemeColor(savedTheme);
}

// Add a click event listener to the button
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', toggleTheme);
