const headings = [
    'Your Private Tip Line',
    'Your Anonymous Suggestion Box',
    'A secure line for anyone to reach you'
    // Add more headings here if desired
];

function changeHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    const randomIndex = Math.floor(Math.random() * headings.length);
    headingElement.innerHTML = headings[randomIndex];
}

document.addEventListener('DOMContentLoaded', changeHeading);
