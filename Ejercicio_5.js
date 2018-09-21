var radio = prompt("Ingrese el radio: ");
function circ(radio)
{
    let resultado;
    if(radio>0)
    {
        resultado=Math.PI*Math.pow(radio,2);
    }
    else
    {
        resultado="ERROR:El radio debe ser mayor que cero.";
    }

    return (resultado);
}
alert(circ(radio));