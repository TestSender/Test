const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.pageX + 'px';
  cursorGlow.style.top = e.pageY + 'px';
});

document.addEventListener('mouseenter', () => {
  cursorGlow.classList.add('visible');
});

document.addEventListener('mouseleave', () => {
  cursorGlow.classList.remove('visible');
});
