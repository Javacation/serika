declare namespace Serika {
    /** type that can have start and end */
    export type StartEndAble<T> = {
        start : T,
        end : T
    };

    /** type that can have content */
    export type ContentAble<T> = {
        content : T
    };

    /** common type */
    export type CommonContent<T, K> = StartEndAble<T> & ContentAble<K>;

    /** parsed data */
    export type ParsedContent = CommonContent<number, string>;

    /** uninterpretable syntax before data parsing */
    export type Prefix = CommonContent<number, string>;

    /** uninterpretable syntax after data parsing */
    export type Suffix = CommonContent<number, string>;

    /** data structure created after string analysis */
    export type Meta = {
        beforeContent : Meta | undefined | null,
        prefix : Prefix,
        parseContent : ParsedContent | Meta,
        suffix : Suffix,
        afterContent : Meta | undefined | null,
    };

    export type ParseRule = {
        _id: string,
        start : string | RegExp,
        end : string | RegExp
    };
    
    export type ParserConfig = {
        rule: ParseRule | ParseRule[],
    };
}