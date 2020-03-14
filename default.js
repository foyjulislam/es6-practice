function add(num1, num2 = 20){
    // num2 = 20 default value jodi add er bitor 17 num2 er expected value na dei.
    //num2 = num2 || 20;
    return num1 + num2;
}
const total = add(15, 17); // 17 provide na korle
console.log(total);
