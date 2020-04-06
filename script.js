const textarea = document.createElement('textarea');
const title = document.createElement('p');
const keyboard = document.createElement('div');

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
      caps: 'Backspace',
      caseDown: 'Backspace',
      caseUp: 'Backspace',
      loverCaps: 'Backspace',
    },
    rus: {
      caps: 'Backspace',
      caseDown: 'Backspace',
      caseUp: 'Backspace',
      loverCaps: 'Backspace',
    },
  }, {
    code: 'Tab',
    eng: {
      caps: 'Tab',
      caseDown: 'Tab',
      caseUp: 'Tab',
      loverCaps: 'Tab',
    },
    rus: {
      caps: 'Tab',
      caseDown: 'Tab',
      caseUp: 'Tab',
      loverCaps: 'Tab',
    },
  }, {
    code: 'KeyQ',
    eng: {
      caps: 'Q',
      caseDown: 'q',
      caseUp: 'Q',
      loverCaps: 'q',
    },
    rus: {
      caps: 'Й',
      caseDown: 'й',
      caseUp: 'Й',
      loverCaps: 'й',
    },
  }, {
    code: 'KeyW',
    eng: {
      caps: 'W',
      caseDown: 'w',
      caseUp: 'W',
      loverCaps: 'w',
    },
    rus: {
      caps: 'Ц',
      caseDown: 'ц',
      caseUp: 'Ц',
      loverCaps: 'ц',
    },
  }, {
    code: 'KeyE',
    eng: {
      caps: 'E',
      caseDown: 'e',
      caseUp: 'E',
      loverCaps: 'e',
    },
    rus: {
      caps: 'У',
      caseDown: 'у',
      caseUp: 'У',
      loverCaps: 'у',
    },
  }, {
    code: 'KeyR',
    eng: {
      caps: 'R',
      caseDown: 'r',
      caseUp: 'R',
      loverCaps: 'r',
    },
    rus: {
      caps: 'К',
      caseDown: 'к',
      caseUp: 'К',
      loverCaps: 'к',
    },
  }, {
    code: 'KeyT',
    eng: {
      caps: 'T',
      caseDown: 't',
      caseUp: 'T',
      loverCaps: 't',
    },
    rus: {
      caps: 'Е',
      caseDown: 'е',
      caseUp: 'Е',
      loverCaps: 'е',
    },
  }, {
    code: 'KeyY',
    eng: {
      caps: 'Y',
      caseDown: 'y',
      caseUp: 'Y',
      loverCaps: 'y',
    },
    rus: {
      caps: 'Н',
      caseDown: 'н',
      caseUp: 'Н',
      loverCaps: 'н',
    },
  }, {
    code: 'KeyU',
    eng: {
      caps: 'U',
      caseDown: 'u',
      caseUp: 'U',
      loverCaps: 'u',
    },
    rus: {
      caps: 'Г',
      caseDown: 'г',
      caseUp: 'Г',
      loverCaps: 'г',
    },
  }, {
    code: 'KeyI',
    eng: {
      caps: 'I',
      caseDown: 'i',
      caseUp: 'I',
      loverCaps: 'i',
    },
    rus: {
      caps: 'Ш',
      caseDown: 'ш',
      caseUp: 'Ш',
      loverCaps: 'ш',
    },
  }, {
    code: 'KeyO',
    eng: {
      caps: 'O',
      caseDown: 'o',
      caseUp: 'O',
      loverCaps: 'o',
    },
    rus: {
      caps: 'Щ',
      caseDown: 'щ',
      caseUp: 'Щ',
      loverCaps: 'щ',
    },
  }, {
    code: 'KeyP',
    eng: {
      caps: 'P',
      caseDown: 'p',
      caseUp: 'P',
      loverCaps: 'p',
    },
    rus: {
      caps: 'З',
      caseDown: 'з',
      caseUp: 'З',
      loverCaps: 'з',
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
      caps: 'Del',
      caseDown: 'Del',
      caseUp: 'Del',
      loverCaps: 'Del',
    },
    rus: {
      caps: 'Del',
      caseDown: 'Del',
      caseUp: 'Del',
      loverCaps: 'Del',
    },
  }, {
    code: 'CapsLock',
    eng: {
      caps: 'CapsLock',
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
      loverCaps: 'CapsLock',
    },
    rus: {
      caps: 'CapsLock',
      caseDown: 'CapsLock',
      caseUp: 'CapsLock',
      loverCaps: 'CapsLock',
    },
  }, {
    code: 'KeyA',
    eng: {
      caps: 'A',
      caseDown: 'a',
      caseUp: 'A',
      loverCaps: 'a',
    },
    rus: {
      caps: 'Ф',
      caseDown: 'ф',
      caseUp: 'Ф',
      loverCaps: 'ф',
    },
  }, {
    code: 'KeyS',
    eng: {
      caps: 'S',
      caseDown: 's',
      caseUp: 'S',
      loverCaps: 's',
    },
    rus: {
      caps: 'Ы',
      caseDown: 'ы',
      caseUp: 'Ы',
      loverCaps: 'ы',
    },
  }, {
    code: 'KeyD',
    eng: {
      caps: 'D',
      caseDown: 'd',
      caseUp: 'D',
      loverCaps: 'd',
    },
    rus: {
      caps: 'В',
      caseDown: 'в',
      caseUp: 'В',
      loverCaps: 'в',
    },
  }, {
    code: 'KeyF',
    eng: {
      caps: 'F',
      caseDown: 'f',
      caseUp: 'F',
      loverCaps: 'f',
    },
    rus: {
      caps: 'А',
      caseDown: 'а',
      caseUp: 'А',
      loverCaps: 'а',
    },
  }, {
    code: 'KeyG',
    eng: {
      caps: 'G',
      caseDown: 'g',
      caseUp: 'G',
      loverCaps: 'g',
    },
    rus: {
      caps: 'П',
      caseDown: 'п',
      caseUp: 'П',
      loverCaps: 'п',
    },
  }, {
    code: 'KeyH',
    eng: {
      caps: 'H',
      caseDown: 'h',
      caseUp: 'H',
      loverCaps: 'h',
    },
    rus: {
      caps: 'Р',
      caseDown: 'р',
      caseUp: 'Р',
      loverCaps: 'р',
    },
  }, {
    code: 'KeyJ',
    eng: {
      caps: 'J',
      caseDown: 'j',
      caseUp: 'J',
      loverCaps: 'j',
    },
    rus: {
      caps: 'О',
      caseDown: 'о',
      caseUp: 'О',
      loverCaps: 'о',
    },
  }, {
    code: 'KeyK',
    eng: {
      caps: 'K',
      caseDown: 'k',
      caseUp: 'K',
      loverCaps: 'k',
    },
    rus: {
      caps: 'Л',
      caseDown: 'л',
      caseUp: 'Л',
      loverCaps: 'л',
    },
  }, {
    code: 'KeyL',
    eng: {
      caps: 'L',
      caseDown: 'l',
      caseUp: 'L',
      loverCaps: 'l',
    },
    rus: {
      caps: 'Д',
      caseDown: 'д',
      caseUp: 'Д',
      loverCaps: 'д',
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
      caps: 'Enter',
      caseDown: 'Enter',
      caseUp: 'Enter',
      loverCaps: 'Enter',
    },
    rus: {
      caps: 'Enter',
      caseDown: 'Enter',
      caseUp: 'Enter',
      loverCaps: 'Enter',
    },
  }, {
    code: 'ShiftLeft',
    eng: {
      caps: 'Shift',
      caseDown: 'Shift',
      caseUp: 'Shift',
      loverCaps: 'Shift',
    },
    rus: {
      caps: 'Shift',
      caseDown: 'Shift',
      caseUp: 'Shift',
      loverCaps: 'Shift',
    },
  }, {
    code: 'KeyZ',
    eng: {
      caps: 'Z',
      caseDown: 'z',
      caseUp: 'Z',
      loverCaps: 'z',
    },
    rus: {
      caps: 'Я',
      caseDown: 'я',
      caseUp: 'Я',
      loverCaps: 'я',
    },
  }, {
    code: 'KeyX',
    eng: {
      caps: 'X',
      caseDown: 'x',
      caseUp: 'X',
      loverCaps: 'x',
    },
    rus: {
      caps: 'Ч',
      caseDown: 'ч',
      caseUp: 'Ч',
      loverCaps: 'ч',
    },
  }, {
    code: 'KeyC',
    eng: {
      caps: 'C',
      caseDown: 'c',
      caseUp: 'C',
      loverCaps: 'c',
    },
    rus: {
      caps: 'С',
      caseDown: 'с',
      caseUp: 'С',
      loverCaps: 'с',
    },
  }, {
    code: 'KeyV',
    eng: {
      caps: 'V',
      caseDown: 'v',
      caseUp: 'V',
      loverCaps: 'v',
    },
    rus: {
      caps: 'М',
      caseDown: 'м',
      caseUp: 'М',
      loverCaps: 'м',
    },
  }, {
    code: 'KeyB',
    eng: {
      caps: 'B',
      caseDown: 'b',
      caseUp: 'B',
      loverCaps: 'b',
    },
    rus: {
      caps: 'И',
      caseDown: 'и',
      caseUp: 'И',
      loverCaps: 'и',
    },
  }, {
    code: 'KeyN',
    eng: {
      caps: 'N',
      caseDown: 'n',
      caseUp: 'N',
      loverCaps: 'n',
    },
    rus: {
      caps: 'Т',
      caseDown: 'т',
      caseUp: 'Т',
      loverCaps: 'т',
    },
  }, {
    code: 'KeyM',
    eng: {
      caps: 'M',
      caseDown: 'm',
      caseUp: 'M',
      loverCaps: 'm',
    },
    rus: {
      caps: 'Ь',
      caseDown: 'ь',
      caseUp: 'Ь',
      loverCaps: 'ь',
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
      caps: '▲',
      caseDown: '▲',
      caseUp: '▲',
      loverCaps: '▲',
    },
    rus: {
      caps: '▲',
      caseDown: '▲',
      caseUp: '▲',
      loverCaps: '▲',
    },
  }, {
    code: 'ShiftRight',
    eng: {
      caps: 'Shift',
      caseDown: 'Shift',
      caseUp: 'Shift',
      loverCaps: 'Shift',
    },
    rus: {
      caps: 'Shift',
      caseDown: 'Shift',
      caseUp: 'Shift',
      loverCaps: 'Shift',
    },
  }, {
    code: 'ControlLeft',
    eng: {
      caps: 'Ctrl',
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      loverCaps: 'Ctrl',
    },
    rus: {
      caps: 'Ctrl',
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      loverCaps: 'Ctrl',
    },
  }, {
    code: 'MetaLeft',
    eng: {
      caps: 'Win',
      caseDown: 'Win',
      caseUp: 'Win',
      loverCaps: 'Win',
    },
    rus: {
      caps: 'Win',
      caseDown: 'Win',
      caseUp: 'Win',
      loverCaps: 'Win',
    },
  }, {
    code: 'AltLeft',
    eng: {
      caps: 'Alt',
      caseDown: 'Alt',
      caseUp: 'Alt',
      loverCaps: 'Alt',
    },
    rus: {
      caps: 'Alt',
      caseDown: 'Alt',
      caseUp: 'Alt',
      loverCaps: 'Alt',
    },
  }, {
    code: 'Space',
    eng: {
      caps: ' ',
      caseDown: ' ',
      caseUp: ' ',
      loverCaps: ' ',
    },
    rus: {
      caps: ' ',
      caseDown: ' ',
      caseUp: ' ',
      loverCaps: ' ',
    },
  }, {
    code: 'AltRight',
    eng: {
      caps: 'Alt',
      caseDown: 'Alt',
      caseUp: 'Alt',
      loverCaps: 'Alt',
    },
    rus: {
      caps: 'Alt',
      caseDown: 'Alt',
      caseUp: 'Alt',
      loverCaps: 'Alt',
    },
  }, {
    code: 'ArrowLeft',
    eng: {
      caps: '◄',
      caseDown: '◄',
      caseUp: '◄',
      loverCaps: '◄',
    },
    rus: {
      caps: '◄',
      caseDown: '◄',
      caseUp: '◄',
      loverCaps: '◄',
    },
  }, {
    code: 'ArrowDown',
    eng: {
      caps: '▼',
      caseDown: '▼',
      caseUp: '▼',
      loverCaps: '▼',
    },
    rus: {
      caps: '▼',
      caseDown: '▼',
      caseUp: '▼',
      loverCaps: '▼',
    },
  }, {
    code: 'ArrowRight',
    eng: {
      caps: '►',
      caseDown: '►',
      caseUp: '►',
      loverCaps: '►',
    },
    rus: {
      caps: '►',
      caseDown: '►',
      caseUp: '►',
      loverCaps: '►',
    },
  }, {
    code: 'ControlRight',
    eng: {
      caps: 'Ctrl',
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      loverCaps: 'Ctrl',
    },
    rus: {
      caps: 'Ctrl',
      caseDown: 'Ctrl',
      caseUp: 'Ctrl',
      loverCaps: 'Ctrl',
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
        key.className = `key ${this.code} large`;
        break;
      case 'Tab':
        key.className = `key ${this.code} Tab`;
        break;
      case 'Enter':
      case 'ShiftRight':
        key.className = `key ${this.code} middle`;
        break;
      case 'Space':
        key.className = `key ${this.code} Space`;
        break;
      default:
        key.className = `key ${this.code}`;
    }

    if (this.rus) {
      template += '<span class="rus">';
      template += `<span class="caseDown">${this.rus.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.rus.caseUp}</span>`;
      template += `<span class="caps hidden">${this.rus.caps}</span>`;
      template += `<span class="loverCaps hidden">${this.rus.loverCaps}</span>`;
      template += '</span>';
    }

    if (this.eng) {
      template += '<span class="eng hidden">';
      template += `<span class="caseDown hidden">${this.eng.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.eng.caseUp}</span>`;
      template += `<span class="caps hidden">${this.eng.caps}</span>`;
      template += `<span class="loverCaps hidden">${this.eng.loverCaps}</span>`;
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

const changeCase = () => {
  const elem = document.querySelectorAll(`span.${settings.lang}`);
  for (let i = 0; i < elem.length; i += 1) {
    for (let j = 0; j < 4; j += 1) {
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
};

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

const initLanguage = () => {
  if (localStorage.lang === 'eng') {
    changeLang();
  }
};

const setFocus = () => {
  textarea.focus();
};
setFocus();

let textArea = null;

const addActive = () => {
  pressedKey.element.classList.add('active');
};

const removeActive = () => {
  if (pressedKey.element) {
    if (pressedKey.element.classList.contains('active')) {
      pressedKey.element.classList.remove('active');
    }
  }
};

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
    case 'ArrowLeft':
      cursorPosition -= 1;
      textArea.selectionEnd = cursorPosition;
      break;
    case 'ArrowRight':
      cursorPosition += 1;
      textArea.selectionStart = cursorPosition;
      break;
    case 'ControlRight':
    case 'ControlLeft':
    case 'AltRight':
    case 'AltLeft':
    case 'MetaLeft':
      pressedKey.char = '';
      write();
      break;
    default:
      write();
  }
  if (pressedKey.event.altKey && pressedKey.event.ctrlKey && pressedKey.event.shiftKey) {
    return (1);
  }
  if (pressedKey.event.altKey && pressedKey.event.ctrlKey) {
    changeLang();
  }
}

const keyDownHandler = (event) => {
  event.preventDefault();
  KEYS.forEach((elem) => {
    if (elem.code === event.code) {
      pressedKey.event = event;
      pressedKey.code = event.code;
      [pressedKey.element] = document.getElementsByClassName(event.code);
      pressedKey.char = pressedKey.element.querySelectorAll(':not(.hidden)')[1].textContent;
      KeyFunction();
      addActive();
      setFocus();
    }
  });
};

const KeyUpHandler = (event) => {
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
};

const mouseDownHandler = (event) => {
  if (event.target.tagName.toLowerCase() === 'span') {
    pressedKey.event = event;
    pressedKey.element = event.target.closest('div');
    [, pressedKey.code] = pressedKey.element.classList;
    pressedKey.char = event.target.textContent;
    KeyFunction();
    addActive();
    setFocus();
    event.preventDefault();
  } else {
    setFocus();
  }
};

const mouseUpHandler = () => {
  setFocus();
  if (pressedKey.element) {
    if (pressedKey.element.classList.contains('key')) {
      [, pressedKey.code] = pressedKey.element.classList;
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
};

window.onload = function init() {
  if (KEYS) {
    title.innerText = 'Переключение языков Ctrl + Alt'
    textarea.classList.add('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.autofocus = true;
    title.classList.add('title');
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
