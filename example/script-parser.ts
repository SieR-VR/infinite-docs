import { readFileSync, writeFileSync } from 'fs';

import { tokenize } from 'infinite-lang/core/tokenizer';
import { parse } from 'infinite-lang/core/parser';

import TokenizeRules from './tokens';
import ParseRules from './parser';

const sourceCode = readFileSync('./test.json', 'utf-8');

const tokens = tokenize({
    input: sourceCode,
    fileName: 'test.json',
}, TokenizeRules).unwrap();

const AST = parse({
    tokens,
    fileName: 'test.json',
}, ParseRules, () => {}).unwrap();

console.dir(AST, { depth: null });
writeFileSync('./test.ast.json', JSON.stringify(AST, null, 4));