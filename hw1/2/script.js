let value = +prompt("Введите число для проверки", 0);
let check = value % 2 == 0 ? "четное" : "не четное";

alert(`число: ${value} - ${check}`);
