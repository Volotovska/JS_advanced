/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }

*/

function Dog (name, kind){
    this.name = name;
    this.kind = kind;
    this.run = function() {
        console.log('собака бежит');
    };
    this.eat = function() {
        console.log('собака ест');
    };
    this.show = function(){
        for (key in this) {
        console.log(key, this[key]);
        }
    };
};

var myDog = new Dog('Имя', "Порода");
    myDog.run();

var myDog2 = new Dog('Имя2', "Порода2");
    myDog2.show();