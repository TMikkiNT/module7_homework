class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }

  plugOn() {
    console.log(`${this.name} подключен к розетке.`);
    this.isPlugged = true;
  }

  plugOff() {
    console.log(`${this.name} отключен от розетки.`);
    this.isPlugged = false;
  }
}

class Lamp extends ElectricalAppliance {
  constructor(name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
  }

  turnOn() {
    if (this.isPlugged) {
      console.log(`${this.name} включена.`);
    } else {
      console.log("Подключите лампу к розетке.");
    }
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type, ram) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.ram = ram;
  }

  boot() {
    if (this.isPlugged) {
      console.log(`${this.name} загружается.`);
    } else {
      console.log("Подключите компьютер к розетке.");
    }
  }
}

// Создание экземпляров
const tableLamp = new Lamp("Настольная лампа", "IKEA", 60, "LED");
const homePC = new Computer("Домашний ПК", "Asus", 250, "desktop", 16);

// Включение приборов
tableLamp.plugOn();
homePC.plugOn();

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