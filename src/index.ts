import { Serika } from "../lib/index";

type TypeGuard<T> = {
    (target: any): target is T
}

const typeGuardMaker = <T>(valid: (target: T)=>boolean):TypeGuard<T>=>{
    return ((target: any)=>{
        return valid(target);
    }) as any;
};

export const convert = (targetData: string, config: Serika.ParserConfig)=>{
    const 
        result = {},
        ruleMap: {[key: string]: Serika.ParseRule} = {},
        startCounter: string[] = [],
        existValid: unknown[] = [undefined, null];

    /** ===== valid ===== */
    if( existValid.indexOf(targetData) > -1 ) throw new Error('not exist data');
    if( existValid.indexOf(config) > -1 ) throw new Error('not exist config');
    if( existValid.indexOf(config.rule) > -1 ) throw new Error('not exist config.rule');

    if( typeof targetData !== 'string' ) throw new Error('targetData is not string');
    if( typeof config !== 'object' ) throw new Error('config type may be not Serika.ParserConfig');
    if( typeof config.rule !== 'object' ) throw new Error('config.rule type may be not Serika.PaeseRule');

    /** ===== parse ===== */
    
    /** rule is array? */
    if( !(config.rule instanceof Array) ) {
        config.rule = [ config.rule ];
    }

    /** rule array => rule object */
    config.rule.forEach((v,i,o)=>{
        ruleMap[v._id] = v;
    });

    /** read string */
    targetData.split('').forEach((v1, i1, o1)=>{
        console.log(v1, i1, o1);

        Object.keys(ruleMap).forEach((v2, i2, o2)=>{
            if( ruleMap[v2].start instanceof RegExp ) {
                
            }

            if( startCounter.length === 0 ) {
                startCounter.push(v1);
            } else {
                
            }
        });
    });
}