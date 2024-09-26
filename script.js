const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const gradientTypeSelect = document.getElementById('gradient-type');
const directionSelect = document.getElementById('direction');
const preview = document.getElementById('preview');
const cssText = document.getElementById('css-text');

function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const gradientType = gradientTypeSelect.value;
    const direction = directionSelect.value;

    let gradient = '';
    if (gradientType === 'linear') {
        gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    } else if (gradientType === 'radial') {
        gradient = `radial-gradient(circle, ${color1}, ${color2})`;
    }

    preview.style.background = gradient;
    cssText.textContent = `background: ${gradient};`;
}

color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);
gradientTypeSelect.addEventListener('change', updateGradient);
directionSelect.addEventListener('change', updateGradient);

// Initialize with default values
updateGradient();
