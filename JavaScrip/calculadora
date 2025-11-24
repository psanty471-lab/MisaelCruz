//el error estaba en el HTML se movio el script al footer, por un tema DOM ya que existe otro formulario en la misma pagina.
document.getElementById("calcular").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    if(isNaN(num1)||isNaN(num2)){
        resultado.textContent = "Ingrese números Valido";
        return;
    }
function calcular(a,b, op){
    switch (op) {
        case "suma":
            return a+b;     
        case "resta":
            return a-b;
        case "multiplicacion":
            return a*b;
        case "division":
            return a/b;
        default:
            return "Operación Inválida"
    }
}
let resultadoFinal = calcular(num1,num2,operacion);
resultado.textContent="El Resultado es: "+resultadoFinal;
})
