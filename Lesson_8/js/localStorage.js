/*

  localStorage
  window.localStorage

*/

// Запись в ЛС
// localStorage.setItem('myCat', 'Tom');
// localStorage.setItem('back', 'blue');
// // // Чтение с ЛС
// var cat = localStorage.getItem("myCat");
// console.log('from lc', cat);
// // // Удаление с ЛС
// localStorage.removeItem("myCat");

// Если не найдено, вернет Null
// var background = localStorage.getItem("back");
// console.log('back', background);

// if( background !== null){
//   document.body.style.backgroundColor = background;
// }

/*

  Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

  Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678
*/


function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var r = getRandomIntInclusive(0,255);
    var g = getRandomIntInclusive(0,255);
    var b = getRandomIntInclusive(0,255);

    console.log(r, g, b); 

      localStorage.setItem('back', "rgb(" + r + "," + g + "," + b + ")");

      var background = localStorage.getItem("back");
      
      if( background !== null){
      document.body.style.backgroundColor = background;
      }
      
      var login = document.getElementById('input_1');
      console.log(login);
      var password = document.getElementById('input_2');
      console.log(password);
      var button = document.getElementById('input_3');
      console.log(button);
      var Myform = document.getElementById('Myform');

       var pass = localStorage.getItem("pass");
          console.log(pass);
      var log = localStorage.getItem("log");
          console.log(log);

      var login;
      var password;
      var div;
      var div2;

      button.addEventListener('click', function() {
        if(login.value !== "" && password.value !== ""){
          
          localStorage.setItem('log', login.value);
          localStorage.setItem('pass', password.value);

          var pass = localStorage.getItem("pass");
          console.log(pass);
          var log = localStorage.getItem("log");
          console.log(log);

          checkLogin() ;
          }

        });

      function checkLogin() {
        var log = localStorage.getItem("log");
        console.log(log);
        if (log)
        {
          if(login && password)
          {
            div.removeChild(login);
            div.removeChild(password);
          }
          div2 = document.createElement('div');
            div2.style.position = 'absolute';
            div2.style.width = '100px';
            div2.style.height = '100px';
            div2.innerText = 'Privet ' + log;
            Myform.appendChild(div2);      
        }
        else {
            if (div2) {
              Myform.removeChild(div2);
            }

            div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.width = '100px';
            div.style.height = '100px';
            
            login = document.createElement('input');
            login.placeholder = 'login';
            password = document.createElement('input');
            password.placeholder = 'password';

            Myform.appendChild(div);
            div.appendChild(login);
            div.appendChild(password);
          }
      };

      document.addEventListener("DOMContentLoaded", function(event) {
        checkLogin();
      });


     var button_remove = document.getElementById('input_4');

     button_remove.addEventListener('click', function(){
        localStorage.removeItem('log');
        localStorage.removeItem('pass');   
        console.log(log);
        console.log(pass);

        checkLogin() ;
     });

     // проверка логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    // он введет только admin@example.com и пароль 12345678

      // button.addEventListener('click', function() {
      //   if(login.value == "admin@example.com" && password.value == "12345678"){
          
      //     localStorage.setItem('log', login.value);
      //     localStorage.setItem('pass', password.value);

      //     var pass = localStorage.getItem("pass");
      //     console.log(pass);
      //     var log = localStorage.getItem("log");
      //     console.log(log);

      //     checkLogin() ;
      //     }

      //   });