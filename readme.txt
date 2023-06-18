//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все 
ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

//-------------------------------------------------------------------------------------------

//Создаем объект person с различными переменными

const person = {
  name: 'John',		//name - ключ, 'John' - переменная (для person)
  age: 30
};

//Создаем NewPerson с различными переменными на основе person

const NewPerson = Object.create(person);
NewPerson.newName = "Mikki";		//newName - ключ, "Mikki" - переменная (для NewPerson)
NewPerson.newAge = 26;

//функция для вызова объекта (Пример person или NewPerson )

function logOwnProperties(obj) {
  for (let key in obj) {		   // вызывает все ключи с выбранного объекта
    if (obj.hasOwnProperty(key)) { 	   // Проверяем, является ли свойство собственным
      console.log(key + ': ' + obj[key]);  // key (name и age) и obj[key] ("Mikki", 26)
    }
  }
}
//Вызов функции

logOwnProperties(person); //вывод(name: "Mikki" age: 26)

//Если вместо person написать NewPerson то покажет в консоли данные с NewPerson

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или 
false.

//Создаем объект person с различными переменными

const person = {
  name: 'John',		//name - ключ, 'John' - переменная (для person)
  age: 30
};

//Создаем NewPerson с различными переменными на основе person

const NewPerson = Object.create(person);
NewPerson.newName = "Mikki";		//newName - ключ, "Mikki" - переменная (для NewPerson)
NewPerson.newAge = 26;

//функция для вызова объекта (Пример person или NewPerson )

function hasProperty(str, obj) {
  return obj.hasOwnProperty(str);     //Проверяет есть ли у переданного объекта свойство с данным именем
}

// Вызов функции

console.log('name: ' + hasProperty('name', person)); // true
console.log('newName: ' + hasProperty('newName', NewPerson)); // true
console.log('surname: ' + hasProperty('surname', person)); // false

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.

//-------------------------------------------------------------------------------------------

//Функция создания объекта с нулевым значением

function createObjectWithoutPrototype() {
  return Object.create(null);    //Если в качестве прототипа передать `null`, то новый объект 
}				 //не будет иметь прототипа.

const obj = createObjectWithoutPrototype();	//объект с функцией нулевого значения
obj.someProperty = 'some value';
console.log(obj.someProperty); // 'some value'
console.log(obj.toString); // undefined

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную 
потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав 
прибор, подумайте, какими свойствами он обладает.

   План:

1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от 
родительских методов.
4. Создайте экземпляры каждого прибора.
5. Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

   Общие требования:

1) Имена функций, свойств и методов должны быть информативными
2) Соблюдайте best practices:
     * использование camelCase нотации для переменных и методов, PascalCase для названия 
       функций-конструкторов и классов;
     * информативные имена (а не a, b);
     * четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр 
       — конкретную реализацию);
     * использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

//-------------------------------------------------------------------------------------------

//Фукнции включения/отключения электроприборов

function ElectricalAppliance(name, power) {    //функция названия прибора, его мощность и его "режим" (вкл/выкл)
  this.name = name;
  this.power = power;
  this.plugged = false;
  }
  
  ElectricalAppliance.prototype.switchOn = function() {        //функция включения
  this.plugged = true;
  console.log(this.name + ' подключена');
  }
  
  ElectricalAppliance.prototype.switchOff = function() {       //функция отключения
  this.plugged = false;
  console.log(this.name + ' отключена');
  }
  
 // Определение конструктора настольной лампы с дополнительным свойством (яркость):
  
  function DeskLamp(name, power, brightness) {      //добавляем вместо "режима" объект "Яркость"
  ElectricalAppliance.call(this, name, power);
  this.brightness = brightness;
  }
  
  DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);    //переносим все выполненные действия на новый экземпляр с использованием самой функции-конструктора
  DeskLamp.prototype.constructor = DeskLamp;      
  
  DeskLamp.prototype.setBrightness = function() {      //определяем уровень яркости, задавая параметр level
  console.log(this.name + ' уровень яркости: ' + this.brightness);
  }
  
  //Определение конструктора компьютера с дополнительным свойством (количество ядер процессора):
  
  function Computer(name, power) {        //добавляем, вместо "режима" ставим объект "CPU"
  ElectricalAppliance.call(this, name, power);
  }
  
  Computer.prototype = Object.create(ElectricalAppliance.prototype);    //переносим все выполненные действия на новый экземпляр с использованием самой функции-конструктора
  Computer.prototype.constructor = Computer;
  
  Computer.prototype.info = function(cpuCores) {                    // выводим данные о ПК
     console.log(`${this.name} информация: ${this.power} W, ${cpuCores}-ядерный процессор`)
  }
  
  //Создание экземпляров приборов:
  
  let lamp = new DeskLamp('Лампа', 25, 50);
  let computer = new Computer('ПК', 500);
  
 // Включение приборов в розетку и расчет потребляемой мощности:
  
  lamp.switchOn();
  lamp.setBrightness();
  computer.switchOn();
  computer.info(8);
  
  var totalPower = lamp.power + computer.power;
  console.log('Общая потребляемая мощность: ' + totalPower + 'W');
  
  //Выключение приборов из розетки:
  
  lamp.switchOff();
  computer.switchOff();

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

   Общие требования:

1) Имена классов, свойств и методов должны быть информативными;
2) Соблюдать best practices;
3) Использовать синтаксис ES6.

//-------------------------------------------------------------------------------------------

class ElectricalAppliance {             //Создаем стандартный класс для всех приборов
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;
  }
  
  plugIn() {               //Функция включения
    if (!this.plugged) {   //Если this.plugged не является значением true
      this.plugged = true;
      console.log(`Прибор ${this.name} включен в розетку`);
    } else {
      console.log(`Прибор ${this.name} уже включен в розетку`);
    }
  }
  
  plugOut() {             //Функция выключения
    if (this.plugged) {   //Если this.plugged является значением true
      this.plugged = false;
      console.log(`Прибор ${this.name} выключен из розетки`);
    } else {
      console.log(`Прибор ${this.name} уже выключен из розетки`);
    }
  }
}
  
class Lamp extends ElectricalAppliance {      //Создаем класс Лампы и берем все доступные функции и данные с класса ElectricalAppliance
  constructor(name, power, brightness) {
    super(name, power);			      //Вызывает все данные с объектов, которые имелись в конструкторе
    this.brightness = brightness;             //доб. объект "яркость" 
  }
  
  setBrightness(brightness) {                 //Доб. параметр яркость лампы
    this.brightness = brightness;
    console.log(`Яркость лампы ${this.name} установлена на ${this.brightness}%`);
  }
}
  
class Computer extends ElectricalAppliance {  //Создаем класс дочерний ПК из ElectricalAppliance
  constructor(name, power) {
    super(name, power);                       //Вызывает все данные с объектов, которые имелись в конструкторе
  }

  info(cpuCores){
    console.log(`${this.name} информация: ${this.power} W, ${cpuCores}-ядерный процессор`)
  }
  }
  
function countTotalPowerUsage(...appliances) {        //Создаем функцию подсчёта суммы потребляемой мощности (недавно узнал, что неплохим способом можно попробывать ...appliances - он отдельно создает массив, где собираются все переменные, выбранные из различных классов. Для этого нам поможет for)
  let totalPowerUsage = 0;
  for (let ElectricalAppliance of appliances) {       //Собираем из ElectricalAppliance нужные нам элементы и закидываем в массив appliances
    if (ElectricalAppliance.plugged) {                //Если прибор включен
      totalPowerUsage += ElectricalAppliance.power;   //Суммируем объекты power из каждого выбранного ElectricalAppliance
    }
  }
console.log(`Суммарная потребляемая мощность всех включенных приборов: ${totalPowerUsage} Вт`);
}
  
const lamp = new Lamp("Настольная лампа", 40);
lamp.plugIn();              //включем прибор
lamp.setBrightness(50);     //Устанавливаем яркость
lamp.plugOut();             //Потребляемая мощность лампы - 40 Вт (если уберу //, то будет суммироваться с ПК потребляемая мощность)
  
const computer = new Computer("ПК", 70);
computer.plugIn(); 
computer.info(8);         //включем прибор
//computer.plugOut();       //Потребляемая мощность лампы - 70 Вт (если уберу //, то будет суммироваться с ПК потребляемая мощность)
  
countTotalPowerUsage(lamp, computer); 

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------