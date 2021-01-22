console.log("--------------------Exercício 1 ----------------------");

const ArrTest = [1, 2, 3, 4, 12];

ArrTest[10] = 35;

console.log(ArrTest);

console.log("--------------------Exercício 2 ----------------------");

ArrTest.push({ id: 22 }, false, null, "String");

console.log(ArrTest);

console.log("--------------------Exercício 3 ----------------------");

ArrTest.pop();

console.log("Pop", ArrTest);

console.log("--------------------Exercício 4 ----------------------");

delete ArrTest[0];

console.log(ArrTest);
