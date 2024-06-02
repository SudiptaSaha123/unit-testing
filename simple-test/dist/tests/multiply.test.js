"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)('It checks the multiply function', () => {
    (0, globals_1.it)('checks the multiply for 1 and 2', () => {
        let ans = (0, index_1.multiply)(1, 2);
        (0, globals_1.expect)(ans).toBe(2);
    });
    (0, globals_1.it)('checks the multiply for -1 and -2', () => {
        let ans = (0, index_1.multiply)(-1, -2);
        (0, globals_1.expect)(ans).toBe(2);
    });
    (0, globals_1.it)('checks the multiply for 5 and -2', () => {
        let ans = (0, index_1.multiply)(5, -2);
        (0, globals_1.expect)(ans).toBe(-10);
    });
    (0, globals_1.it)('checks the multiply for -5 and -5', () => {
        let ans = (0, index_1.multiply)(-5, -5);
        (0, globals_1.expect)(ans).toBe(25);
    });
});
