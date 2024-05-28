let test: string[] = ['Test1'];

test.push('Test2');
console.log(">>> check array: ", test);

//create array with mixed types
let test2: (string | number)[] = ['Test1'];

test2.push(25);
console.log(">>> check array: ", test2);
