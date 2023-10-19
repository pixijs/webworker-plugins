import AdderWorker from './workers/Adder.worker.ts';

describe('Test', () =>
{
    it('should work', async () =>
        new Promise<void>((resolve) =>
        {
            const worker = new AdderWorker();

            worker.onmessage = (event) =>
            {
                expect(event.data).toBe(2);
                resolve();
            };

            worker.postMessage({ a: 1, b: 1 });
        })
    );
});
