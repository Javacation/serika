export var Serika;
(function (Serika) {
    // type ParserConfig = {
    //     rule: ParseRule | ParseRule[],
    // };
    class ParserConfig {
        constructor(rule) {
            this.rule = rule;
        }
    }
    Serika.ParserConfig = ParserConfig;
})(Serika || (Serika = {}));
