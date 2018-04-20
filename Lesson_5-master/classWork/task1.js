/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
var Train = {
	name: 'Fast',
	speed: '80km per hour',
	passengers: '100',
	ride: function(){
		console.log(`Поезд ${this.name} везет ${this.passengers} со скоростью ${this.speed}`);
	},
	stand: function() {
		console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
	},
	pick: function( count ) {
		this.passengers += Number(count);
		console.log(this.passengers);
	}
};
