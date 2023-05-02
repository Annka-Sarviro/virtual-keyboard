import keys from './keysLayout.js';

const testInner = [];

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

        keyBtn.addEventListener('click', () => {
          // this.properties.value = this.properties.value.substring(
          //   0,
          //   this.properties.value.length - 1
          // );
          // this._triggerEvent('oninput');
        });

        break;

      case 'caps':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('capslock');

        //   keyBtn.addEventListener('click', () => {
        //     this._toggleCapsLock();
        //     keyBtn.classList.toggle('keyboard__btn--active', this.properties.capsLock);
        //   });

        break;

      case 'enter':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('enter');

        //   keyBtn.addEventListener('click', () => {
        //     this.properties.value += '\n';
        //     this._triggerEvent('oninput');
        //   });

        break;

      case 'space':
        keyBtn.classList.add('keyboard__btn_xl'), 'keyboard__btn_dark';
        keyBtn.innerHTML = createKey('');
        keyBtn.addEventListener('click', () => buttonClick(' ', keyBtn));

        //   keyBtn.addEventListener('click', () => {
        //     this.properties.value += ' ';
        //     this._triggerEvent('oninput');
        //   });

        break;

      case 'shift':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('shift');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;
      case 'ctrl':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('ctrl');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;
      case 'alt':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('alt');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;
      case 'del':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('del');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;
      case 'tab':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('tad');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;
      case 'win':
        keyBtn.classList.add('keyboard__btn', 'keyboard__btn_dark');
        keyBtn.innerHTML = createKey('win');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;

      default:
        keyBtn.innerHTML = createKey(key);
        keyBtn.addEventListener('click', () => buttonClick(key, keyBtn));
        keyBtn.addEventListener('keydown', () => moveRect(keyBtn));
        break;
    }
    return keyBtn;
  });

  return all;
}

const buttonClick = (key, keyBtn) => {
  testInner.push(key);
  keyBtn.classList.add('keyboard__btn_activ');
  document.querySelector('.input__board').textContent = testInner.join('');
  setTimeout(() => keyBtn.classList.remove('keyboard__btn_activ'), 300);
};

const moveRect = keyBtn => {
  console.log(event.key);
  testInner.push(event.key);
  keyBtn.classList.add('keyboard__btn_activ');
  document.querySelector('.input__board').textContent = testInner.join('');
  setTimeout(() => keyBtn.classList.remove('keyboard__btn_activ'), 300);
};
createKeyBoard();
