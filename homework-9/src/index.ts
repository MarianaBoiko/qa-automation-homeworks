import { GasCar, ElectricCar, SportsCar } from './class-cars';

const gasCar = new GasCar();
const electricCar = new ElectricCar();
const sportsCar = new SportsCar();

gasCar.operateVehicle(50);
electricCar.operateVehicle(30);
sportsCar.operateVehicle(40);
