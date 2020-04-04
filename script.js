const KEYS = [
  {
    code: 'Backquote',
    eng: {
      caps: '`',
      caseDown: '`',
      caseUp: '~',
      shiftCaps: '~',
    },
    rus: {
      caps: 'Ё',
      caseDown: 'ё',
      caseUp: 'Ё',
      shiftCaps: 'ё',
    },
  }, {
    code: 'Digit1',
    eng: {
      caps: '1',
      caseDown: '1',
      caseUp: '!',
      shiftCaps: '!',
    },
    rus: {
      caps: '1',
      caseDown: '1',
      caseUp: '!',
      shiftCaps: '!',
    },
  }, {
    code: 'Digit2',
    eng: {
      caps: '2',
      caseDown: '2',
      caseUp: '@',
      shiftCaps: '@',
    },
    rus: {
      caps: '2',
      caseDown: '2',
      caseUp: '"',
      shiftCaps: '"',
    },
  }, {
    code: 'Digit3',
    eng: {
      caps: '3',
      caseDown: '3',
      caseUp: '#',
      shiftCaps: '#',
    },
    rus: {
      caps: '3',
      caseDown: '3',
      caseUp: '№',
      shiftCaps: '№',
    },
  }, {
    code: 'Digit4',
    eng: {
      caps: '4',
      caseDown: '4',
      caseUp: '$',
      shiftCaps: '$',
    },
    rus: {
      caps: '4',
      caseDown: '4',
      caseUp: ';',
      shiftCaps: ';',
    },
  }, {
    code: 'Digit5',
    eng: {
      caps: '5',
      caseDown: '5',
      caseUp: '%',
      shiftCaps: '%',
    },
    rus: {
      caps: '5',
      caseDown: '5',
      caseUp: '%',
      shiftCaps: '%',
    },
  }, {
    code: 'Digit6',
    eng: {
      caps: '6',
      caseDown: '6',
      caseUp: '^',
      shiftCaps: '^',
    },
    rus: {
      caps: '6',
      caseDown: '6',
      caseUp: ':',
      shiftCaps: ':',
    },
  }, {
    code: 'Digit7',
    eng: {
      caps: '7',
      caseDown: '7',
      caseUp: '&',
      shiftCaps: '&',
    },
    rus: {
      caps: '7',
      caseDown: '7',
      caseUp: '?',
      shiftCaps: '?',
    },
  }, {
    code: 'Digit8',
    eng: {
      caps: '8',
      caseDown: '8',
      caseUp: '*',
      shiftCaps: '*',
    },
    rus: {
      caps: '8',
      caseDown: '8',
      caseUp: '*',
      shiftCaps: '*',
    },
  }, {
    code: 'Digit9',
    eng: {
      caps: '9',
      caseDown: '9',
      caseUp: '(',
      shiftCaps: '(',
    },
    rus: {
      caps: '9',
      caseDown: '9',
      caseUp: '(',
      shiftCaps: '(',
    },
  }, {
    code: 'Digit0',
    eng: {
      caps: '0',
      caseDown: '0',
      caseUp: ')',
      shiftCaps: ')',
    },
    rus: {
      caps: '0',
      caseDown: '0',
      caseUp: ')',
      shiftCaps: ')',
    },
  }, {
    code: 'Minus',
    eng: {
      caps: '-',
      caseDown: '-',
      caseUp: '_',
      shiftCaps: '_',
    },
    rus: {
      caps: '-',
      caseDown: '-',
      caseUp: '_',
      shiftCaps: '_',
    },
  }, {
    code: 'Equal',
    eng: {
      caps: '=',
      caseDown: '=',
      caseUp: '+',
      shiftCaps: '+',
    },
    rus: {
      caps: '=',
      caseDown: '=',
      caseUp: '+',
      shiftCaps: '+',
    },
  }, {
    code: 'Backspace',
    eng: {
      caseDown: 'Backspace',
      caseUp: 'Backspace',
    },
    rus: {
      caseDown: 'Backspace',
      caseUp: 'Backspace',
    },
  }, {
    code: 'Tab',
    eng: {
      caseDown: 'Tab',
      caseUp: 'Tab',
    },
    rus: {
      caseDown: 'Tab',
      caseUp: 'Tab',
    },
  }, {
    code: 'KeyQ',
    eng: {
      caseDown: 'q',
      caseUp: 'Q',
    },
    rus: {
      caseDown: 'й',
      caseUp: 'Й',
    },
  }, {
    code: 'KeyW',
    eng: {
      caseDown: 'w',
      caseUp: 'W',
    },
    rus: {
      caseDown: 'ц',
      caseUp: 'Ц',
    },
  }, {
    code: 'KeyE',
    eng: {
      caseDown: 'e',
      caseUp: 'E',
    },
    rus: {
      caseDown: 'у',
      caseUp: 'У',
    },
  }, {
    code: 'KeyR',
    eng: {
      caseDown: 'r',
      caseUp: 'R',
    },
    rus: {
      caseDown: 'к',
      caseUp: 'К',
    },
  }, {
    code: 'KeyT',
    eng: {
      caseDown: 't',
      caseUp: 'T',
    },
    rus: {
      caseDown: 'е',
      caseUp: 'Е',
    },
  }, {
    code: 'KeyY',
    eng: {
      caseDown: 'y',
      caseUp: 'Y',
    },
    rus: {
      caseDown: 'н',
      caseUp: 'Н',
    },
  }, {
    code: 'KeyU',
    eng: {
      caseDown: 'u',
      caseUp: 'U',
    },
    rus: {
      caseDown: 'г',
      caseUp: 'Г',
    },
  }, {
    code: 'KeyI',
    eng: {
      caseDown: 'i',
      caseUp: 'I',
    },
    rus: {
      caseDown: 'ш',
      caseUp: 'Ш',
    },
  }, {
    code: 'KeyO',
    eng: {
      caseDown: 'o',
      caseUp: 'O',
    },
    rus: {
      caseDown: 'щ',
      caseUp: 'Щ',
    },
  }, {
    code: 'KeyP',
    eng: {
      caseDown: 'p',
      caseUp: 'P',
    },
    rus: {
      caseDown: 'з',
      caseUp: 'З',
    },
  }, {
    code: 'BracketLeft',
    eng: {
      caps: '[',
      caseDown: '[',
      caseUp: '{',
      shiftCaps: '{',
    },
    rus: {
      caps: 'Х',
      caseDown: 'х',
      caseUp: 'Х',
      shiftCaps: 'х',
    },
  }, {
    code: 'BracketRight',
    eng: {
      caps: ']',
      caseDown: ']',
      caseUp: '}',
      shiftCaps: '}',
    },
    rus: {
      caps: 'Ъ',
      caseDown: 'ъ',
      caseUp: 'Ъ',
      shiftCaps: 'ъ',
    },
  }, {
    code: 'Backslash',
    eng: {
      caps: '\\',
      caseDown: '\\',
      caseUp: '|',
      shiftCaps: '|',
    },
    rus: {
      caps: '\\',
      caseDown: '\\',
      caseUp: '/',
      shiftCaps: '/',
    },
  }, {
    code: 'Delete',
    eng: {
      caseDown: 'Del',
      caseUp: 'Del',
    },
    rus: {
      caseDown: 'Del',
      caseUp: 'Del',
    },
  }, {
    code: 'CapsLock',
    eng: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
    },
    rus: {
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
    },
  }, {
    code: 'KeyA',
    eng: {
      caseDown: 'a',
      caseUp: 'A',
    },
    rus: {
      caseDown: 'ф',
      caseUp: 'Ф',
    },
  }, {
    code: 'KeyS',
    eng: {
      caseDown: 's',
      caseUp: 'S',
    },
    rus: {
      caseDown: 'ы',
      caseUp: 'Ы',
    },
  }, {
    code: 'KeyD',
    eng: {
      caseDown: 'd',
      caseUp: 'D',
    },
    rus: {
      caseDown: 'в',
      caseUp: 'В',
    },
  }, {
    code: 'KeyF',
    eng: {
      caseDown: 'f',
      caseUp: 'F',
    },
    rus: {
      caseDown: 'а',
      caseUp: 'А',
    },
  }, {
    code: 'KeyG',
    eng: {
      caseDown: 'g',
      caseUp: 'G',
    },
    rus: {
      caseDown: 'п',
      caseUp: 'П',
    },
  }, {
    code: 'KeyH',
    eng: {
      caseDown: 'h',
      caseUp: 'H',
    },
    rus: {
      caseDown: 'р',
      caseUp: 'Р',
    },
  }, {
    code: 'KeyJ',
    eng: {
      caseDown: 'j',
      caseUp: 'J',
    },
    rus: {
      caseDown: 'о',
      caseUp: 'О',
    },
  }, {
    code: 'KeyK',
    eng: {
      caseDown: 'k',
      caseUp: 'K',
    },
    rus: {
      caseDown: 'л',
      caseUp: 'Л',
    },
  }, {
    code: 'KeyL',
    eng: {
      caseDown: 'l',
      caseUp: 'L',
    },
    rus: {
      caseDown: 'д',
      caseUp: 'Д',
    },
  }, {
    code: 'Semicolon',
    eng: {
      caps: ';',
      caseDown: ';',
      caseUp: ':',
      shiftCaps: ':',
    },
    rus: {
      caps: 'Ж',
      caseDown: 'ж',
      caseUp: 'Ж',
      shiftCaps: 'ж',
    },
  }, {
    code: 'Quote',
    eng: {
      caps: "'",
      caseDown: "'",
      caseUp: '"',
      shiftCaps: '"',
    },
    rus: {
      caps: 'Э',
      caseDown: 'э',
      caseUp: 'Э',
      shiftCaps: 'э',
    },
  }, {
    code: 'Enter',
    eng: {
      caseDown: 'Enter',
      caseUp: 'Enter',
    },
    rus: {
      caseDown: 'Enter',
      caseUp: 'Enter',
    },
  }, {
    code: 'ShiftLeft',
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
    rus: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
  }, {
    code: 'KeyZ',
    eng: {
      caseDown: 'z',
      caseUp: 'Z',
    },
    rus: {
      caseDown: 'я',
      caseUp: 'Я',
    },
  }, {
    code: 'KeyX',
    eng: {
      caseDown: 'x',
      caseUp: 'X',
    },
    rus: {
      caseDown: 'ч',
      caseUp: 'Ч',
    },
  }, {
    code: 'KeyC',
    eng: {
      caseDown: 'c',
      caseUp: 'C',
    },
    rus: {
      caseDown: 'с',
      caseUp: 'С',
    },
  }, {
    code: 'KeyV',
    eng: {
      caseDown: 'v',
      caseUp: 'V',
    },
    rus: {
      caseDown: 'м',
      caseUp: 'М',
    },
  }, {
    code: 'KeyB',
    eng: {
      caseDown: 'b',
      caseUp: 'B',
    },
    rus: {
      caseDown: 'и',
      caseUp: 'И',
    },
  }, {
    code: 'KeyN',
    eng: {
      caseDown: 'n',
      caseUp: 'N',
    },
    rus: {
      caseDown: 'т',
      caseUp: 'Т',
    },
  }, {
    code: 'KeyM',
    eng: {
      caseDown: 'm',
      caseUp: 'M',
    },
    rus: {
      caseDown: 'ь',
      caseUp: 'Ь',
    },
  }, {
    code: 'Comma',
    eng: {
      caps: ',',
      caseDown: ',',
      caseUp: '<',
      shiftCaps: '<',
    },
    rus: {
      caps: 'Б',
      caseDown: 'б',
      caseUp: 'Б',
      shiftCaps: 'б',
    },
  }, {
    code: 'Period',
    eng: {
      caps: '.',
      caseDown: '.',
      caseUp: '>',
      shiftCaps: '>',
    },
    rus: {
      caps: 'Ю',
      caseDown: 'ю',
      caseUp: 'Ю',
      shiftCaps: 'ю',
    },
  }, {
    code: 'Slash',
    eng: {
      caps: '/',
      caseDown: '/',
      caseUp: '?',
      shiftCaps: '?',
    },
    rus: {
      caps: '.',
      caseDown: '.',
      caseUp: ',',
      shiftCaps: ',',
    },
  }, {
    code: 'ArrowUp',
    eng: {
      caseDown: '▲',
      caseUp: '▲',
    },
    rus: {
      caseDown: '▲',
      caseUp: '▲',
    },
  }, {
    code: 'ShiftRight',
    eng: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
    rus: {
      caseDown: 'Shift',
      caseUp: 'Shift',
    },
  }, {
    code: 'ControlLeft',
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
    rus: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
  }, {
    code: 'MetaLeft',
    eng: {
      caseDown: 'Win',
      caseUp: 'Win',
    },
    rus: {
      caseDown: 'Win',
      caseUp: 'Win',
    },
  }, {
    code: 'AltLeft',
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
    rus: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
  }, {
    code: 'Space',
    eng: {
      caseDown: ' ',
      caseUp: ' ',
    },
    rus: {
      caseDown: ' ',
      caseUp: ' ',
    },
  }, {
    code: 'AltRight',
    eng: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
    rus: {
      caseDown: 'Alt',
      caseUp: 'Alt',
    },
  }, {
    code: 'ArrowLeft',
    eng: {
      caseDown: '◄',
      caseUp: '◄',
    },
    rus: {
      caseDown: '◄',
      caseUp: '◄',
    },
  }, {
    code: 'ArrowDown',
    eng: {
      caseDown: '▼',
      caseUp: '▼',
    },
    rus: {
      caseDown: '▼',
      caseUp: '▼',
    },
  }, {
    code: 'ArrowRight',
    eng: {
      caseDown: '►',
      caseUp: '►',
    },
    rus: {
      caseDown: '►',
      caseUp: '►',
    },
  }, {
    code: 'ControlRight',
    eng: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
    rus: {
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
    },
  },
];
class Key {
  constructor({ code, eng, rus }) {
    this.code = code;
    this.eng = eng;
    this.rus = rus;
  }

  generateKey() {
    let template = '';
    const key = document.createElement('div');

    switch (this.code) {
      case 'Backspace':
      case 'CapsLock':
      case 'ShiftLeft':
        key.className = `key large ${this.code}`;
        break;
      case 'Tab':
        key.className = `key Tab ${this.code}`;
        break;
      case 'Enter':
      case 'ShiftRight':
        key.className = `key middle ${this.code}`;
        break;
      case 'Space':
        key.className = `key Space ${this.code}`;
        break;
      default:
        key.className = `key ${this.code}`;
    }

    // key.setAttribute('data-code', this.code);

    if (this.rus) {
      template += '<span class="rus">';
      template += `<span class="caseDown">${this.rus.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.rus.caseUp}</span>`;
      template += `<span class="caps hidden">${this.rus.caps || this.rus.caseUp}</span>`;
      template += `<span class="shiftCaps hidden">${this.rus.shiftCaps || this.rus.caseDown}</span>`;
      template += '</span>';
    }

    if (this.eng) {
      template += '<span class="eng hidden">';
      template += `<span class="caseDown hidden">${this.eng.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.eng.caseUp}</span>`;
      template += `<span class="caps hidden">${this.eng.caps || this.eng.caseUp}</span>`;
      template += `<span class="shiftCaps hidden">${this.eng.shiftCaps || this.eng.caseDown}</span>`;
      template += '</span>';
    }

    key.innerHTML = template;
    return key;
  }
}

const generateKeys = (data) => {
  const keys = [];
  data.forEach((key) => {
    keys.push(new Key(key));
  });
  return keys;
};

const renderKeysToDom = () => {
  const container = document.querySelector('.keyboard');
  const frag = document.createDocumentFragment();
  generateKeys(KEYS).forEach((key) => {
    frag.append(key.generateKey());
  });
  container.append(frag);
};

const eventKeys = ['Backspace', 'Tab', 'Delete', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'];

const pressedKey = {
  event: null,
  code: null,
  element: null,
  char: null,
};

const settings = {
  get lang() {
    return localStorage.getItem('lang') || 'rus';
  },
  set lang(value) {
    localStorage.setItem('lang', value);
  },
  case: 'caseDown',
};

const toggleLang = () => {
  const elem = document.querySelectorAll(`span.${settings.lang}`);
  for (let i = 0; i < elem.length; i += 1) {
    elem[i].classList.toggle('hidden');
    elem[i].querySelectorAll(`span.${settings.case}`)[0].classList.toggle('hidden');
  }
  settings.lang = settings.lang === 'rus' ? 'eng' : 'rus';
  const toggleElem = document.querySelectorAll(`span.${settings.lang}`);
  for (let i = 0; i < elem.length; i += 1) {
    toggleElem[i].classList.toggle('hidden');
    toggleElem[i].querySelectorAll(`span.${settings.case}`)[0].classList.toggle('hidden');
  }
};

let textArea = null;

function KeyFunction() {
  let cursorPosition = textArea.selectionStart;
  const cursorPositionEnd = textArea.selectionEnd;
  function write() {
    if (textArea.selectionStart >= 0 && textArea.selectionStart <= textArea.value.length) {
      textArea.value = textArea.value.slice(0, cursorPosition) + pressedKey.char
      + textArea.value.slice(cursorPosition);
      cursorPosition += pressedKey.char.length;
    } else {
      textArea.value += pressedKey.char;
    }
    textArea.selectionEnd = cursorPosition;
  }

  switch (pressedKey.code) {
    case 'Backspace':
      if (textArea.selectionStart >= 0 && textArea.selectionStart <= textArea.value.length) {
        if (textArea.selectionStart !== textArea.selectionEnd) {
          textArea.value = textArea.value.slice(0, cursorPosition)
          + textArea.value.slice(cursorPositionEnd, textArea.value.length);
        } else {
          textArea.value = textArea.value.slice(0, cursorPosition - 1)
          + textArea.value.slice(cursorPosition, textArea.value.length);
          cursorPosition -= 1;
        }
      }
      textArea.selectionEnd = cursorPosition;
      break;
    case 'Tab':
      pressedKey.char = '\t';
      write();
      break;
    case 'Delete':
      if (textArea.selectionStart >= 0 && textArea.selectionStart <= textArea.value.length) {
        if (textArea.selectionStart !== textArea.selectionEnd) {
          textArea.value = textArea.value.slice(0, cursorPosition)
          + textArea.value.slice(cursorPositionEnd, textArea.value.length);
        } else {
          textArea.value = textArea.value.slice(0, cursorPosition)
          + textArea.value.slice(cursorPosition + 1, textArea.value.length);
        }
      }
      textArea.selectionEnd = cursorPosition;
      break;
    case 'Enter':
      pressedKey.char = '\n';
      write();
      break;
    case 'CapsLock':
      toggleLang();
      break;
    // case 'Backspace':
    //   console.log (1);
    //   break;
    // case 'Backspace':
    //   console.log (1);
    //   break;
    // case 'Backspace':
    //   console.log (1);
    //   break;
    // case 'Backspace':
    //   console.log (1);
    //   break;
    default:
      write();
  }
  if (pressedKey.event.altKey && pressedKey.event.shiftKey) {
    toggleLang();
  }
}

function keyDownHandler(event) {
  event.preventDefault();
  pressedKey.event = event;
  pressedKey.code = event.code;
  [pressedKey.element] = document.getElementsByClassName(event.code);
  pressedKey.char = pressedKey.element.querySelectorAll(':not(.hidden)')[1].textContent;
  KeyFunction();
// "MetaLeft" === pressedKey.code ? (this.addActiveState(), setTimeout(removeActiveState.bind(this), 300)) : ["CapsLock", "ShiftLeft", "ShiftRight"].includes(pressedKey.code) || addActiveState();
}

// const KeyUpHandler = {

// };

// function mouseDownHandler(event) {
//   const target = event.target;
//   const elem = target.closest('div');
  // let code = elem.dataset.code;
//   pressedKey.char = target.textContent;
  // console.log (code);
  // console.log (text);
  // console.log (target);
  // console.log (elem);
//   KeyFunction();
// };

// const MouseUpHandler = {

// };


document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);
// document.addEventListener('mousedown', mouseDownHandler);
// document.addEventListener('mouseup', mouseUpHandler);
window.onload = function init() {
  if (KEYS) {
    const textarea = document.createElement('textarea');
    const title = document.createElement('p');
    const keyboard = document.createElement('div');
    title.innerText = 'Переключение языков пока Alt + Shift';
    textarea.classList.add('textarea');
    textarea.setAttribute('id', 'textarea');
    // textarea.autofocus = true;
    title.classList.add('title'); // TODO нет такого стиля доделать
    keyboard.classList.add('keyboard');
    document.body.append(textarea);
    document.body.append(title);
    document.body.append(keyboard);
    renderKeysToDom();
    textArea = textarea;
  }
};
