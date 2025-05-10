export interface Engine {
    start(): void;
    stop(): void;
    isRunning(): boolean;
}
