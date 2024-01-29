(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../lib/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convert = void 0;
    const index_1 = require("../lib/index");
    const typeGuardMaker = (valid) => {
        return ((target) => {
            return valid(target);
        });
    };
    const isString = typeGuardMaker((target) => {
        if (target instanceof String)
            return true;
        else
            return false;
    });
    const isParserConfig = typeGuardMaker((target) => {
        if (target instanceof index_1.Serika.ParserConfig)
            return true;
        else
            return false;
    });
    const convert = (targetData, config) => {
        const result = {}, ruleMap = {}, startCounter = [], existValid = [undefined, null];
        /** ===== valid ===== */
        if (existValid.indexOf(targetData) > -1)
            throw new Error('targetData is undefined or null');
        if (existValid.indexOf(config) > -1)
            throw new Error('config is undefined or null');
        if (existValid.indexOf(config.rule) > -1)
            throw new Error('config.rule is undefined or null');
        if (typeof targetData !== 'string')
            throw new Error('targetData is not string');
        if (!isParserConfig(config))
            throw new Error('config type may be not Serika.ParserConfig');
        if (typeof config.rule !== 'object')
            throw new Error('config.rule type may be not Serika.ParseRule');
        /** ===== parse ===== */
        /** rule is array? */
        if (!(config.rule instanceof Array)) {
            config.rule = [config.rule];
        }
        /** rule array => rule object */
        config.rule.forEach((v, i, o) => {
            ruleMap[v._id] = v;
        });
        /** read string */
        targetData.split('').forEach((v1, i1, o1) => {
            console.log(v1, i1, o1);
            Object.keys(ruleMap).forEach((v2, i2, o2) => {
                if (ruleMap[v2].start instanceof RegExp) {
                }
                if (startCounter.length === 0) {
                    startCounter.push(v1);
                }
                else {
                }
            });
        });
    };
    exports.convert = convert;
});
