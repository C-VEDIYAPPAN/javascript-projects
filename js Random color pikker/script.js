const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh');

const MaxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ''; //clearing the container
    for (let i = 0; i < MaxPaletteBoxes; i++) {
        //generating random hexa collor code
        let randomHeX = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHeX = `#${randomHeX.padStart(6, "0")}`
        console.log(randomHeX);

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHeX}"></div>
        <span class="hex-value">${randomHeX}</span>`;
        //adding click event to li element to copy code
        color.addEventListener('click', () => copyColor(color, randomHeX));
        container.appendChild(color)
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    //copy to clipboard 
    //changint text back to original hex value after 1 second
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = 'Copied';
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code"));
}
refreshBtn.addEventListener('click', generatePalette);