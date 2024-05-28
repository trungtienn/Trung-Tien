type myType = number | string | object | boolean; // allow us to create a new type from existed type.

function addNumberorString (a: myType, b: myType) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings')
}

console.log(">>> check: ", addNumberorString('Ngo ', 'Trung Tien'));