import keys from './keysLayout.js';

function createKeyBoard() {
  const main = document.createElement('div');
  const container = document.createElement('div');

  main.appendChild(container);
  document.body.appendChild(main);
  main.classList.add('keyboard');
  container.classList.add('keyboard__container');
  const keysEl = createKeys(keys);
  console.log(keysEl);
  container.appendChild(keysEl);
  container.querySelectorAll('.keyboard__btn');
  main.appendChild(container);
}

function createKey(btnName) {
  return `<button class="btns">${btnName}</button>`;
}

function createKeys(keys) {
  const all = keys.forEach(key => {
    const keyBtn = document.createElement('li');
    keyBtn.setAttribute('type', 'button');
    keyBtn.classList.add('keyboard_btn');

    switch (key) {
      case 'backspace':
        keyBtn.classList.add('keyboard__btn_l');
        keyBtn.innerHTML = createKey('backspace');
        console.log('hhkjh');
        keyBtn.addEventListener('click', () => {
          // this.properties.value = this.properties.value.substring(
          //   0,
          //   this.properties.value.length - 1
          // );
          // this._triggerEvent('oninput');
        });

        break;

      case 'caps':
        keyBtn.classList.add('keyboard__btn_l', 'keyboard__btn--activatable');
        keyBtn.innerHTML = createKey('capslock');

        //   keyBtn.addEventListener('click', () => {
        //     this._toggleCapsLock();
        //     keyBtn.classList.toggle('keyboard__btn--active', this.properties.capsLock);
        //   });

        break;

      case 'enter':
        keyBtn.classList.add('keyboard__btn_l');
        keyBtn.innerHTML = createKey('enter');

        //   keyBtn.addEventListener('click', () => {
        //     this.properties.value += '\n';
        //     this._triggerEvent('oninput');
        //   });

        break;

      case 'space':
        keyBtn.classList.add('keyboard__btn__xl');
        keyBtn.innerHTML = createKey('space');

        //   keyBtn.addEventListener('click', () => {
        //     this.properties.value += ' ';
        //     this._triggerEvent('oninput');
        //   });

        break;

      case 'shift':
        keyBtn.classList.add('keyboard__key_l', 'keyboard__btn--dark');
        keyBtn.innerHTML = createKey('shift');

        //   keyBtn.addEventListener('click', () => {
        //     this.close();
        //     this._triggerEvent('onclose');
        //   });

        break;

      default:
        keyBtn.textContent = key.toLowerCase();
        keyBtn.innerHTML = createKey('');
        //   keyBtn.addEventListener('click', () => {
        //     this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
        //     this._triggerEvent('oninput');
        //   });

        break;
    }
    console.log(keyBtn);
    return keyBtn;
  });

  console.log(all);
}
createKeyBoard();
