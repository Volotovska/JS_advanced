 /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

     Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

  */
      // // если каждую кнопку по отдельности

      // var button1 = document.querySelector('button[data-tab="1"]');
      // console.log(button1); 

      // var button2 = document.querySelector('button[data-tab="2"]');
      // console.log(button2);

      // var button3 = document.querySelector('button[data-tab="3"]');
      // console.log(button3);

  var button = document.querySelectorAll('button');

  /*
   2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active
  */
  // если 1 обработчик на 3 кнопки
  var div = document.getElementsByClassName('tab');
  console.log(button);

  button.forEach(function(item, index){
    button[index].onclick= function chngClass(){
      for(var j = 0; j<div.length; j++){
        if(index === j) {
          div[j].classList.add('active');
          console.log(index);
          }
          else {
            div[j].classList.remove('active');
          }
        } 
      }
    });

  // // если разные обработчики на 3 кнопки
  // var div1 = document.querySelector('div[data-tab="1"]');
  // console.log(div1);

  //           button1.onclick = function(event) {
  //               div1.classList.add('active');
  //               console.log(div1);
  //           }

  // var div2 = document.querySelector('div[data-tab="2"]');
  // console.log(div2);

  //           button2.onclick = function(event) {
  //               div2.classList.add('active');
  //               console.log(div2);
  //           }

  // var div3 = document.querySelector('div[data-tab="3"]');
  // console.log(div3);

  //           button3.onclick = function(event) {
  //               div3.classList.add('active');
  //               console.log(div3);
  //           }

  /*
        4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок
   */

  var new_button = document.createElement('button');
    new_button.style.background = "rgb(77,0,0)";
    new_button.style.color = "darkgrey";
    new_button.style.border = "1px solid rgb(255, 255, 204)";
    new_button.innerHTML = 'Нажмите, чтобы спрятать все вкладки';

  var header = document.getElementById('buttonContainer');

  header.appendChild(new_button);

  new_button.onclick = function hideAllTabs () {
    for(var j = 0; j<div.length; j++){
      div[j].classList.remove('active');
    }
  }

// // еще 1 способ повесить кнопку онклик, если не использовать forEach
// var div = document.getElementsByClassName('tab');
// console.log(div);

// function changeClass(el, index) {
//   item.onclick = function() {
//     for(var j = 0; j<div.length; j++){
//       if(j === index){
//         div[j].classList.add('active');
//         console.log(index);
//       } else {
//         div[j].classList.remove('active');
//       }
//     }
//   }
// }

// for(var i = 0; i<button.length; i++) {
//   var item = button[i];

//   changeClass(item, i);
// };


/*
    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }
*/
