import { makeTokenizeRule } from 'infinite-lang/rule/tokenizer';

export default makeTokenizeRule([
    {
        tokenType: 'LBrace',
        string: '{',
        priority: 0
    },
    {
        tokenType: 'RBrace',
        string: '}',
        priority: 0
    },
    {
        tokenType: 'LBracket',
        string: '[',
        priority: 0
    },
    {
        tokenType: 'RBracket',
        string: ']',
        priority: 0
    },
    {
        tokenType: 'Comma',
        string: ',',
        priority: 0
    },
    {
        tokenType: 'Colon',
        string: ':',
        priority: 0
    },
    {
        tokenType: 'String',
        regex: /"[^"]*"/,
        priority: 0
    },
    {
        tokenType: 'Number',
        regex: /[0-9]+/,
        priority: 0
    },
    {
        tokenType: 'True',
        string: 'true',
        priority: 0
    },
    {
        tokenType: 'False',
        string: 'false',
        priority: 0
    }
]);