import keys from './keysLayout.js';

let testInner = [];
let isCaps = false;
let isShift = false;

function createKeyBoard() {
  const main = document.createElement('div');
  const container = document.createElement('div');
  const inputBoard = document.createElement('div');

  main.classList.add('keyboard');
  container.classList.add('keyboard__container');
  inputBoard.classList.add('input__board');

  const keysEl = createKeys(keys);
  keysEl.map(el => container.appendChild(el));
  container.querySelectorAll('.keyboard__btn');
  main.appendChild(inputBoard);
  main.appendChild(container);
  document.body.appendChild(main);

  const keysBtn = document.querySelectorAll('.keyboard__btn');
  keysBtn.forEach(key => key.addEventListener('click', () => buttonClick(key)));
  keysBtn.forEach(key => key.addEventListener('keydown', () => moveRect(key)));
}

function createKey(btnName) {
  return `<button type='button' class="btns">${btnName}</button>`;
}

function createKeys(keys) {
  const all = keys.map(key => {
    const keyBtn = document.createElement('li');
    keyBtn.setAttribute('type', 'button');
    keyBtn.classList.add('keyboard__btn');

    switch (key) {
      case 'backspace':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('backspace');

        keyBtn.addEventListener('click', () => {});

        break;

      case 'caps':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('capslock');

        break;

      case 'enter':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('enter');

        break;

      case 'space':
        keyBtn.classList.add('keyboard__btn_xl'), 'keyboard__btn_dark';
        keyBtn.innerHTML = createKey('');

        break;

      case 'shift':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark', 'keyboard__btn_shift');
        keyBtn.innerHTML = createKey('shift');

        break;
      case 'ctrl':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('ctrl');

        break;
      case 'alt':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('alt');

        break;
      case 'del':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('del');

        break;
      case 'tab':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('tab');

        break;
      case 'win':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('win');

        break;

      default:
        keyBtn.innerHTML = createKey(key);

        break;
    }
    return keyBtn;
  });

  return all;
}

const buttonClick = key => {
  let text = key.textContent;
  let input = testInner;
  if (!text) {
    text = ' ';
  }

  if (text === 'backspace') {
    text = '';
    input.pop();
  }

  if (text === 'del') {
    text = '';
    input = [];
    testInner = [];
  }

  if (text === 'capslock') {
    isCaps ? (isCaps = false) : (isCaps = true);
    key.classList.toggle('keyboard__btn_activ_cap');
    text = '';
  }

  if (text === 'shift') {
    if (!isShift) {
      key.classList.toggle('keyboard__btn_activ_shift');
    }
    isShift = true;
    key.classList.add('keyboard__btn_activ_shift');
    text = '';
  }

  if (
    text === 'tab' ||
    text === 'shift' ||
    text === 'ctrl' ||
    text === 'win' ||
    text === 'alt' ||
    text === 'enter'
  ) {
    text = '';
  }

  if (isCaps) {
    text = text.toUpperCase();
  } else if (isShift) {
    text = text.toUpperCase();
  } else {
    text = text.toLowerCase();
  }
  testInner.push(text);
  key.classList.add('keyboard__btn_activ');
  document.querySelector('.input__board').textContent = input.join('');

  if (key.textContent !== 'shift') {
    isShift = false;
  }

  if (!isShift) {
    const a = document.querySelector('.keyboard__btn_shift');

    if (a) {
      a.classList.remove('keyboard__btn_activ_shift');
    }
  }
  setTimeout(() => key.classList.remove('keyboard__btn_activ'), 300);
};

const moveRect = key => {
  testInner.push(event.key);
  key.classList.add('keyboard__btn_activ_key');
  document.querySelector('.input__board').textContent = testInner.join('');

  setTimeout(() => key.classList.remove('keyboard__btn_activ_key'), 20);
};

createKeyBoard();
