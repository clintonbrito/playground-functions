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

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName() {
  let [firstItem,,, lastItem] = array;
  return `${firstItem}, ${lastItem}`;
}

console.log(concatName());

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
    return `O valor da área do triângulo é: ${calcTriangleArea}`;
  } if (form === 'retângulo') {
    console.log(`O valor da área do retângulo é: ${calcRectangleArea}`);
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

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
