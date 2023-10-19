import tsJest from 'ts-jest';
import { buildWorkerCode } from '../core';
import type { Transformer } from '@jest/transform';

export default {
    process(sourceText, sourcePath, config, options)
    {
        const tsTransformer = tsJest.createTransformer();

        const transformedCode = tsTransformer.process(sourceText, sourcePath, config, options) as string;

        return buildWorkerCode(transformedCode, 'cjs');
    }
} as Transformer;
