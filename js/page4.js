//Фукнции включения/отключения электроприборов

/*function ElectricalAppliance(name, power) {    //функция названия прибора, его мощность и его "режим" (вкл/выкл)
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
  computer.switchOff();*/

  // Родительская функция-конструктор
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}

// Методы родительского объекта
ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " подключен к розетке.");
  this.isPlugged = true;
};

ElectricalAppliance.prototype.plugOff = function() {
  console.log(this.name + " отключен от розетки.");
  this.isPlugged = false;
};

// Пример 1: Настольная лампа
function Lamp(name, brand, power, bulbType) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.bulbType = bulbType;
  this.isPlugged = false;
}

Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.constructor = Lamp;

// Метод, специфичный для Lamp
Lamp.prototype.turnOn = function() {
  if (this.isPlugged) {
    console.log(this.name + " включена.");
  } else {
    console.log("Подключите лампу к розетке.");
  }
};

// Пример 2: Компьютер
function Computer(name, brand, power, type, ram) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.type = type;
  this.ram = ram;
  this.isPlugged = false;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Метод, специфичный для Computer
Computer.prototype.boot = function() {
  if (this.isPlugged) {
    console.log(this.name + " загружается.");
  } else {
    console.log("Подключите компьютер к розетке.");
  }
};

// Создание экземпляров
const tableLamp = new Lamp("Настольная лампа", "IKEA", 60, "LED");
const homePC = new Computer("Домашний ПК", "Asus", 250, "desktop", 16);

// Включение приборов
tableLamp.plugIn();
homePC.plugIn();

// Вывод информации о приборах
console.log(tableLamp);
console.log(homePC);

// Подсчет суммарной мощности
function calculatePowerConsumption(appliances) {
  let totalPower = 0;
  for (const appliance of appliances) {
    if (appliance.isPlugged) {
      totalPower += appliance.power;
    }
  }
  return totalPower;
}

const appliances = [tableLamp, homePC];
let totalPowerConsumption = calculatePowerConsumption(appliances);
console.log("Суммарная потребляемая мощность:", totalPowerConsumption, "Вт");

tableLamp.plugOff();
homePC.plugOff();

totalPowerConsumption = calculatePowerConsumption(appliances);
console.log("Суммарная потребляемая мощность:", totalPowerConsumption, "Вт");