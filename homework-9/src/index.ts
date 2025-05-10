import { GasCar, ElectricCar, HybridCar } from './classes/class-car-types';
import { Car } from './classes/class-cars';

const gasCar: Car = new GasCar();
const electricCar: Car = new ElectricCar();
const hybridCar: Car = new HybridCar();

function testVehicleOperations(distance: number, car: Car): void {
    console.log(`\nOperating ${car.constructor.name}...\n`);
    car.operateVehicle(distance);
}

testVehicleOperations(50, gasCar);
testVehicleOperations(30, electricCar);
testVehicleOperations(40, hybridCar);
