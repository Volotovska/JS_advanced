/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент, второй попадает в него через метод .call(obj)
    1.2 Ф-я не принимает никаких аргументов, а необходимые настройки полностью передаются через bind
    1.3 Ф-я принимает фразу для заголовка, обьект с настройками передаем через .apply();

*/

  // function chngColor(color) {
  // 	document.body.style.color = color;
  // 	document.body.style.background = this.background;
  // 	var h1 = document.createElement('h1');
  // 	document.body.appendChild(h1);
  // 	h1.innerText = "I know how binding works in JS";

  // };

  // chngColor.call({background: 'red'}, 'white');


  //   function chngColor2() {
  // 		document.body.style.color = this.color;
  // 		document.body.style.background = this.background;
  // 		var h1 = document.createElement('h1');
  // 		document.body.appendChild(h1);
  // 		h1.innerText = "I know how binding works in JS";
  // 	};

  // var arg = {color: 'blue', background: 'yellow'};

  // var res = chngColor2.bind(arg);

  // res();

  // function chngColor3(text) {
  // 	document.body.style.color = this.color;
  // 	document.body.style.background = this.background;
  // 	var h1 = document.createElement('h1');
  // 	document.body.appendChild(h1);
  // 	h1.innerText = this;
  // };

  // var arg = {
  // 	color: 'green',
  // 	background: 'orange',
  // };

  // var x = ["I know how binding works in JS"];

  // chngColor3.apply(arg, x);