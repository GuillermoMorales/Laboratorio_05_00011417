var numeros=[0,-5,8,10,1];
function orden(numeros)
{
    let a,b;
    for(i=0;i<numeros.length-1;i++)
    {
        for(j=0; j<numeros.length-1;j++)
        {
            if(numeros[j]>numeros[j+1])
            {
                a=numeros[j];
                b=numeros[j+1];
                numeros[j]=b;
                numeros[j+1]=a;
            }
        }
    }
    return (numeros);
}
alert(orden(numeros));