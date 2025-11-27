console.log("Hola Humanos");
alert("Hola Mundo, esto es una invación") 

function frio(){
    document.getElementById('temperatura').src='images/frio.png';
    alert("Po que tines frio. es lo mejor");
}
function calor(){
    document.getElementById('temperatura').src='images/calor.png';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#75746bff';

}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo2.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#d6d4c6ff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="tengan paciencia, aun no se usar esta cosa"
}
function msj1(){
   alert ("El desarrollo de un programa se basa en una idea");
}
function msj2(){
   alert ("Un algoritmo se usa para resolver un problemas");
}
function msj3(){
   alert ("Escogi bien mi carrera?");
}
function fondoAside(){
    document.getElementById('aside').style.background='#506b72ff';
}
function nuevotitulo(){
    document.querySelector('title').textContent = "Tratando de usar Java Scrip";
    alert("titulo cambiado correctamente")