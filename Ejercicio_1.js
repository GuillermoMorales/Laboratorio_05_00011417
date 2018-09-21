var cadena = prompt("Ingrese una palabra: ");
function palindromo(cadena)
{
    if(cadena.split("").reverse().join("")===cadena)
    {
        return ("La cadena es palindroma");
    }
    else
    {
        return ("No es palindromo");
    }
}
alert(palindromo(cadena));
