//perfect
const sum = (x, y) => {
    return x + y;
}
console.log(">>> check sum1 ", sum(5, 10)); //15
// need to validate
const sum2 = (x, y) => {
    //need to validate type for x, y
    return x + y;
}
console.log(">>> check sum2 ", sum2('test', 10)); //15
