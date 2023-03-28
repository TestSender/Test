const box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
  box.style.transform = 'scale(1.2)';
  box.style.backgroundColor = '#0f0';
});

box.addEventListener('mouseout', () => {
  box.style.transform = 'scale(1)';
  box.style.backgroundColor = '#f00';
});
