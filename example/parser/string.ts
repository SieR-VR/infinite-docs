import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "string",
    priority: 0,
    role: "expression",
    isTopLevel: true
}, [
    {
        tokenType: "String"
    }
]);