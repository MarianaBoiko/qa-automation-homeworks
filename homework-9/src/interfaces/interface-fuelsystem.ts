export interface FuelSystem {
    fuelLevel: number;
    refuel(amount: number): void;
    fuelConsumption(): void;
}
