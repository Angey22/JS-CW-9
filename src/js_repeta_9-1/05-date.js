//! Видео - 1:30:00...1:41:35

import '../css/common.css';

/*
 * Основные концепции:
 * - создание времени;
 * - Unix-время;
 * - методы;
 * - разница времени;
 * - Date.now().
*/

// Использование встроенного конструктора класса "Date", который создает новый объект с набором методов и свойств.
const date = new Date();
// Выводим в лог экземпляр класса "Date"
// console.dir(date);

// Виводим в лог текущий день, c помощью метода "getDay()".
console.log('date.getDay() =>', date.getDay());
//! 1-а в ответ, соответствует понедельнику, 2-а - вторнику и т.д.

// Виводим в лог текущий месяц, c помощью метода "getMonth()".
console.log('date.getMonth() =>', date.getMonth());
//! Месяца считаются с "0" - январь, "1" - февраль и т.д.

// Разбираем Unix-время, используя метод "getTime()".
console.log('date.getTime() =>', date.getTime());
//! Выводит в консоль число, которое показывает количество миллисекунд прошедших с 1-го января 1970 года 00:00 часов и до сегодняшнего момента. Указанная дата является точкой отсчета от которой компьютеры высчитывают время.
console.log('-----------------------------------------------');


// Нулевая точка отсчета даты и времени с учетом моего часового пояса.
console.log('new Date(0) =>', new Date(0));
// Текущая дата и время с учетом моего часового пояса
console.log('new Date() =>', new Date());
console.log('-----------------------------------------------');


// Использование встроенного метод "Date.now()" для получения числа (количества миллисекунд), т.е. метод "Date.now()" позволяет получить текущую метку времени.
const date1 = Date.now();
console.log('date1 =>', date1);
//! Статический метод, который не создает экземпляр, а только лишь фиксирует текущее время - "Date.now()", выдовая нужное количество миллисекунд.

// Создаем таймаут для вывода нескольких параметров даты и их разницы.
setTimeout(() => {
  const date2 = Date.now();

  console.log('date1 =>', date1);
  console.log('date2 =>', date2);

  console.log('date2 - date1 =', date2 - date1);
}, 3000);

//! Всегда есть погрешность в пределах 1000 миллесекунд.
