
  /*
    ATTR
    element.hasAttribute(name) – проверяет наличие атрибута
    element.getAttribute(name) – получает значение атрибута
    element.setAttribute(name, value) – устанавливает атрибут
    element.removeAttribute(name) – удаляет атрибут
    element.attributes - получить все атрибуты
    element.dataset - > получить data-attr
  */

    var MyNode = document.getElementById('TestAttribute');
    console.log(MyNode);
    console.log(MyNode.hasAttribute('placeholder'));
    console.log(MyNode.getAttribute('name'));
    MyNode.setAttribute('name', 'Block2');
    MyNode.removeAttribute('name');
    // MyNode.dataset.padding = 300;
    console.log(MyNode.dataset.padding);
    console.log(MyNode.getAttribute('class'));
    
