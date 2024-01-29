"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serika = void 0;
var Serika;
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
})(Serika || (exports.Serika = Serika = {}));
