document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');

    colorPicker.addEventListener('input', () => {
        const selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorCode.textContent = `Selected Color: ${selectedColor}`;
    });
});
