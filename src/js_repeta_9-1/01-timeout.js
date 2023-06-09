//! Видео - 0:10:20...0:22:25

import '../css/common.css';

//! Все "таймауты" относятся к сервисам браузера и являются методами объекта "window".
console.dir(window.setTimeout);
console.log('-----------------------------------------------');


/*
 * Метод window.setTimeout(callback, delay, args):
 * - callback - вызываемая функция;
 * - delay - промежуток времени (в миллисекундах);
 * - args - аргументы для вызываемой функции.
 */
// Метод "setTimeout()" Позволяет осуществить отложенный вызов определенной "callback" функции.

//! Пример работы метода "setTimeout()":
console.log('До вызова setTimeout');

// setTimeout((x) => {
//   console.log('Пример-1 (2000 мс) - Внутри callback для setTimeout');
//   console.log('x =>', x);
// }, 2000, 5); //!!!

// setTimeout((y) => {
//   console.log('Пример-2 (1000 мс) - Внутри callback для setTimeout');
//   console.log('y =>', y);
// }, 1000, 'Хрень как аргумент'); //!!!

console.log('После вызова setTimeout');
console.log('-----------------------------------------------');

//! Смотри логи "1" и "2" в самом конце выводов консоли, после прошествия соответствующего временного интервала.


/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
