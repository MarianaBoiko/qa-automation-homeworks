import { Vehicle } from './interface-vehicle';

export abstract class Transport implements Vehicle {
    protected isRunning: boolean;
    protected speed: number;
    protected fuelType: string;
    protected fuelLevel = 100;

    public constructor(isRunning = false) {
        this.isRunning = isRunning;
        this.speed = 0;
        this.fuelType = 'Unknown';
        this.fuelLevel = 100;
    }

    public start(): void {
        this.isRunning = true;
        console.log(`${this.constructor.name} is now running.`);
    }

    public stop(): void {
        this.isRunning = false;
        this.speed = 0;
        console.log(`${this.constructor.name} has stopped.`);
    }

    public getStatus(): string {
        return `${this.constructor.name} is ${this.isRunning ? 'running' : 'not running'} at speed ${this.speed} km/h.`;
    }

    public accelerate(): void {
        if (this.isRunning) {
            this.speed += 10;
            console.log(`${this.constructor.name} accelerates to ${this.speed} km/h.`);
        } else {
            console.log('Start the vehicle first!');
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
        if (this.isRunning && this.fuelLevel > 0) {
            this.fuelLevel -= distance * 0.5;
            console.log(`${this.constructor.name} drove ${distance} km.`);
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
}
