const headings = [
    'Your Private Tip Line',
    'Your Anonymous Suggestion Box'
    // Add more headings here if desired
];

function changeHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    const randomIndex = Math.floor(Math.random() * headings.length);
    headingElement.innerHTML = headings[randomIndex];
}

document.addEventListener('DOMContentLoaded', changeHeading);
