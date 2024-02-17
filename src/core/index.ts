export type ModuleType = 'cjs' | 'esm';

export function buildWorkerCode(source: string, moduleType: ModuleType)
{
    let result = `\
const WORKER_CODE = ${JSON.stringify(source)};
let WORKER_URL = null;
class WorkerInstance
{
    constructor()
    {
        if (!WORKER_URL)
        {
            WORKER_URL = URL.createObjectURL(new Blob([WORKER_CODE], { type: 'application/javascript' }));
        }
        this.worker = new Worker(WORKER_URL);
    }
}
WorkerInstance.revokeObjectURL = function revokeObjectURL()
{
    if (WORKER_URL)
    {
        URL.revokeObjectURL(WORKER_URL);
        WORKER_URL = null;
    }
}
`;

    switch (moduleType)
    {
        case 'cjs': {
            result += 'module.exports = WorkerInstance;';
            break;
        }
        case 'esm': {
            result += 'export default WorkerInstance;';
            break;
        }
        default: {
            throw new Error(`Unknown module type: ${moduleType}`);
        }
    }

    return result;
}
