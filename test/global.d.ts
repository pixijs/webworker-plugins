declare module '*.worker.ts'
{
    class WorkerInstance extends Worker
    {
        constructor();

        static revokeObjectURL(): void;
    }

    export default WorkerInstance;
}
