document.addEventListener('DOMContentLoaded', () => {
  const ironman = document.getElementById('ironman');
  const scaleSlider = document.getElementById('scaleSlider');
  const glowEffect = document.getElementById('glowEffect');
  const icon3D = document.getElementById('icon3D');
  const objectList = document.getElementById('objectList');
  const objectButtons = document.querySelectorAll('#objectList button');
  const message = document.getElementById('message');

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
      console.log('Loading model:', modelUrl); // Debugging line

      // Update the gltf-model attribute directly
      ironman.setAttribute('gltf-model', modelUrl);

      // Set a default scale for the new model
      ironman.setAttribute('scale', '0.1 0.1 0.1');

      // Manually trigger the loading of the new model
      ironman.components['gltf-model'].update({ src: modelUrl });

      objectList.style.display = 'none';

      // Check if the model loaded successfully
      ironman.addEventListener('model-loaded', (e) => {
        message.style.display = 'none';
        console.log('Model loaded successfully:', modelUrl); // Debugging line
      });

      ironman.addEventListener('model-error', (e) => {
        message.style.display = 'block';
        message.textContent = `Failed to load model: ${modelUrl}`;
        console.error('Failed to load model:', modelUrl); // Debugging line
      });
    });
  });
});
