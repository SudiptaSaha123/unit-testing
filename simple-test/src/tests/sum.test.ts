import { describe, it, expect } from '@jest/globals'
import {sum} from '../index'

describe('It checks the sum function', ()=> {
    it('checks the sum for 1 and 2' , () => {
        let ans = sum(1,2)
        expect(ans).toBe(3)
    })
    it('checks the sum for -1 and -2' , () => {
        let ans = sum(-1,-2)
        expect(ans).toBe(-3)
    })
    it('checks the sum for 5 and -2' , () => {
        let ans = sum(5,-2)
        expect(ans).toBe(3)
    })
    it('checks the sum for -5 and 5' , () => {
        let ans = sum(-5,5)
        expect(ans).toBe(0)
    })
})