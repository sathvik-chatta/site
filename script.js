const container = document.querySelector('.container');
const word1 = document.getElementById('Sathvik');
const word2 = document.getElementById('Chatta');

let x1 = 0, y1 = 0, dx1 = 1, dy1 = 1;
let x2 = 0, y2 = 30, dx2 = 1, dy2 = 1;

function animateWords() {
    x1 += dx1;
    y1 += dy1;
    x2 += dx2;
    y2 += dy2;

    if (x1 >= container.offsetWidth - word1.offsetWidth || x1 <= 0) {
        dx1 = -dx1;
    }
    if (y1 >= container.offsetHeight - word1.offsetHeight || y1 <= 0) {
        dy1 = -dy1;
    }

    if (x2 >= container.offsetWidth - word2.offsetWidth || x2 <= 0) {
        dx2 = -dx2;
    }
    if (y2 >= container.offsetHeight - word2.offsetHeight || y2 <= 0) {
        dy2 = -dy2;
    }

    word1.style.left = x1 + 'px';
    word1.style.top = y1 + 'px';
    word2.style.left = x2 + 'px';
    word2.style.top = y2 + 'px';

    requestAnimationFrame(animateWords);
}

animateWords();
