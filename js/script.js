document.addEventListener("DOMContentLoaded", function () {
    const rojo = document.getElementById("rojo");
    const verde = document.getElementById("verde");
    const azul = document.getElementById("azul");
    const rojoInput = document.getElementById("rojoInput");
    const verdeInput = document.getElementById("verdeInput");
    const azulInput = document.getElementById("azulInput");
    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function actualizarColor() {
        let r = parseInt(rojo.value);
        let g = parseInt(verde.value);
        let b = parseInt(azul.value);

        let colorRGB = `rgb(${r}, ${g}, ${b})`;
        let colorHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();

        colorBox.style.backgroundColor = colorRGB;
        hexCode.textContent = colorHex;
        colorPicker.value = colorHex; // Sincroniza el color picker

        // Sincronizar los inputs numéricos con los sliders
        rojoInput.value = r;
        verdeInput.value = g;
        azulInput.value = b;
    }

    function actualizarDesdeInput() {
        let r = Math.min(255, Math.max(0, parseInt(rojoInput.value) || 0));
        let g = Math.min(255, Math.max(0, parseInt(verdeInput.value) || 0));
        let b = Math.min(255, Math.max(0, parseInt(azulInput.value) || 0));

        rojo.value = r;
        verde.value = g;
        azul.value = b;

        actualizarColor();
    }

    function actualizarDesdePicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        rojo.value = r;
        verde.value = g;
        azul.value = b;

        actualizarColor();
    }

    // Eventos para los sliders
    rojo.addEventListener("input", actualizarColor);
    verde.addEventListener("input", actualizarColor);
    azul.addEventListener("input", actualizarColor);

    // Eventos para los inputs numéricos
    rojoInput.addEventListener("input", actualizarDesdeInput);
    verdeInput.addEventListener("input", actualizarDesdeInput);
    azulInput.addEventListener("input", actualizarDesdeInput);

    // Evento para el color picker
    colorPicker.addEventListener("input", actualizarDesdePicker);

    actualizarColor(); // Inicializar el color
});
