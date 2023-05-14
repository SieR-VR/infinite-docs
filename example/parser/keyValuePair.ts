import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "keyValuePair",
    priority: 0,
    role: "keyValuePair",
    isTopLevel: false
}, [
    {
        role: "objectKey",
        condition: () => true,
        key: "key"
    },
    {
        tokenType: "Colon"
    },
    {
        role: "expression",
        condition: () => true,
        key: "value"
    }
]);