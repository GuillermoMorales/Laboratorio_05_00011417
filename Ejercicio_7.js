var anio = prompt("Ingrese el anio: ");
function bisiesto(anio){
    let resultado;
    if(anio%4==0 && anio%400==0){
        resultado="Es bisiesto";
    }
    else{
        resultado="No es bisiesto";
    }
    return (resultado);
}
alert(bisiesto(anio));