//**1. создать класс который выводит массив используя Symbol.iterator
const a = [1, 2, 3]
let it = a[Symbol.iterator]()
console.log(it.next().value) //1
console.log(it.next().value) //2
console.log(it.next().value) //3

//3 Дан массив. Вывести элементы после первого нуля
let array1 = [1,1,1,1, 0, 2,3,4,5,6,0,9,9];
const zeroIndex = array1.findIndex(number => number === 0);
console.log(zeroIndex);
const newArray = array1.splice(zeroIndex + 1);
console.log(newArray)

//4 добыть 1-цу из массива [7,7,7,1,7,7,7,7,7,7]
const arr1 = [7,7,7,1,7,7,7,7,7,7,1];
console.log(arr1.find(el => el === 1))

//** [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15]
//добыть 5, 8
//добыть [6,7,8,9]
//добыть все кроме 1,2,3
const arr = [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15];
const [,,,[,fifthEl,[...mainPart],,,],,,,] = arr;
const [,,,[,,[,,eightEl,],,,],,,,] = arr;
const [,,,...rest] = arr;
console.log(fifthEl,eightEl)

//2. создать класс Stud который наследует класс User(name, surname) и имеет свойство year-год поступления в вуз.
// Реализовать getFullName() (наследуется от User)содержит еще метод getCourse() - вывод курса студента от 1 до 5 и вычисляется как текущий год минус год поступления.
// Текущий год получить самостоятельно
//** подсчитать количество студентов (через static)
/*
class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('User name must be string type');
        }
        this._name = value;
    }
    set surname(value) {
        if (typeof value !== 'string') {
            throw new TypeError('User surname must be string type');
        }
        this._surname = value;
    }
    get getName() {
        return this._name;
    }
    get getSurname() {
        return this._surname;
    }
    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Stud extends User {
    static count = 0;
    constructor(name, surname, year) {
        super(name,surname);
        this._year = year;
        Stud.count++;
    }
    set year(value) {
        if (typeof value !== 'number') {
            throw new TypeError('User year must be a number type');
        }
        this._year = value;
    }
    get getYear() {
        return this._year;
    }
    getCourse () {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this._year;
        if (course > 5 || course < 1){
            throw new RangeError('This student doesnt study');
        }
        return course + ' ' + 'course';
    }
}
const petrov = new Stud('Artem', 'Petrov', 2018);
console.log(petrov.getFullName())
 */