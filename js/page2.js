const person = {
  name: 'John',
  age: 30
};

const NewPerson = Object.create(person);
NewPerson.newName = "Mikki";
NewPerson.newAge = 26;

function hasProperty(str, obj) {
  return obj.hasOwnProperty(str);     //Проверяет есть ли у переданного объекта свойство с данным именем
}

// Вызовываем функции

console.log('name: ' + hasProperty('name', person)); // true
console.log('newName: ' + hasProperty('newName', NewPerson)); // true
console.log('surname: ' + hasProperty('surname', person)); // false