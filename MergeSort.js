const listaLivros = require('./');

function mergeSort(array){
  
  if(array.length > 1){
  cosnt meio = Math.floor(array.length / 2); 
  const parte1 = mergeSort(array.slice(0, meio));
  cosnt parte2 = mergeSort(array.slice(meio, array.length));
  array = ordena(parte1, parte2);
  }
  
  return array;
  
}
  
function ordena(parte1, parte2){
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = [];
  while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
    const produtoParte1 = parte1[posicaoAtualParte1];
    const produtoParte2 = parte2[posicaoAtualParte2];
    
    if(produtoParte1.preco < produtoParte2.preco){
      resultado.push(produtoParte1);
      posicaoAtualParte1++;
    }else{
      resultado.push(produtoParte2);
      posicaoAtualParte2++
    }
    
  }
  
  return resultado.concat(posicaoAtualParte1 < parte1.length
                         ? parte1.slice(posicaoAtualParte1)
                         : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));


































































