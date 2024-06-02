import { describe, it, expect } from '@jest/globals'
import {multiply} from '../index'

describe('It checks the multiply function', ()=> {
    it('checks the multiply for 1 and 2' , () => {
        let ans = multiply(1,2)
        expect(ans).toBe(2)
    })
    it('checks the multiply for -1 and -2' , () => {
        let ans = multiply(-1,-2)
        expect(ans).toBe(2)
    })
    it('checks the multiply for 5 and -2' , () => {
        let ans = multiply(5,-2)
        expect(ans).toBe(-10)
    })
    it('checks the multiply for -5 and -5' , () => {
        let ans = multiply(-5,-5)
        expect(ans).toBe(25)
    })
})