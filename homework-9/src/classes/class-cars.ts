import { Engine } from '../interfaces/interface-engine';
import { Vehicle } from '../interfaces/interface-vehicle';
import { FuelSystem } from '../interfaces/interface-fuelsystem';
import { Operable } from '../interfaces/interface-operable';
import { Maintenance } from '../interfaces/interface-maintenance';

export class Car implements Vehicle, FuelSystem, Operable, Maintenance {
    protected engine: Engine;
    public fuelLevel = 100;
    private speed = 0;
    private lastServiceMileage = 0;
    private mileage = 0;

    public constructor(engine: Engine) {
        this.engine = engine;
    }

    public start(): void {
        if (this.fuelLevel > 0) {
            this.engine.start();
            console.log(`${this.constructor.name} is now running.`);
        } else {
            console.log('Not enough fuel to start the vehicle!');
        }
    }

    public stop(): void {
        this.engine.stop();
        this.speed = 0;
        console.log(`${this.constructor.name} has stopped.`);
    }

    public getStatus(): string {
        return `${this.constructor.name} is ${this.engine.isRunning() ? 'running' : 'not running'} at speed ${this.speed} km/h with fuel level at ${this.fuelLevel}% and mileage ${this.mileage} km.`;
    }

    public accelerate(): void {
        if (this.engine.isRunning() && this.fuelLevel > 0) {
            this.speed += 10;
            this.fuelConsumption();
            console.log(`${this.constructor.name} accelerates to ${this.speed} km/h.`);
        } else {
            console.log('Start the vehicle or refuel first!');
        }
    }

    public brake(): void {
        if (this.speed > 0) {
            this.speed -= 10;
            console.log(`${this.constructor.name} slows down to ${this.speed} km/h.`);
        } else {
            console.log('The vehicle is already stopped.');
        }
    }

    public drive(distance: number): void {
        if (this.engine.isRunning() && this.fuelLevel > 0) {
            this.fuelLevel -= distance * 0.5;
            this.mileage += distance;
            console.log(`${this.constructor.name} drove ${distance} km.`);
            this.checkEngine();
        } else {
            console.log('Cannot drive! Start the vehicle and ensure there is enough fuel.');
        }
    }

    public fuelConsumption(): void {
        this.fuelLevel -= 2;
        if (this.fuelLevel <= 0) {
            this.fuelLevel = 0;
            this.stop();
            console.log('The vehicle has run out of fuel!');
        }
    }

    public refuel(amount: number): void {
        this.fuelLevel += amount;
        if (this.fuelLevel > 100) this.fuelLevel = 100;
        console.log(`${this.constructor.name} refueled to ${this.fuelLevel}%.`);
    }

    public operateVehicle(distance: number): void {
        this.start();
        console.log(this.getStatus());
        this.accelerate();
        console.log(this.getStatus());
        this.drive(distance);
        console.log(this.getStatus());
        this.brake();
        console.log(this.getStatus());
        this.stop();
        console.log(this.getStatus());
    }

    public checkEngine(): void {
        if (this.mileage - this.lastServiceMileage >= 5000) {
            console.log('Warning: It is time for vehicle maintenance.');
        }
    }

    public performService(): void {
        this.lastServiceMileage = this.mileage;
        console.log('Vehicle maintenance performed. The car is in good condition.');
    }
}
