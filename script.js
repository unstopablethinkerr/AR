document.addEventListener('DOMContentLoaded', () => {
  const ironman = document.getElementById('ironman');
  const scaleSlider = document.getElementById('scaleSlider');
  const glowEffect = document.getElementById('glowEffect');
  const icon3D = document.getElementById('icon3D');
  const objectList = document.getElementById('objectList');
  const objectButtons = document.querySelectorAll('#objectList button');

  scaleSlider.addEventListener('input', (event) => {
    const scale = event.target.value;
    ironman.setAttribute('scale', `${scale} ${scale} ${scale}`);
  });

  document.querySelector('a-marker').addEventListener('markerFound', () => {
    glowEffect.style.display = 'block';
    icon3D.style.display = 'flex';
  });

  document.querySelector('a-marker').addEventListener('markerLost', () => {
    glowEffect.style.display = 'none';
    icon3D.style.display = 'none';
    objectList.style.display = 'none';
  });

  icon3D.addEventListener('click', () => {
    console.log('Brush icon clicked'); // Debugging line
    objectList.style.display = objectList.style.display === 'flex' ? 'none' : 'flex';
  });

  objectButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const modelUrl = event.target.getAttribute('data-model');
      ironman.setAttribute('gltf-model', modelUrl);
      objectList.style.display = 'none';
    });
  });
});
