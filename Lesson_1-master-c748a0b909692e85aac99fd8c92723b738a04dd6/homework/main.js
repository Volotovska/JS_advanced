

 /* Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  */
  // function getRandomIntInclusive(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }

  //   var r = getRandomIntInclusive(0,255);
  //   var g = getRandomIntInclusive(0,255);
  //   var b = getRandomIntInclusive(0,255);

  //   console.log(r, g, b); 
  //   // для понимания комбинации цифр r,g,b

  //   document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";



  // + Бонус, повесить обработчик на кнопку через метод onClick

  // var body = document.getElementsByTagName('body');
  // var div = document.createElement('div');
  // var button = document.createElement('input');

  // button.type = "button";
  // button.value = "Click and change color of page";
  // div.style.margin = "100px";
  // button.style.background = "rgb(0, 0, 153)";
  // button.style.color = "rgb(255, 255, 204)";
  // button.style.border = "1px solid rgb(255, 255, 204)";

  // button.onclick=function get_background(){

  //   function getRandomIntInclusive(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }

  //   var r = getRandomIntInclusive(0,255);
  //   var g = getRandomIntInclusive(0,255);
  //   var b = getRandomIntInclusive(0,255);

  //    document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
  // }

  // document.body.appendChild(div);
  // div.appendChild(button);
  


 // + Бонус, использовать 6-ричную систему исчесления и цвет HEX -> #FFCC00

//     function getRandomIntInclusive(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     var a = getRandomIntInclusive(0,255).toString(16);
//     var b = getRandomIntInclusive(0,255).toString(16);
//     var c = getRandomIntInclusive(0,255).toString(16);

//     console.log(a, b, c);

//     document.body.style.background = "#" + (a.length === 1 ? '0' + a : a) + (b.length === 1 ? '0' + b : b) + (c.length === 1 ? '0' + c : c);

//     console.log(document.body.style.background);
  


  //+ Бонус выводить полученый цвет по центру страницы.   
  //Необходимо создать блок через createElement задать ему стили через element.style
 // и вывести через appendChild или insertBefore

  // var body = document.getElementsByTagName('body');
  // var div1 = document.createElement('div');
  // var div2 = document.createElement('div');
  // var button = document.createElement('input');
  // button.type = "button";
  // button.value = "Click and change color of block";
  // div1.style.margin = "50px 200px";
  // div2.style.margin = "auto";
  // div2.style.border = " 2px solid black";
  // div2.style.width = "200px";
  // div2.style.height = "200px";
  // button.style.background = "rgb(0, 0, 153)";
  // button.style.color = "rgb(255, 255, 204)";
  // button.style.border = "1px solid rgb(255, 255, 204)";


  // document.body.appendChild(div1);
  // document.body.appendChild(div2);
  // div1.appendChild(button);

  // button.onclick=function get_background(){

  //   function getRandomIntInclusive(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }

  //   var r = getRandomIntInclusive(0,255);
  //   var g = getRandomIntInclusive(0,255);
  //   var b = getRandomIntInclusive(0,255);

  //     div2.style.background = "rgb(" + r + "," + g + "," + b + ")";
  // }
  
  /* 


  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 256;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb
      */


