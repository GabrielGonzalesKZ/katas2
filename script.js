// comece a criar a sua função add na linha abaixo

function add(x,y){

    let resultado = x += y

    return resultado
}
// descomente a linha seguinte para testar sua função

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo

function multiply(x,y){
    
    let resultado = 0
        
    for(let i=0;i<x;i++){
            
        resultado += add(0,y)

        }
            if(x==0 || y==0){
              
                resultado = 0
            }
            else if(x==1 || y==1){
               
                if(x==1){
                   
                    resultado = y
                }
            
                else{
                resultado = x
            }
        }

    return resultado
}

// descomente a linha seguinte para testar sua função

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x,y){
    
    let resultado
    
    if(y==0){
        
        resultado=1

    }
    
        for(let i=0;i<y;i++){

            if(i<=1){

                if(i==0){

                    resultado=1
                }

                else{

                    resultado=x

                }
            }

            resultado = multiply(resultado,x)

        }

    return resultado
}

// descomente a linha seguinte para testar sua função


console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(x){

    let resultado = x

    for(let i=1;i<x;i++){

        resultado = multiply(resultado,i)

    }
    return resultado
}


// descomente a linha seguinte para testar sua função


console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
