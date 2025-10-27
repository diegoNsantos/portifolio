//EFEITO DE DIGITAÇÃO ANIMADA/////////////////////////////////////

// Elementos do DOM
const typingTextElement = document.querySelector('.typing-text');
const cursor = document.getElementById('typing-cursor');

// Array com os textos para alternar
const textsToType = ["Desenvolvedor Full-Stack", "Engenheiro de Software"];

// Configurações de velocidade (em ms)
const typingSpeed = 100;    // Velocidade de digitação
const erasingSpeed = 50;    // Velocidade para apagar
const pauseTime = 2000;     // Tempo de pausa entre textos

let textIndex = 0;          // Índice do texto atual
let charIndex = 0;          // Índice do caractere atual
let isTyping = true;        // Estado: digitando ou apagando

// Função principal de digitação
function typeAnimation() {
    const currentText = textsToType[textIndex];
    
    if (isTyping) {
        // Digitando
        if (charIndex < currentText.length) {
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeAnimation, typingSpeed);
        } else {
            // Terminou de digitar, aguarda e começa a apagar
            isTyping = false;
            setTimeout(typeAnimation, pauseTime);
        }
    } else {
        // Apagando
        if (charIndex > 0) {
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeAnimation, erasingSpeed);
        } else {
            // Terminou de apagar, prepara próximo texto
            isTyping = true;
            textIndex = (textIndex + 1) % textsToType.length;
            setTimeout(typeAnimation, typingSpeed);
        }
    }
}

// Inicia a animação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeAnimation, 500);
});

// fim do efeito de digitação /////////////////////////////////////