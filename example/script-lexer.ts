import { readFileSync } from 'fs';

import { tokenize } from 'infinite-lang/core/tokenizer';
import TokenizeRules from './tokens';

const sourceCode = readFileSync('./test.json', 'utf-8');
const tokens = tokenize({
    input: sourceCode,
    fileName: 'test.json',
}, TokenizeRules);

console.log(tokens.unwrap()); // Internally uses `unwrap()` function to get the result (avoid to use try-catch)