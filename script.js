document.addEventListener('DOMContentLoaded', () => {
  const ironman = document.getElementById('ironman');
  const toggleArButton = document.getElementById('toggleAr');
  const scaleSlider = document.getElementById('scaleSlider');
  const rotateXSlider = document.getElementById('rotateXSlider');
  const rotateYSlider = document.getElementById('rotateYSlider');
  const rotateZSlider = document.getElementById('rotateZSlider');

  let arEnabled = false;

  toggleArButton.addEventListener('click', async () => {
    const scene = document.querySelector('a-scene');
    if (!arEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        scene.style.display = 'block';
        arEnabled = true;
        toggleArButton.textContent = 'Disable AR';
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Camera access denied or not available.');
      }
    } else {
      scene.style.display = 'none';
      arEnabled = false;
      toggleArButton.textContent = 'Enable AR';
    }
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
