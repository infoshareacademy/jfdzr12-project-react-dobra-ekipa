import {describe, expect, it} from 'vitest';
import {useToggle} from './use-toggle';
import {useReducer} from 'react';
import {renderHook, act} from '@testing-library/react';
// describe('useToggle', () => {
//  it.todo('should return initial value')
//  it.todo('should return toggled value')
// })
describe('useToggle', () => {
    it('should return initial value', () => {
        const {result} = renderHook(()=>useToggle(false));
        const [value, toggle]=result.current;
        expect(value).toBe(false);
    });
    it('should return toggled value', () => {
        const {result} = renderHook(()=>useToggle(false));
        const [, toggle]=result.current;
        act(()=>{toggle()});
        const [value]=result.current;
        expect(value).toBe(true);
    });
});









