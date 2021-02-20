const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let gameFrame = 0;

let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false; 
}

const cursor = document.querySelector('.cursor');

canvas.addEventListener('mousemove', (event) => {
    cursor.setAttribute('style', 'top: '+(event.pageY - 10)+'px; left: '(event.pageX - 10)+'px')
})

canvas.addEventListener('mousedown', (event) => {
    mouse.x = event.x - canvasPosition.left; 
    mouse.y = event.y - canvasPosition.top;
});

