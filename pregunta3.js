// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let arrOrdenado = nums.sort(function (a, b){return b - a});
    let terceroMasGrande;

    if(arrOrdenado.length < 2){
            return undefined;
    }

    for(let i = 0; i < nums.lenght; i++){

        let primero = arrOrdenado[0];
        let segundo;

       if(primero > arrOrdenado[i+1]){
        segundo = arrOrdenado[i+1];
        
            if(arrOrdenado[i+2] > segundo){
                terceroMasGrande = arrOrdenado[i+2];
            } 
        } else {
           i++;
        }
    }
       return terceroMasGrande;
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);