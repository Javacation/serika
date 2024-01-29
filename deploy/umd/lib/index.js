(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
});
