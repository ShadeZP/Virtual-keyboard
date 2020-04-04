const KEYS = [
  {
    code: 'Backquote',
    eng: {
      caps: '`',
      caseDown: '`',
      caseUp: '~',
      loverCaps: '~',
    },
    rus: {
      caps: 'Ё',
      caseDown: 'ё',
      caseUp: 'Ё',
      loverCaps: 'ё',
    },
  }, {
    code: 'Digit1',
    eng: {
      caps: '1',
      caseDown: '1',
      caseUp: '!',
      loverCaps: '!',
    },
    rus: {
      caps: '1',
      caseDown: '1',
      caseUp: '!',
      loverCaps: '!',
    },
  }, {
    code: 'Digit2',
    eng: {
      caps: '2',
      caseDown: '2',
      caseUp: '@',
      loverCaps: '@',
    },
    rus: {
      caps: '2',
      caseDown: '2',
      caseUp: '"',
      loverCaps: '"',
    },
  }, {
    code: 'Digit3',
    eng: {
      caps: '3',
      caseDown: '3',
      caseUp: '#',
      loverCaps: '#',
    },
    rus: {
      caps: '3',
      caseDown: '3',
      caseUp: '№',
      loverCaps: '№',
    },
  }, {
    code: 'Digit4',
    eng: {
      caps: '4',
      caseDown: '4',
      caseUp: '$',
      loverCaps: '$',
    },
    rus: {
      caps: '4',
      caseDown: '4',
      caseUp: ';',
      loverCaps: ';',
    },
  }, {
    code: 'Digit5',
    eng: {
      caps: '5',
      caseDown: '5',
      caseUp: '%',
      loverCaps: '%',
    },
    rus: {
      caps: '5',
      caseDown: '5',
      caseUp: '%',
      loverCaps: '%',
    },
  }, {
    code: 'Digit6',
    eng: {
      caps: '6',
      caseDown: '6',
      caseUp: '^',
      loverCaps: '^',
    },
    rus: {
      caps: '6',
      caseDown: '6',
      caseUp: ':',
      loverCaps: ':',
    },
  }, {
    code: 'Digit7',
    eng: {
      caps: '7',
      caseDown: '7',
      caseUp: '&',
      loverCaps: '&',
    },
    rus: {
      caps: '7',
      caseDown: '7',
      caseUp: '?',
      loverCaps: '?',
    },
  }, {
    code: 'Digit8',
    eng: {
      caps: '8',
      caseDown: '8',
      caseUp: '*',
      loverCaps: '*',
    },
    rus: {
      caps: '8',
      caseDown: '8',
      caseUp: '*',
      loverCaps: '*',
    },
  }, {
    code: 'Digit9',
    eng: {
      caps: '9',
      caseDown: '9',
      caseUp: '(',
      loverCaps: '(',
    },
    rus: {
      caps: '9',
      caseDown: '9',
      caseUp: '(',
      loverCaps: '(',
    },
  }, {
    code: 'Digit0',
    eng: {
      caps: '0',
      caseDown: '0',
      caseUp: ')',
      loverCaps: ')',
    },
    rus: {
      caps: '0',
      caseDown: '0',
      caseUp: ')',
      loverCaps: ')',
    },
  }, {
    code: 'Minus',
    eng: {
      caps: '-',
      caseDown: '-',
      caseUp: '_',
      loverCaps: '_',
    },
    rus: {
      caps: '-',
      caseDown: '-',
      caseUp: '_',
      loverCaps: '_',
    },
  }, {
    code: 'Equal',
    eng: {
      caps: '=',
      caseDown: '=',
      caseUp: '+',
      loverCaps: '+',
    },
    rus: {
      caps: '=',
      caseDown: '=',
      caseUp: '+',
      loverCaps: '+',
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
      loverCaps: '{',
    },
    rus: {
      caps: 'Х',
      caseDown: 'х',
      caseUp: 'Х',
      loverCaps: 'х',
    },
  }, {
    code: 'BracketRight',
    eng: {
      caps: ']',
      caseDown: ']',
      caseUp: '}',
      loverCaps: '}',
    },
    rus: {
      caps: 'Ъ',
      caseDown: 'ъ',
      caseUp: 'Ъ',
      loverCaps: 'ъ',
    },
  }, {
    code: 'Backslash',
    eng: {
      caps: '\\',
      caseDown: '\\',
      caseUp: '|',
      loverCaps: '|',
    },
    rus: {
      caps: '\\',
      caseDown: '\\',
      caseUp: '/',
      loverCaps: '/',
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
      loverCaps: ':',
    },
    rus: {
      caps: 'Ж',
      caseDown: 'ж',
      caseUp: 'Ж',
      loverCaps: 'ж',
    },
  }, {
    code: 'Quote',
    eng: {
      caps: "'",
      caseDown: "'",
      caseUp: '"',
      loverCaps: '"',
    },
    rus: {
      caps: 'Э',
      caseDown: 'э',
      caseUp: 'Э',
      loverCaps: 'э',
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
      loverCaps: '<',
    },
    rus: {
      caps: 'Б',
      caseDown: 'б',
      caseUp: 'Б',
      loverCaps: 'б',
    },
  }, {
    code: 'Period',
    eng: {
      caps: '.',
      caseDown: '.',
      caseUp: '>',
      loverCaps: '>',
    },
    rus: {
      caps: 'Ю',
      caseDown: 'ю',
      caseUp: 'Ю',
      loverCaps: 'ю',
    },
  }, {
    code: 'Slash',
    eng: {
      caps: '/',
      caseDown: '/',
      caseUp: '?',
      loverCaps: '?',
    },
    rus: {
      caps: '.',
      caseDown: '.',
      caseUp: ',',
      loverCaps: ',',
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
      template += `<span class="loverCaps hidden">${this.rus.loverCaps || this.rus.caseDown}</span>`;
      template += '</span>';
    }

    if (this.eng) {
      template += '<span class="eng hidden">';
      template += `<span class="caseDown hidden">${this.eng.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.eng.caseUp}</span>`;
      template += `<span class="caps hidden">${this.eng.caps || this.eng.caseUp}</span>`;
      template += `<span class="loverCaps hidden">${this.eng.loverCaps || this.eng.caseDown}</span>`;
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
  lang: 'rus',
  case: 'caseDown',
  ShiftLeftActive: false,
  ShiftRightActive: false,
  CapsLockActive: false,
};

function changeCase() {
  const elem = document.querySelectorAll(`span.${settings.lang}`);
  for (let i = 0; i < elem.length; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (!elem[i].querySelectorAll('span')[j].classList.contains('hidden')) {
        elem[i].querySelectorAll('span')[j].classList.add('hidden');
      }
    }
    if (settings.CapsLockActive && (settings.ShiftLeftActive || settings.ShiftRightActive)) {
      elem[i].querySelectorAll('span')[3].classList.remove('hidden');
      settings.case = 'loverCaps';
    } else if (settings.CapsLockActive) {
      elem[i].querySelectorAll('span')[2].classList.remove('hidden');
      settings.case = 'caps';
    } else if (settings.ShiftRightActive || settings.ShiftLeftActive) {
      elem[i].querySelectorAll('span')[1].classList.remove('hidden');
      settings.case = 'caseUp';
    } else {
      elem[i].querySelectorAll('span')[0].classList.remove('hidden');
      settings.case = 'caseDown';
    }
  }
}

const changeLang = () => {
  const elem = document.querySelectorAll(`span.${settings.lang}`);
  for (let i = 0; i < elem.length; i += 1) {
    elem[i].classList.toggle('hidden');
    elem[i].querySelectorAll(`span.${settings.case}`)[0].classList.toggle('hidden');
  }
  if (settings.lang === 'rus') {
    settings.lang = 'eng';
  } else {
    settings.lang = 'rus';
  }
  localStorage.setItem('lang', settings.lang);
  const toggleElem = document.querySelectorAll(`span.${settings.lang}`);
  for (let j = 0; j < toggleElem.length; j += 1) {
    toggleElem[j].classList.toggle('hidden');
    toggleElem[j].querySelectorAll(`span.${settings.case}`)[0].classList.toggle('hidden');
  }
};

function initLanguage() {
  if (localStorage.lang === 'eng') {
    changeLang();
  }
}

let textArea = null;

function addActive() {
  pressedKey.element.classList.add('active');
}

function removeActive() {
  if (pressedKey.element) {
    if (pressedKey.element.classList.contains('active')) {
      pressedKey.element.classList.remove('active');
    }
  }
}

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
      if (settings.CapsLockActive) {
        settings.CapsLockActive = false;
      } else {
        settings.CapsLockActive = true;
      }
      changeCase();
      break;
    case 'ShiftLeft':
      if (!settings.ShiftLeftActive && !settings.ShiftRightActive) {
        addActive();
        settings.ShiftLeftActive = true;
        changeCase();
      }
      break;
    case 'ShiftRight':
      if (!settings.ShiftLeftActive && !settings.ShiftRightActive) {
        addActive();
        settings.ShiftRightActive = true;
        changeCase();
      }
      break;
    default:
      write();
  }
  if (pressedKey.event.altKey && pressedKey.event.ctrlKey) {
    changeLang();
  }
}

function keyDownHandler(event) {
  event.preventDefault();
  pressedKey.event = event;
  pressedKey.code = event.code;
  [pressedKey.element] = document.getElementsByClassName(event.code);
  pressedKey.char = pressedKey.element.querySelectorAll(':not(.hidden)')[1].textContent;
  KeyFunction();
  addActive();
// "MetaLeft" === pressedKey.code ? (this.addActiveState(), setTimeout(removeActiveState.bind(this), 300)) : ["CapsLock", "ShiftLeft", "ShiftRight"].includes(pressedKey.code) || addActiveState();
}

function KeyUpHandler(event) {
  const elem = document.getElementsByClassName(event.code)[0];
  if (elem) {
    pressedKey.element = elem.closest('div');
  }
  if (event.code === 'ShiftLeft') {
    settings.ShiftLeftActive = false;
    removeActive();
    changeCase();
  } else if (event.code === 'ShiftRight') {
    settings.ShiftRightActive = false;
    removeActive();
    changeCase();
  } else {
    removeActive();
  }
}

function mouseDownHandler(event) {
  if (event.target.tagName.toLowerCase() === 'span') {
    pressedKey.event = event;
    pressedKey.element = event.target.closest('div');
    [, , pressedKey.code] = pressedKey.element.classList;
    pressedKey.char = event.target.textContent;
    KeyFunction();
    addActive();
    event.preventDefault();
  }
}

function mouseUpHandler(event) {
  pressedKey.event = event;
  pressedKey.element = event.target.closest('div');
  if (pressedKey.element) {
    if (pressedKey.element.classList.contains('key')) {
      [, , pressedKey.code] = pressedKey.element.classList;
    }
  }
  removeActive();
  if (settings.ShiftLeftActive) {
    if (pressedKey.code === 'ShiftLeft') {
      settings.ShiftLeftActive = false;
      changeCase();
    }
  }
  if (settings.ShiftRightActive) {
    if (pressedKey.code === 'ShiftRight') {
      settings.ShiftRightActive = false;
      changeCase();
    }
  }
}

window.onload = function init() {
  if (KEYS) {
    const textarea = document.createElement('textarea');
    const title = document.createElement('p');
    const keyboard = document.createElement('div');
    title.innerText = 'Переключение языков пока Ctrl + Alt';
    textarea.classList.add('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.autofocus = true;
    title.classList.add('title'); // TODO нет такого стиля доделать
    keyboard.classList.add('keyboard');
    document.body.append(textarea);
    document.body.append(title);
    document.body.append(keyboard);
    renderKeysToDom();
    textArea = textarea;
    initLanguage();
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', KeyUpHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }
};
