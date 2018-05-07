import Comment from './comment.js'

document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });

  var ul = document.querySelector('ul');

  var li = document.querySelector('li');

  var newsArray = [];

  var rendering = function(arrayOfNews) {
      while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    arrayOfNews.forEach(function (news, index) {
        if (!news) {
        return;
      }

      var li = document.createElement('li');

      var div2 = document.createElement('div');
      div2.classList.add("news_author");
      var b = document.createElement('b');
      b.innerText = news.author;
      div2.appendChild(b);
      li.appendChild(div2);

      var div1 = document.createElement('div');
      div1.classList.add("news_date");
      div1.innerText = news.date;
      li.appendChild(div1);

      var div3 = document.createElement('div');
      div3.classList.add("news_text");
      div3.innerText = news.text;
      li.appendChild(div3);

      var div5 = document.createElement('div'); 
      var first_img = document.createElement('img');
      first_img.src = news.img;
      first_img.classList.add('img');
      div5.classList.add('pic');
      li.appendChild(div5);
      div5.appendChild(first_img);

      var div4 = document.createElement('div');
      div3.classList.add("news_actions");

      var button4 = document.createElement('button');
      button4.classList.add("like_button");
      button4.innerText = 'Likes';
      div4.appendChild(button4);

      var likes = document.createElement('div');
      likes.classList.add('likes');
      likes.innerText = news.likes;
      div4.appendChild(likes);

      var button3 = document.createElement('button');
      button3.classList.add("show_comments");
      button3.innerText = 'Show Comments';
      div4.appendChild(button3);

      var comments = document.createElement('span');
      comments.classList.add("comments_calc");
      comments.innerText = news.news.length;
      div4.appendChild(comments);

      var button1 = document.createElement('button');
      button1.classList.add("_spamMessage");
      button1.innerText = 'Spam';
      
      button1.addEventListener('click', function() {
        news.DeleteNews();
      });
      div4.appendChild(button1);

      var span = document.createElement('span');
      span.innerText = ' ';
      div4.appendChild(span);

      var button2 = document.createElement('button');
      button2.classList.add("_writeComment");
      button2.innerText = 'Write Comment';
      div4.appendChild(button2);
       
      button2.addEventListener('click', function() {
        news.WriteComment(li);
      });
      button3.addEventListener('click', function() {
        news.ShowComments(li);
      });
      button4.addEventListener('click', function(){  
        likes.innerText = news.Likes();
      })
      li.appendChild(div4);

      ul.appendChild(li);
    })
  }

  class Message {
    constructor (id, author, text, date, news, img) {
      this.id = id;
      this.author = author;
      this.text = text;
      this.date = date;
      this.news = news;
      this.likes = 0;
      this.img = img;
    }
    DeleteNews() {
      if(confirm('Want to delete this news?') == true){
      delete newsArray[this.id];
      rendering(newsArray);
      }
    }
    WriteComment(cm) {
      var context = this;

      if(new_input) {
        div.removeChild(new_input); 
      }

      var div = document.createElement('div');

      var dat = new Date();

      var new_input = document.createElement('input');
      new_input.style.width = '200px';
      new_input.style.height = '50px';
      new_input.style.border = '1px solid grey';
      new_input.style.top = '200px';
      new_input.style.left = '200px';
      new_input.placeholder = 'Write author';
      div.appendChild(new_input);

      var new_input2 = document.createElement('input');
      new_input2.style.width = '200px';
      new_input2.style.height = '50px';
      new_input2.style.border = '1px solid grey';
      new_input2.style.top = '200px';
      new_input2.style.left = '200px';
       new_input2.placeholder = 'Write news';
      div.appendChild(new_input2);

      var button = document.createElement('button');
      button.innerText = 'Send';
      button.addEventListener('click', function() {
        context.SendCom(new Comment (context.id, dat.toLocaleDateString(), new_input.value, new_input2.value));
        cm.removeChild(div);
      });
      div.appendChild(button);

      cm.appendChild(div);
    }
    SendCom(item) {
      this.news.push(item);

      rendering(newsArray);
    }
    ShowComments(element){
      this.news.forEach(function(item, index){
        var div = document.createElement('div');
        div.innerText = item.author;
        element.appendChild(div);

        var div2 = document.createElement('div');
        div2.innerText = item.date;
        element.appendChild(div2);

        var div3 = document.createElement('div');
        div3.innerText = item.text;
        element.appendChild(div3);
      })
    }
    Likes(){
      return ++this.likes;
    }
  };
  var first_text = 'Всегда хочется получить исчерпывающие знания в области, с которой вы работаете. JavaScript — один из языков, о котором получить исчерпывающие знания почти невозможно. Он постоянно развивается, как развивается и веб вообще, поэтому любой веб-разработчик должен стремиться успеть за этим развитием, и уж тем более обязан назубок знать основы технологии, которую он применяет.'
    var firstMsg = new Message(0, 'Anna Volotovska', first_text, '27.04.2018', [], 'img/js.gif');

  var delMessage = document.querySelector('._spamMessage');
  delMessage.addEventListener('click', function() {
    firstMsg.DeleteNews();
  });

  var likeMessage = document.querySelector('.like_button');
  likeMessage.addEventListener('click', function() {
    var likes = document.querySelector('.likes');
    likes.innerText = firstMsg.Likes();
  });
  
  var answerMessage = document.querySelector('._writeComment');
  answerMessage.addEventListener('click', function() {
    firstMsg.WriteComment(li);
  });

  var showComments = document.querySelector('.show_comments');
  showComments.addEventListener('click', function() {
    firstMsg.ShowComments(li);
  });

  var btn1 = document.getElementById('btn1');
  btn1.style.display = 'none';
  var btn2 = document.getElementById('btn2');
  btn2.style.display = 'none';

  var btn3 = document.getElementById('btn3');

  var text = document.getElementById('text');

  var author = document.getElementById('author');

  var imageInput = document.getElementById('img');
  var preview = document.getElementById('preview');

  imageInput.addEventListener('input', function(ev) {
    // preview.src = ev.target.value;
    preview.src = imageInput.value;
    console.log(imageInput.value);
  });

  newsArray = [firstMsg];

  btn3.addEventListener('click', function() {
    var dat = new Date();

    var src = imageInput.value;

    var news = new Message(newsArray.length, author.value, text.value, dat.toLocaleDateString(), [], src);

    newsArray.push(news);

    rendering(newsArray);
  });
