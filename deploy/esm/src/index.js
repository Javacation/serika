export const convert = (targetData, config) => {
    const result = {}, ruleMap = {}, existValid = [undefined, null];
    /** ===== valid ===== */
    if (existValid.indexOf(targetData) > -1)
        throw new Error('not exist data');
    if (existValid.indexOf(config) > -1)
        throw new Error('not exist config');
    if (existValid.indexOf(config.rule) > -1)
        throw new Error('not exist config.rule');
    if (typeof targetData !== 'string')
        throw new Error('targetData is not string');
    if (typeof config !== 'object')
        throw new Error('config type may be not Serika.ParserConfig');
    if (typeof config.rule !== 'object')
        throw new Error('config.rule type may be not Serika.PaeseRule');
    /** ===== parse ===== */
    /** rule is array? */
    if (!(config.rule instanceof Array)) {
        config.rule = [config.rule];
    }
    /** rule array => rule object */
    config.rule.forEach((v, i, o) => {
        ruleMap[Symbol.for(v._id)] = v;
    });
    /** read string */
    targetData.split('').forEach((v, i, o) => {
        console.log(v, i, o);
    });
};
