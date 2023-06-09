//! Видео - 1:01:20...1:29:30

//! Задача - при посещении страницы должно выйти модальное окно - приглашение на подписку.

// Подключаем CSS стили.
import '../css/common.css';
// Подключаем библиотеку "bootstrap".
import BSN from 'bootstrap.native';

// оздаем переменные-ссылки на элементы находящиеся в разметке HTML документа.
const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};

// Создаем переменную - установленный интервал времени для таймера.
const PROMPT_DELAY = 3000;

// Переменная с количественным показателем отображения приглашения на подписку.
const MAX_PROMPT_ATTEMPTS = 3;

// Создаем переменную - счетчик, в которой будет хранится количественное значение, сколько раз отображалось приглашение.
let promptCounter = 0;

// Создаем переменную - регистратор события подписки.
let hasSubscribed = false;

// Подключаем плагин "bootstrap" к рекомендованой этой библиотекой разметке модального окна.
const modal = new BSN.Modal('#subscription-modal');

// Активируем функцию открытия модального окна.
openModal();

// "Вешаем" слушателя на кастомное событие модального окна "hide.bs.modal" и активируем нужный колл-бек при его регистрации.
refs.modal.addEventListener('hide.bs.modal', openModal);

// "Вешаем" слушателя на событие 'click' по кнопке "Подписаться" в модальном окне.
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// Функция открытия модального окна.
function openModal() {
  // Проверка на количество всплытий модалки или события - подписки.
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  // Устанавливаем интервал для повторения всплытия модалки.
  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

// Функция - подписки.
function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
