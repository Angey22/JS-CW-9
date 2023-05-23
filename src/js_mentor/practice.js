// Задача - 1
//! Условия:
// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

//! Решение задачи:
// Исходный объект - к задаче.
const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const refs = {
    form: document.querySelector('.form'),
    submitButton: document.querySelector('.btn-submit'),
};

refs.form.addEventListener('submit', handlerSubmit);

populateForm();


function handlerSubmit(e) {
    e.preventDefault();

    const { email, password } = e.target;

    if (refs.submitButton.textContent === 'Logout') {

        localStorage.removeItem('userData');

        refs.submitButton.textContent = 'Login';

        email.disabled = false;
        password.disabled = false;

        e.target.rest();
        return;
    }; 

    

    if (email.value !== USER_DATA.email && password.value !== USER_DATA.password) {
        alert('Неправильный ввод!')
        return;
    }

    localStorage.setItem('userData', JSON.stringify({ email: email.value, password: password.value }));
    
    refs.submitButton.textContent = 'Logout';

    email.disabled = true;
    password.disabled = true;
}

function populateForm() {
    const lsData = JSON.parse(localStorage.getItem('userData'));

    if (!lsData) { 
        return;
    }

    const { email, password } = refs.form;

    email.value = lsData.email;
    password.value = lsData.password;
}

// console.log(refs.submitButton);

//!============================================================

// Задача - 2
//! Условия:
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

//!============================================================

// Задача - 3
//! Условия:
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

//!============================================================

