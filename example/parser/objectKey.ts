import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    nodeType: "objectKey",
    priority: 0,
    role: "objectKey",
    isTopLevel: false
}, [
    {
        tokenType: "String"
    }
]);