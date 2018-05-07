/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/comment.js":
/*!********************************!*\
  !*** ./application/comment.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nclass Comment {\r\n    constructor (parentId, date, author, text) {\r\n      this.parentId = parentId; \r\n      this.date = date;     \r\n      this.author = author;\r\n      this.text = text;\r\n    }\r\n  };\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\n//# sourceURL=webpack:///./application/comment.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./application/comment.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n      console.log(\"DOM fully loaded and parsed\");\n  });\n\n  var ul = document.querySelector('ul');\n\n  var li = document.querySelector('li');\n\n  var newsArray = [];\n\n  var rendering = function(arrayOfNews) {\n      while (ul.firstChild) {\n      ul.removeChild(ul.firstChild);\n    }\n\n    arrayOfNews.forEach(function (news, index) {\n        if (!news) {\n        return;\n      }\n\n      var li = document.createElement('li');\n\n      var div2 = document.createElement('div');\n      div2.classList.add(\"news_author\");\n      var b = document.createElement('b');\n      b.innerText = news.author;\n      div2.appendChild(b);\n      li.appendChild(div2);\n\n      var div1 = document.createElement('div');\n      div1.classList.add(\"news_date\");\n      div1.innerText = news.date;\n      li.appendChild(div1);\n\n      var div3 = document.createElement('div');\n      div3.classList.add(\"news_text\");\n      div3.innerText = news.text;\n      li.appendChild(div3);\n\n      var div5 = document.createElement('div'); \n      var first_img = document.createElement('img');\n      first_img.src = news.img;\n      first_img.classList.add('img');\n      div5.classList.add('pic');\n      li.appendChild(div5);\n      div5.appendChild(first_img);\n\n      var div4 = document.createElement('div');\n      div3.classList.add(\"news_actions\");\n\n      var button4 = document.createElement('button');\n      button4.classList.add(\"like_button\");\n      button4.innerText = 'Likes';\n      div4.appendChild(button4);\n\n      var likes = document.createElement('div');\n      likes.classList.add('likes');\n      likes.innerText = news.likes;\n      div4.appendChild(likes);\n\n      var button3 = document.createElement('button');\n      button3.classList.add(\"show_comments\");\n      button3.innerText = 'Show Comments';\n      div4.appendChild(button3);\n\n      var comments = document.createElement('span');\n      comments.classList.add(\"comments_calc\");\n      comments.innerText = news.news.length;\n      div4.appendChild(comments);\n\n      var button1 = document.createElement('button');\n      button1.classList.add(\"_spamMessage\");\n      button1.innerText = 'Spam';\n      \n      button1.addEventListener('click', function() {\n        news.DeleteNews();\n      });\n      div4.appendChild(button1);\n\n      var span = document.createElement('span');\n      span.innerText = ' ';\n      div4.appendChild(span);\n\n      var button2 = document.createElement('button');\n      button2.classList.add(\"_writeComment\");\n      button2.innerText = 'Write Comment';\n      div4.appendChild(button2);\n       \n      button2.addEventListener('click', function() {\n        news.WriteComment(li);\n      });\n      button3.addEventListener('click', function() {\n        news.ShowComments(li);\n      });\n      button4.addEventListener('click', function(){  \n        likes.innerText = news.Likes();\n      })\n      li.appendChild(div4);\n\n      ul.appendChild(li);\n    })\n  }\n\n  class Message {\n    constructor (id, author, text, date, news, img) {\n      this.id = id;\n      this.author = author;\n      this.text = text;\n      this.date = date;\n      this.news = news;\n      this.likes = 0;\n      this.img = img;\n    }\n    DeleteNews() {\n      if(confirm('Want to delete this news?') == true){\n      delete newsArray[this.id];\n      rendering(newsArray);\n      }\n    }\n    WriteComment(cm) {\n      var context = this;\n\n      if(new_input) {\n        div.removeChild(new_input); \n      }\n\n      var div = document.createElement('div');\n\n      var dat = new Date();\n\n      var new_input = document.createElement('input');\n      new_input.style.width = '200px';\n      new_input.style.height = '50px';\n      new_input.style.border = '1px solid grey';\n      new_input.style.top = '200px';\n      new_input.style.left = '200px';\n      new_input.placeholder = 'Write author';\n      div.appendChild(new_input);\n\n      var new_input2 = document.createElement('input');\n      new_input2.style.width = '200px';\n      new_input2.style.height = '50px';\n      new_input2.style.border = '1px solid grey';\n      new_input2.style.top = '200px';\n      new_input2.style.left = '200px';\n       new_input2.placeholder = 'Write news';\n      div.appendChild(new_input2);\n\n      var button = document.createElement('button');\n      button.innerText = 'Send';\n      button.addEventListener('click', function() {\n        context.SendCom(new _comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (context.id, dat.toLocaleDateString(), new_input.value, new_input2.value));\n        cm.removeChild(div);\n      });\n      div.appendChild(button);\n\n      cm.appendChild(div);\n    }\n    SendCom(item) {\n      this.news.push(item);\n\n      rendering(newsArray);\n    }\n    ShowComments(element){\n      this.news.forEach(function(item, index){\n        var div = document.createElement('div');\n        div.innerText = item.author;\n        element.appendChild(div);\n\n        var div2 = document.createElement('div');\n        div2.innerText = item.date;\n        element.appendChild(div2);\n\n        var div3 = document.createElement('div');\n        div3.innerText = item.text;\n        element.appendChild(div3);\n      })\n    }\n    Likes(){\n      return ++this.likes;\n    }\n  };\n  var first_text = 'Всегда хочется получить исчерпывающие знания в области, с которой вы работаете. JavaScript — один из языков, о котором получить исчерпывающие знания почти невозможно. Он постоянно развивается, как развивается и веб вообще, поэтому любой веб-разработчик должен стремиться успеть за этим развитием, и уж тем более обязан назубок знать основы технологии, которую он применяет.'\n    var firstMsg = new Message(0, 'Anna Volotovska', first_text, '27.04.2018', [], 'img/js.gif');\n\n  var delMessage = document.querySelector('._spamMessage');\n  delMessage.addEventListener('click', function() {\n    firstMsg.DeleteNews();\n  });\n\n  var likeMessage = document.querySelector('.like_button');\n  likeMessage.addEventListener('click', function() {\n    var likes = document.querySelector('.likes');\n    likes.innerText = firstMsg.Likes();\n  });\n  \n  var answerMessage = document.querySelector('._writeComment');\n  answerMessage.addEventListener('click', function() {\n    firstMsg.WriteComment(li);\n  });\n\n  var showComments = document.querySelector('.show_comments');\n  showComments.addEventListener('click', function() {\n    firstMsg.ShowComments(li);\n  });\n\n  var btn1 = document.getElementById('btn1');\n  btn1.style.display = 'none';\n  var btn2 = document.getElementById('btn2');\n  btn2.style.display = 'none';\n\n  var btn3 = document.getElementById('btn3');\n\n  var text = document.getElementById('text');\n\n  var author = document.getElementById('author');\n\n  var imageInput = document.getElementById('img');\n  var preview = document.getElementById('preview');\n\n  imageInput.addEventListener('input', function(ev) {\n    // preview.src = ev.target.value;\n    preview.src = imageInput.value;\n    console.log(imageInput.value);\n  });\n\n  newsArray = [firstMsg];\n\n  btn3.addEventListener('click', function() {\n    var dat = new Date();\n\n    var src = imageInput.value;\n\n    var news = new Message(newsArray.length, author.value, text.value, dat.toLocaleDateString(), [], src);\n\n    newsArray.push(news);\n\n    rendering(newsArray);\n  });\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });