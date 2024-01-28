import { describe, it, setup } from 'mocha';
import { assert } from 'chai';
import { convert } from '../deploy/esm/src/index.js';

describe('Test List', ()=>{
    it('wrong string check', ()=>{
        // assert.equal(convert(), undefined);
        convert('asdasd', { rule: {} })
    })
});