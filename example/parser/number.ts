import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "number",
    priority: 0,
    role: "expression",
    isTopLevel: true
}, [
    {
        tokenType: "Number"
    }
]);