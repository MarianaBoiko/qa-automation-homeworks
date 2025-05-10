import { Engine } from '../interfaces/interface-engine';

export class GasEngine implements Engine {
    private running = false;

    public start(): void {
        this.running = true;
    }

    public stop(): void {
        this.running = false;
    }

    public isRunning(): boolean {
        return this.running;
    }
}

export class ElectricEngine implements Engine {
    private running = false;

    public start(): void {
        this.running = true;
    }

    public stop(): void {
        this.running = false;
    }

    public isRunning(): boolean {
        return this.running;
    }
}
