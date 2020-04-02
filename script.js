const TextArea = document.createElement('textarea');
const Title = document.createElement('p');
const Keyboard = document.createElement('div');
Title.innerText = 'Переключение языков пока хз';
TextArea.classList.add('textarea');
Title.classList.add('title'); // TODO нет такого стиля доделать
Keyboard.classList.add('keyboard');
document.body.append(TextArea);
document.body.append(Title);
document.body.append(Keyboard);

const Keys = [
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
        key.className = 'key large';
        break;
      case 'Tab':
        key.className = 'key Tab';
        break;
      case 'Enter':
      case 'ShiftRight':
        key.className = 'key middle';
        break;
      case 'Space':
        key.className = 'key Space';
        break;
      default:
        key.className = 'key';
    }
    // key.className = 'key';
    key.setAttribute('data-code', this.code);

    if (this.rus) {
      template += '<span class="rus">';
      template += `<span class="caseDown">${this.rus.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.rus.caseUp}</span>`;
      template += `<span class="caps hidden">${this.rus.caps}</span>`;
      template += `<span class="shiftCaps hidden">${this.rus.shiftCaps}</span>`;
      template += '</span>';
    }
    if (this.eng) {
      template += '<span class="eng hidden">';
      template += `<span class="caseDown hidden">${this.rus.caseDown}</span>`;
      template += `<span class="caseUP hidden">${this.rus.caseUp}</span>`;
      template += `<span class="caps hidden">${this.rus.caps}</span>`;
      template += `<span class="shiftCaps hidden">${this.rus.shiftCaps}</span>`;
      template += '</span>';
    }

    key.innerHTML = template;
    return key;
  }
}

const GenerateKeys = (data) => {
  const keys = [];
  data.forEach((key) => {
    keys.push(new Key(key));
  });
  return keys;
};

const renderKeysToDOm = () => {
  const container = document.querySelector('.keyboard');
  GenerateKeys(Keys).forEach((key) => {
    container.append(key.generateKey());
  });
};

window.onload = function init() {
  if (Keys) {
    renderKeysToDOm();
  }
};
