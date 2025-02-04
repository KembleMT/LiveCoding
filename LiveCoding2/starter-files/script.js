const API_ENDPOINT = "https://yesno.wtf/api";

// Función que obtiene la respuesta de la API
async function fetchAnswer() {
    const inputField = document.getElementById("input");
    const answerDiv = document.getElementById("answer");
    const errorMsg = document.getElementById("error");

    // Validar si hay una pregunta escrita
    if (!inputField.value.trim()) {
        errorMsg.textContent = "Por favor, escribe una pregunta.";
        return;
    }
    
    errorMsg.textContent = ""; // Limpiar mensaje de error
    answerDiv.textContent = "Buscando respuesta..."; // Mensaje de carga

    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();

        answerDiv.textContent = data.answer; // Mostrar respuesta en el HTML

        // Limpiar la pregunta y respuesta después de 5 segundos
        setTimeout(() => {
            inputField.value = "";
            answerDiv.textContent = "";
        }, 5000);
    } catch (error) {
        answerDiv.textContent = "Error al obtener respuesta. Intenta de nuevo.";
    }
}

// Agregar la función al botón
document.getElementById("button").addEventListener("click", fetchAnswer);

// Permitir que ENTER también ejecute la función
function handleKeyEnter(event) {
    if (event.key === "Enter") {
        fetchAnswer();
    }
}