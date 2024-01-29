import {describe, expect, it} from '@jest/globals';
import { convert } from '../deploy/esm/src';
import { Serika } from '../deploy/esm/lib';

describe('Serika Test', function() {
    it('throw error targetData is null or undefined', function() {
        try {
            convert(null);
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('targetData is undefined or null');
        }

        try {
            convert(undefined);
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('targetData is undefined or null');
        }
    });

    it('throw error targetData is not string', function() {
        try {
            convert(1, {rule:1});
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('targetData is not string');
        }
    });

    it('throw error config is not Serika.PaseConfig', function() {
        try {
            convert('', null);
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('config is undefined or null');
        }

        try {
            convert('', undefined);
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('config is undefined or null');
        }
    });

    it('throw error config is not Serika.ParserConfig', function() {
        try {
            convert('', {rule:''});
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('config type may be not Serika.ParserConfig');
        }
    });

    it('throw error config.rule is null or undefined', function() {
        try {
            convert('', {rule: null});
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('config.rule is undefined or null');
        }

        try {
            convert('', {rule: undefined});
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('config.rule is undefined or null');
        }
    });

    it('throw error config.rule is not Serika.ParseRule', function() {
        try {
            convert('', new Serika.ParserConfig(''));
        } catch(e) {
            let message = 'Unknown Error Message';
            if(e instanceof Error) {message = e.message;}
            expect(message).toBe('config.rule type may be not Serika.ParseRule');
        }
    });

    it('', function() {
        
    });
});