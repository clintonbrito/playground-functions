// Desafio 1 - Crie a função compareTrue

function compareTrue(word1, word2) {
  if (word1 && word2) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(str) {
  return str.split(' ');
}

console.log(splitSentence('BORA BILL'));

// Para resolver esse desafio, utilizei esses dois textos como referência:
// https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/
// https://stackoverflow.com/questions/18473326/javascript-break-sentence-by-words

// Desafio 3 - Crie a função concatName

// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

// function concatName(firstItem, lastItem) {
//   firstItem = array[0];
//   lastItem = array[array.length - 1];
//   return `${firstItem}, ${lastItem}`;
// }

function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  return `${lastItem}, ${firstItem}`;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Referência para resolver essa questão: https://www.geeksforgeeks.org/get-the-first-and-last-item-in-an-array-using-javascript/
// Para corrigir o erro do destructuring assignment do array, utilizei este link, fornecido pelo colega da turma Henrique Ribeiro: https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(1, 2));

// Desafio 5 - Crie a função highestCount

// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numbers) {
  let highestNumber = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  let counter = 0;
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// let largestNumber = 0;
// function highestCount(arr2) {
//   for (let i = 0; i < arr2.length; i += 1) {
//     if (arr2[i] > largestNumber) {
//       largestNumber = arr3[i];
//     }
//   }
//   return arr3;
// }
// let arr2 = [9, 1, 2, 3, 9, 5, 7];
// let arr3 = [];
// console.log(highestCount(arr3));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return base * height;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Após quebrar bastante a cabeça, os colegas Aloisio Ribeiro e Lionel Miranda me ajudaram a resolver erros bobos na sintaxe que estavam acarretando tanto erro no Lint quanto no retorno da string da função calcAllAreas.

// Desafio 7 - Crie a função catAndMouse

// function catAndMouse(mouse, cat1, cat2) {

//   if ((cat2 - cat1 > 0 && cat2 > mouse) || (cat2 - cat1 > 0 && mouse > cat2)) {
//     return 'cat1';
//   }
//   if ((cat1 - cat2 > 0 && cat1 > mouse) || (cat1 - cat2 > 0 && mouse > cat1)) {
//     return 'cat2';
//   }
//   return 'os gatos trombam e o rato foge';
// }

// console.log(catAndMouse(5, 2, 1));

function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = cat1 - mouse;
  const distanceCat2 = cat2 - mouse;
  const distance2Cat1 = Math.abs(distanceCat1);
  const distance2Cat2 = Math.abs(distanceCat2);
  if (distance2Cat1 < distance2Cat2) {
    return 'cat1';
  }
  if (distance2Cat2 < distance2Cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(2, 1, 1));

// Utilizei essa pergunta do Stack Overflow para saber como converter os números negativos em positivos do cálculo das distâncias: https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript

// Desafio 8 - Crie a função fizzBuzz

// function fizzBuzz(arrayNumbers) {
//   let arrayNumbers = arrayNumbers[0];
//   let arrayStrings = [0];
//   return arrayStrings;
// }

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  let newString = string;
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < string.length; index += 1) {
    newString = newString.split(letters[index]).join(numbers[index]);
  }
  return newString;
}

function decode(string) {
  let newString = string;
  let numbers = ['1', '2', '3', '4', '5'];
  let letters = ['a', 'e', 'i', 'o', 'u'];

  for (let index = 0; index < string.length; index += 1) {
    newString = newString.split(numbers[index]).join(letters[index]);
  }
  return newString;
}

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
