document.addEventListener('DOMContentLoaded', () => {
  const ironman = document.getElementById('ironman');
  const toggleCameraButton = document.getElementById('toggleCamera');
  const scaleSlider = document.getElementById('scaleSlider');
  const rotateXSlider = document.getElementById('rotateXSlider');
  const rotateYSlider = document.getElementById('rotateYSlider');
  const rotateZSlider = document.getElementById('rotateZSlider');

  let cameraEnabled = true;

  toggleCameraButton.addEventListener('click', () => {
    cameraEnabled = !cameraEnabled;
    if (cameraEnabled) {
      toggleCameraButton.textContent = 'Disable Camera';
      document.querySelector('a-scene').setAttribute('embedded', '');
    } else {
      toggleCameraButton.textContent = 'Access Camera';
      document.querySelector('a-scene').removeAttribute('embedded');
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
