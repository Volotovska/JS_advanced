/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

*/

var myForm = document.getElementById('myForm');

var input4 = document.getElementById('input4');


var button = document.createElement('button');
button.style.width = '100px';
button.style.height = '100px';
button.style.margin = '20px';

var body = document.querySelector('body');
body.appendChild(button);

button.addEventListener('click', function(event){
	event.preventDefault();

	var myArrayCollection = Array.from(document.forms.myFormName.elements);
    console.log('Array', myArrayCollection);

    myArrayCollection.forEach( function(item){
    	console.log(JSON.stringify(item.value));
    });

	var myJSON = JSON.parse(input4.value);
	console.log(myJSON);
});