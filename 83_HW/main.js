// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

// =======================РЕШЕНИЕ===========================
// 1, 2
const personalInformstion = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 100500,
    city: 'Samara',
    greeting(name, surname) {
        return `Hello, ${name} ${surname}!`
    }
}
console.log(personalInformstion.name);
console.log(personalInformstion.surname);
console.log(personalInformstion.age);
console.log(personalInformstion.city);
console.log(personalInformstion.greeting('Ivan', 'Ivanov'));

// 3.
const descriptionOfUsers = [
    {
        name: 'Yuriy',
        age: 35,
        isAdmin: true
    },
    {
        name: 'Alexander',
        age: 28,
        isAdmin: false
    },
    {
        name: 'Ivan',
        age: 24,
        isAdmin: false
    },
    {
        name: 'Anton',
        age: 29,
        isAdmin: true
    },
    {
        name: 'Mixail',
        age: 21,
        isAdmin: true,
    },
    {
        name: 'Victor',
        age: 21,
        isAdmin: false,
    },
    {
        name: 'Artem',
        age: 30,
        isAdmin: false,
    },
    {
        name: 'Ruslan',
        age: 30,
        isAdmin: false,
    }
]

let simpleUsers = 0;

for(let i = 0; i < descriptionOfUsers.length; i++) {
    if(descriptionOfUsers[i].isAdmin !== true) {
        simpleUsers = simpleUsers + 1;
    }
}
console.log(simpleUsers);