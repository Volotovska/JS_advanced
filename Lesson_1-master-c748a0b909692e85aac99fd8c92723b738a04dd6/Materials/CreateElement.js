/*
  CREATE ELEMENT
  document.createElement(tag) – создает элемент
  document.createTextNode(value) – создает текстовый узел

  PASTE ELEMENT
  parent.appendChild(element)
  parent.insertBefore(element, nextSibling)

  REMOVE ELEMENT
  parentElement.removeChild(element);
  element.remove();

*/

    var div = document.createElement('div');
    var textElem = document.createTextNode('Тут был я');

    div.className = "message";
    div.innerText = "status";
    div.style.backgroundColor = 'red';

    console.log(div);
    // console.log( list.children );

var createArea = document.getElementById('createArea');
    createArea.appendChild(div);
    createArea.insertBefore(textElem, createArea.children[0]);
//
var deletedElement = document.getElementById('test');
var list = document.getElementById('list');
    console.log('deletedElement', deletedElement);
    list.removeChild(deletedElement);
