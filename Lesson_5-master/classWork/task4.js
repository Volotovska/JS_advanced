/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.

    Например:
      encryptCesar('Word', 3);
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1('Sdwq', 3);
      decryptCesar1(...)
      ...
      decryptCesar5(...)

*/

function encryptCesar(shift, word) {
  var chars = [];
  var lowerCaseWord = word.toLowerCase();
  for(var i = 0; i < lowerCaseWord.length; i++){
    chars.push(lowerCaseWord.charCodeAt(i) + shift);
  }
  var newWord = String.fromCharCode.apply(null, chars);
  return newWord;
};

var c = encryptCesar(2, 'wOrld');
console.log(c);

function decryptCesar(shift, word) {
  var newchars = [];
  var lowerCaseWord = word.toLowerCase();
  for(var i = 0; i < lowerCaseWord.length; i++){
    newchars.push(lowerCaseWord.charCodeAt(i) - shift);
  }
  var initialWord = String.fromCharCode.apply(null, newchars);
  return initialWord;
};

var g = decryptCesar(2, 'yqtnf');
console.log(g);

// var arg = {word : 'word', shift: '2'};

// var res = encryptCesar.bind(arg);

// console.log(res());

var encryptCesar1 = encryptCesar.bind(null, 1);

var encryptCesar2 = encryptCesar.bind(null, 2);
 var p = encryptCesar2('world');
console.log(p);

var encryptCesar3 = encryptCesar.bind(null, 3);

var encryptCesar4 = encryptCesar.bind(null, 4);

var encryptCesar5 = encryptCesar.bind(null, 5);