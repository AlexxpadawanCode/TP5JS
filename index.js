function change() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = rgbColor
    let h2Element = document.getElementById('rgbValue');
    h2Element.textContent = `${rgbColor}`;
}

setInterval(change, 2000);