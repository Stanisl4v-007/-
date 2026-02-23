// Задание 2: Переменная с именем пользователя
let userName = "Станислав";
console.log("Задание 2: Имя пользователя:", userName);

// Задание 3: Две числовые переменные и их сумма
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Задание 3: Сумма чисел", num1, "+", num2, "=", sum);

// Задание 4: Функция приветствия
function sayHello(name) {
    console.log("Задание 4: Привет, " + name + "!");
}
sayHello("Стас");

// Задание 5: Функция возведения в квадрат
function square(num) {
    return num * num;
}
let result = square(5);
console.log("Задание 5: Квадрат числа 5 =", result);

// Задание 6: Мини-калькулятор
let value1 = prompt("Введите первое число:");
let value2 = prompt("Введите второе число:");

let number1 = Number(value1);
let number2 = Number(value2);

let calcSum = number1 + number2;
console.log("Задание 6: Калькулятор");
console.log("Сумма чисел", number1, "и", number2, "=", calcSum);