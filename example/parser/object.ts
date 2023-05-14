import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "object",
    priority: 0,
    role: "expression",
    isTopLevel: true
}, [
    {
        tokenType: "LBrace"
    },
    {
        role: "keyValuePairWithComma",
        condition: () => true,
        key: "pairs",
        isRepeatable: true
    },
    {
        role: "keyValuePair",
        condition: () => true,
        key: "lastPair"
    },
    {
        tokenType: "RBrace"
    }
]);