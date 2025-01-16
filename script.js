document.addEventListener('DOMContentLoaded', () => {
  const ironman = document.getElementById('ironman');
  const toggleCameraButton = document.getElementById('toggleCamera');
  const scaleSlider = document.getElementById('scaleSlider');
  const rotateXSlider = document.getElementById('rotateXSlider');
  const rotateYSlider = document.getElementById('rotateYSlider');
  const rotateZSlider = document.getElementById('rotateZSlider');

  let cameraEnabled = false;

  toggleCameraButton.addEventListener('click', async () => {
    if (!cameraEnabled) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        document.querySelector('a-scene').object3D.visible = true;
        cameraEnabled = true;
        toggleCameraButton.textContent = 'Disable Camera';
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Camera access denied or not available.');
      }
    } else {
      document.querySelector('a-scene').object3D.visible = false;
      cameraEnabled = false;
      toggleCameraButton.textContent = 'Access Camera';
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
