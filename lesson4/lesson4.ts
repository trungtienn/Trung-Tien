const sum3 = (x: number, y:number) => {
    return x + y;
}
console.log(sum3(5,10)) //no error

//but if we try console.log(sum3('test',10)) => error