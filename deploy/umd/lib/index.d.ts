export declare namespace Serika {
    /** type that can have start and end */
    type StartEndAble<T> = {
        start: T;
        end: T;
    };
    /** type that can have content */
    type ContentAble<T> = {
        content: T;
    };
    /** common type */
    type CommonContent<T, K> = StartEndAble<T> & ContentAble<K>;
    /** parsed data */
    type ParsedContent = CommonContent<number, string>;
    /** uninterpretable syntax before data parsing */
    type Prefix = CommonContent<number, string>;
    /** uninterpretable syntax after data parsing */
    type Suffix = CommonContent<number, string>;
    /** data structure created after string analysis */
    type Meta = {
        beforeContent: Meta | undefined | null;
        prefix: Prefix;
        parseContent: ParsedContent | Meta;
        suffix: Suffix;
        afterContent: Meta | undefined | null;
    };
    type ParseRule = {
        _id: string;
        start: string | RegExp;
        end: string | RegExp;
    };
    class ParserConfig {
        rule: ParseRule | ParseRule[];
        constructor(rule: ParseRule | ParseRule[]);
    }
}
