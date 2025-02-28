export interface Vehicle {
    start(): void;
    stop(): void;
    getStatus(): string;
    accelerate(): void;
    brake(): void;
    drive(distance: number): void;
    fuelConsumption(): void;
    operateVehicle(distance: number): void;
}
