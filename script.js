document.addEventListener('DOMContentLoaded', () => {
  const ironman = document.getElementById('ironman');
  const toggleArButton = document.getElementById('toggleAr');
  const scaleSlider = document.getElementById('scaleSlider');
  const rotateXSlider = document.getElementById('rotateXSlider');
  const rotateYSlider = document.getElementById('rotateYSlider');
  const rotateZSlider = document.getElementById('rotateZSlider');

  toggleArButton.addEventListener('click', () => {
    const scene = document.querySelector('a-scene');
    scene.style.display = scene.style.display === 'none' ? 'block' : 'none';
    toggleArButton.textContent = scene.style.display === 'none' ? 'Enable AR' : 'Disable AR';
  });

  scaleSlider.addEventListener('input', (event) => {
    const scale = event.target.value;
    ironman.setAttribute('scale', `${scale} ${scale} ${scale}`);
  });

  rotateXSlider.addEventListener('input', (event) => {
    const rotation = ironman.getAttribute('rotation');
    ironman.setAttribute('rotation', `${event.target.value} ${rotation.y} ${rotation.z}`);
  });

  rotateYSlider.addEventListener('input', (event) => {
    const rotation = ironman.getAttribute('rotation');
    ironman.setAttribute('rotation', `${rotation.x} ${event.target.value} ${rotation.z}`);
  });

  rotateZSlider.addEventListener('input', (event) => {
    const rotation = ironman.getAttribute('rotation');
    ironman.setAttribute('rotation', `${rotation.x} ${rotation.y} ${event.target.value}`);
  });
});
