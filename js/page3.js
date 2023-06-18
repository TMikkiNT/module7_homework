function createObjectWithoutPrototype() {
  return Object.create(null);    //Если в качестве прототипа передать `null`, то новый объект не будет иметь прототипа.
}

const obj = createObjectWithoutPrototype();
obj.someProperty = 'some value';
console.log(obj.someProperty); // 'some value'
console.log(obj.toString); // undefined