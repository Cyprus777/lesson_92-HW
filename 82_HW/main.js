// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.
// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.
// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

// =========================================================

// 1.
function greeting(name) {
    return `Hello ${name}!`;
}
console.log(greeting('Yuriy'));

// 2.
const numbers = [1, 56, 8, 6, 12, 65, 89, 9, 7];

function iterationOfArray(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > item) {
            console.log(array[i]);
        }
    }
}
iterationOfArray(numbers, 10);

// 3.

function calculateOfNumbers(firstNumber, secondNumber, operator) {
    const inputOperator = operator;
    switch (inputOperator) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case '*':
            return firstNumber * secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
        default:
            return `Неизвестный оператор`
    }
}

let result = calculateOfNumbers(5, 5, '*');
console.log(result);

