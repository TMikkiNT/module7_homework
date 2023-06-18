const person = {
  name: 'John',
  age: 30
};

const NewPerson = Object.create(person);
NewPerson.newName = "Mikki";
NewPerson.newAge = 26;

function logOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // Проверяем, является ли свойство собственным
      console.log(key + ': ' + obj[key]);
    }
  }
}
//Вызов функции
logOwnProperties(NewPerson); //если вместо person написать NewPerson то покажет в консоли данные с NewPerson