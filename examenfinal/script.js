const botonCalcular = document.getElementById("calcular");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");

botonCalcular.addEventListener("click", () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let mensaje;

    if (imc < 18.5) {
        mensaje = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = "Sobrepeso";
    } else {
        mensaje = "Obesidad";
    }

    resultado.textContent = `Tu IMC es ${imc}. Categoría: ${mensaje}`;
});
