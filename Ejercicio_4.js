var numero = prompt("Ingrese el numero a convertir: ");
function binario(numero)
{
    var num= numero;
    var total = "";
    if(num==0)
    {
        total="0";
    }
    while(num!=0)
    {
        total= total.concat((num%2).toString());        
        num = parseInt(num/2);    
    }

    return (total.split("").reverse().join(""));    
}
alert(binario(numero));
