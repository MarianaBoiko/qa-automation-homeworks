import { Transport } from './abstract-class-transport';

export class GasCar extends Transport {
    protected fuelType = 'Gasoline';
}

export class ElectricCar extends Transport {
    protected fuelType = 'Electric';
}

export class SportsCar extends Transport {
    protected fuelType = 'High Octane Gasoline';

    public accelerate(): void {
        if (this.isRunning) {
            this.speed += 20;
            console.log(`${this.constructor.name} accelerates rapidly to ${this.speed} km/h!`);
        } else {
            console.log('Start the sports car first!');
        }
    }
}
