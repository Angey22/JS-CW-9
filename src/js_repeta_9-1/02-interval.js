//! Видео - 0:22:27...0:25:50

import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */
// Метод "setInterval()" предназначен для вызова callback функции безконечное количество раз через указанный интервал времени.

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval');

/*
 * Очистка интервала с clearInterval(intervalId)
 */

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }
