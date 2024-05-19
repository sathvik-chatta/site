// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Small JavaScript content in the top left corner
    const topLeftJs = document.getElementById('top-left-js');
    topLeftJs.innerHTML = '<p>Small JS Content</p><button onclick="smallFunction()">Click Me</button>';

    // Large JavaScript content dead center in the middle
    const centerJs = document.getElementById('center-js');
    centerJs.innerHTML = '<h2>Large JS Content</h2><button onclick="largeFunction()">Click Me</button>';
});

function smallFunction() {
    alert('Small button clicked!');
}

function largeFunction() {
    alert('Large button clicked!');
}
