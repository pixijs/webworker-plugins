declare module '*.worker.ts'
{
    class WorkerInstance
    {
        public worker: Worker;

        constructor();

        static revokeObjectURL(): void;
    }

    export default WorkerInstance;
}
