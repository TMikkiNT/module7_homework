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