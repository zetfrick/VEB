// Добавляем обработчик события 'click' для кнопки с id 'calculate'
document.getElementById('calculate').addEventListener('click', function() {
    // Получаем значения из полей ввода и выпадающего списка
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Проверяем, являются ли введенные значения числами
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Пожалуйста, введите корректные числа';
    } else {
        // Выполняем выбранную операцию
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Деление на ноль невозможно';
                } else {
                    result = num1 / num2;
                }
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result = 'Неизвестная операция';
        }
    }

    // Отображаем результат в элементе с id 'result'
    document.getElementById('result').innerText = 'Результат: ' + result;
});

