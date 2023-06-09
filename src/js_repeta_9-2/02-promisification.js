//! Видео - 00:37:57...1:19:50

/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }


/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */
//! Статические методы "Promise.resolve()" и "Promise.reject()" позволяют создавать функции, которые мгновенно выдают результаты, на основе заранее известного и использованного в коде функции "resolve()" или "reject()".

// Пример кода статической функции на основе использования метода "Promise.resolve()".
// const makeOrder = dish => {
//   return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
// };

// Вызов результата промисифисированной функции, основанной на методе "Promise.resolve()".
// makeOrder('пирожок').then(onMakeOrderSuccess);

// Код колл-бека для "resolve()".
// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// Код колл-бека для "reject()".
// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }


/*
 * Покемоны с https://pokeapi.co/
 */
// "fetch()" - это встроенная в браузер функция, которая используется для формирования запросов на бек-енд. В ответ на такой запрос, бек-енд сервер возвращает промис.

// Ориентировочная структура функции "fetch()":
// function fetch(url) {
//     return new Promise(...);
// };
//! "fetch()" - принимает в качестве аргумента ссылку на бек-енд сервис, и возвращает в ответ на запрос "промис". 

// Пример кода на основе использования метода "fetch()". Который выполняет запрос информации по "1-у" пакемону.
// fetch('https://pokeapi.co/api/v2/pokemon/1') //! Внеси ошибку в адресс для проверки блока "catch()".
//     .then(r => r.json()) //! Особенность сервиса, необходимая для получения в ответ на запрос - объекта с пакемоном.
//     .then(pokemon => {
//         console.log('Сработал блок "then()"');
//         console.log(pokemon);
//     })
//     .catch(error => {
//         console.log('Сработал блок "catch()"')
//         console.log(error);
//     });

//!===========================================================

// 2-й пример, на основе использования функционального выражения, с возможностью подстановки значения - "id", нужного нам пакемона.
const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

// Вызываем выражение "fetchPokemonById":
// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError); //!!!

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError); //!!!

// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError); //!!!

// Колл-бек успеха.
function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess -> onFetchSuccess');
  console.log(pokemon);
}

// Колл-бек ошибки.
function onFetchError(error) {
  console.log('onFetchError -> onFetchError');
  console.log('Это в блоке catch');
  console.log(error);
}

//!===========================================================

// Еще один пример по созданию "промиса".
// makePromise
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Куку это resolve');
//       }

//       reject('❌ все пропало это reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


//! Примечание:
// При срабатывании внутри функции-промиса одного из его двух методов-аргументов "resolve()" или "reject()" - автоматически происходит прерывание работы соответствующей функции, как при "return". При этом, само служебное слово "return" для прерывания работы функции - можно НЕ ставить, его присутствие ни на что НЕ повлияет.
