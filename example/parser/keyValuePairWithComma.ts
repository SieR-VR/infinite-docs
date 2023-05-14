import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "keyValuePairWithComma",
    priority: 0,
    role: "keyValuePairWithComma",
    isTopLevel: false
}, [
    {
        role: "keyValuePair",
        condition: () => true,
        key: "pair"
    },
    {
        tokenType: "Comma"
    }
]);