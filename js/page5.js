class ElectricalAppliance {             //Создаем стандартный класс для всех приборов
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;
  }
  
  plugIn() {               //Функция включения
    if (!this.plugged) {
      this.plugged = true;
      console.log(`Прибор ${this.name} включен в розетку`);
    } else {
      console.log(`Прибор ${this.name} уже включен в розетку`);
    }
  }
  
  plugOut() {             //Функция выключения
    if (this.plugged) {
      this.plugged = false;
      console.log(`Прибор ${this.name} выключен из розетки`);
    } else {
      console.log(`Прибор ${this.name} уже выключен из розетки`);
    }
  }
}
  
class Lamp extends ElectricalAppliance {      //Создаем класс Лампы и берем все доступные функции и данные с класса ElectricalAppliance
  constructor(name, power, brightness) {
    super(name, power);
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
    if (ElectricalAppliance.plugged) {              //Если прибор включен
      totalPowerUsage += ElectricalAppliance.power;  //Суммируем объекты power из каждого выбранного ElectricalAppliance
    }
  }
console.log(`Суммарная потребляемая мощность всех включенных приборов: ${totalPowerUsage} Вт`);
}

  
const lamp = new Lamp("Настольная лампа", 40);
lamp.plugIn();              //включем прибор
lamp.setBrightness(50);     //Устанавливаем яркость
//lamp.plugOut();           //Потребляемая мощность лампы - 40 Вт (если уберу //, то будет суммироваться с ПК потребляемая мощность)
  
const computer = new Computer("ПК", 70);
//computer.plugIn(); 
computer.info(8);         //включем прибор
computer.plugOut();       //Потребляемая мощность лампы - 70 Вт (если уберу //, то будет суммироваться с ПК потребляемая мощность)
  
countTotalPowerUsage(lamp, computer); 