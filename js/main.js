let flag = document.querySelector('.flag');
let flagWidth = flag.clientWidth;

for (let i = 0; i < flagWidth; i++) {
    let flagElement = document.createElement('div');
    flagElement.classList.add('flag-element');

    flagElement.style.backgroundPosition = `${-i}px0`;
    flagElement.style.animationDelay = `${i * 10}ms`;

    flag.append(flagElement);
}
