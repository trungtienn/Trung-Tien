class Person {
    private age: number;
    private firstName: string;
    private lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter
    get currentAge() {
        return this.age;
    }
    //setter
    set currentAge(age: number) {
        if(age < 0 || age > 150){
            throw Error("Invalid age");
        }
    }
}

let person1 = new Person(20, 'Tien', 'Ngo');
//getter
let checkAge = person1.currentAge;
console.log('>>> check age:' ,checkAge);
//setter
person1.currentAge = 70;
console.log('>>> check age:' ,person1.currentAge);


