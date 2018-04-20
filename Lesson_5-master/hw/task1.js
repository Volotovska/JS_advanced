/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>

*/



var protolink = {
  avatarUrl : 'images/av.jpg',
  add: function( count ) {
    likes += Number(count);
    console.log(likes);
  }
};

function Comment(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  if (avatarUrl) {
    this.avatarUrl = avatarUrl;
  }
  this.likes = '0';
};


var instance = new Comment('wow');

Object.setPrototypeOf(instance, protolink);

console.log(instance);
console.log(instance.avatarUrl);
console.log(instance.add);

function CommentsShow(array){
  this.show = function() {
    console.log(this.array)
  }
};

var CommentsArray = [
  new Comment('myComment1'),
  new Comment('myComment2'),
  new Comment('myComment3'),
  new Comment('myComment4')
];

// console.log(CommentsArray);