import { Car } from './class-cars';
import { GasEngine, ElectricEngine } from './class-engines';

export class GasCar extends Car {
    public constructor() {
        super(new GasEngine());
    }
}

export class ElectricCar extends Car {
    public constructor() {
        super(new ElectricEngine());
    }
}

export class HybridCar extends Car {
    public constructor() {
        super(new GasEngine());
    }
}
