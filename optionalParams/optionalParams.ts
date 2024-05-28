const sum = (x: number, y:number, z?:number) => {
    if(z) return x + y + z;
    return x + y;
}

console.log(">>> check sum: ", sum(2, 5));