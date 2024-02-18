import AdderWorker from 'worker:./workers/Adder.worker.ts';

describe('NoWorker', () =>
{
    let savedWorker: typeof Worker;

    beforeAll(() =>
    {
        savedWorker = globalThis.Worker;
        // @ts-expect-error: remove Worker
        delete globalThis.Worker;
    });
    afterAll(() =>
    {
        globalThis.Worker = savedWorker;
    });

    it('should throw if no Worker', () =>
    {
        expect(() => new AdderWorker()).toThrow(ReferenceError);
    }
    );
});
