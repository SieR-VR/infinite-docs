import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "array",
    priority: 0,
    role: "expression",
    isTopLevel: true
}, [
    {
        tokenType: "LBracket"  
    },
    {
        role: "expressionWithComma",
        condition: () => true,
        key: "expressions",
        isRepeatable: true
    },
    {
        role: "expression",
        condition: () => true,
        key: "lastExpression"
    },
    {
        tokenType: "RBracket"
    }
]);