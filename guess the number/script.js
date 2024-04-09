// Рандомное число
let random_num = generate_num();

// Принимаемые значения
// let num = parseFloat(document.getElementById("num").value);

// Вывод информации
let message = document.getElementById("message");

// Счетчик попыток
let counter = 0;



function guess_the_number() {
    let num = parseFloat(document.getElementById("num").value);

    console.log(num);
    console.log(random_num);

    if (isNaN(num) || num <= 0 || num > 10) {
        message.textContent = "Нужно ввести целое число от 1 до 10";

    } else if (num == random_num) {
        message.textContent = "Ты угадал!!!";
        color
        counter = 0;
        random_num = generate_num();

    } else {
        if (num < random_num) {
            message.textContent = "Не угадал... То число больше";
        } else {
            message.textContent = "Не угадал... То число меньше";
        }
        counter += 1;
    }

    if (counter == 5) {
        message.textContent = "Попытки закончились. Начни сначала";
        counter = 0;
        random_num = generate_num();
    }



}

// Генерация случайных чисел
function generate_num() {
    return Math.floor(Math.random() * 10 + 1);
}