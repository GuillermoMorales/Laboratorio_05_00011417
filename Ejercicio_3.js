var cantidad = prompt("Ingrese la cantidad: ");
function fibonnaci(cantidad)
{
    let x=0,y=1,z=0;
    let text = "";
    text=text.concat(x.toString().concat(", "));
    text=text.concat(y.toString());
  
    for(j=0;j<cantidad-2;j++)
    {    
        z=x+y;
        text=text.concat(", ").concat(z.toString());   
        x=y;
        y=z;
     }   
     return (text);   
}
alert(fibonnaci(cantidad))