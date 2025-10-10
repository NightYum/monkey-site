const draggableBox = document.getElementById('draggableBox');
let isDragging = false;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

draggableBox.addEventListener('mousedown', (e) => {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === draggableBox) {
    isDragging = true;
  }
});

document.addEventListener('mouseup', () => {
  initialX = 0;
  initialY = 0;
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  e.preventDefault(); // Предотвращает выделение текста или другие действия при перетаскивании

  xOffset = e.clientX - initialX;
  yOffset = e.clientY - initialY;

  draggableBox.style.left = xOffset + 'px';
  draggableBox.style.top = yOffset + 'px';
});