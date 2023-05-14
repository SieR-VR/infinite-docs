import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "expressionWithComma",
    priority: 0,
    role: "expressionWithComma",
    isTopLevel: false
}, [
    {
        role: "expression",
        condition: () => true,
        key: "expression"
    },
    {
        tokenType: "Comma"
    }
]);