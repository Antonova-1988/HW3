// Задание 1
let password = 'пароль';
let userPassword = prompt ("Введите пароль");
if (password === userPassword) {
    alert ("Пароль введен верно");
} else {
    alert ("Пароль введен неверно");
}

// Задание 2
let c = 5;
if (c > 0 && c < 10) {
    console.log('Верно');   
} else {
    console.log('Неверно');
}

// Задание 3
let d = 120;
let e =70;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('весна'); 
        break;
    case 6:
    case 7:
    case 8:
        alert('лето'); 
        break;
    case 9:
    case 10:
    case 11:
        alert('осень'); 
        break;
}
if (monthNumber >= 13) {
    alert('Неверное значение');
}


// Допонительное задание 1
let userNum = prompt('Пожалуйста, введите любое число');
let result = Number(userNum);
if (isNaN(result)) {
    alert("Не является числом");
} else{
    alert("Является числом");
}
if (result % 2 === 0) {
    alert("Четное число");
} else { 
   alert("Нечетное число");
}

// Допонительное задание 2
let clientOS = prompt('Укажите OS');
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS');
} else {
    console.log('Установите версию приложения для Android');
}

// Допонительное задание 3
let clientDeviceYear = prompt('Укажите год выпуска вашего телефона');
if (clientDeviceYear <= 2015 && clientOS ===0) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для iOS по ссылке');
}

if (clientDeviceYear <= 2015 && clientOS ===1) {
    alert('Установите облегченную версию приложения для Android по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}