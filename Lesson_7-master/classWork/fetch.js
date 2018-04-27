/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/

function Fetch(){
  const url = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';

  fetch(url, { method: 'GET' })
    .then(function(response) {
      const json = response.json();

      return json;
    })
    .then(function(json) {
      const index = Math.floor(Math.random() * json.length);

      return json[index];
    })
    .then(function(user) {
      const url2 = 'http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2';

      fetch(url2, { method: 'GET' }).then(function(response) {
        const json = response.json();

        return json;
      }).then(function(json) {
        return {
          name: user.name,
          friends: json[0].friends,
        };
      }).then(function(result) {
        const div = document.createElement('div');
        div.innerText = JSON.stringify(result);
        document.body.appendChild(div);
      });
    });
}

Fetch();