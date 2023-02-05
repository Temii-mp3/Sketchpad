let container = document.querySelector("#container");

let divCount = 256;

for (let i = 0; i < divCount; i++){
    const sketchBox = document.createElement('div');
    sketchBox.addEventListener('mouseover', () => {
        sketchBox.style.backgroundColor = 'black';
    });
    container.appendChild(sketchBox);
}
















