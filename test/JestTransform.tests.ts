import AdderWorker from 'worker:./workers/Adder.worker.ts';

describe('JestTransform', () =>
{
    it('should work', async () =>
        new Promise<void>((resolve) =>
        {
            const worker = new AdderWorker();

            worker.worker.onmessage = (event) =>
            {
                expect(event.data).toBe(2);
                resolve();
            };

            worker.worker.postMessage({ a: 1, b: 1 });
        })
    );
});
