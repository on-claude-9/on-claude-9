/* El bloque de codigo que controla la funcion de todo el sitio web, en JavaScript

autor: claudio :p
version: 13.10.2026.1
*/ 

// Aqui se asigna el boton de tema a toggleThemeBtn, lo cual luego se utiliza para crear el toggle de light/dark mode
const TOGGLE_BTN = document.getElementById('toggle-theme-btn');

const ROOT = document.documentElement;

const drawingCanvas = document.getElementById('doodleCanvas');
var drawingContext = drawingCanvas.getContext("2d");

// addEventListener espera a un click, y luego cambia el tema del documento al asignarle la clase "dark-theme" a body
TOGGLE_BTN.addEventListener("click", function()
    {
        document.body.classList.toggle("dark-theme");
    }
);

drawingCanvas.addEventListener("mousemove", function()
    {
        
    }
);