// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// } 

// Es 6 arrow function declare

const doubleIt = num => num * 2;
// const result = doubleIt(5);
// console.log(result);

// multiple parameter takle braket use korte hobe single hole dile o hoy na dile o hoy

const add = (x, y) => x + y;

const result = add(50, 60);
console.log(result);

const give5 = () => 5;
const result2 = give5();
console.log(result2);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 3);

console.log(result3);
