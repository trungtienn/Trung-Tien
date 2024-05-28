//for loop
for (let i = 0; i < 10; i++) {
    console.log(">> i=", i);
}
//while 
let counter = 0;
while (counter < 5) {
    console.log("counter = ", counter);
    if (counter % 2 === 1) break;
    counter++;
}
// do while
let counter2 = 0;
do {
    console.log("counter = ", counter);
    if (counter2 % 2 === 1) break;
    counter2++;
} while (counter2 < 5);