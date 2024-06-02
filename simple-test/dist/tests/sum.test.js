"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
(0, globals_1.describe)('It checks the sum function', () => {
    (0, globals_1.it)('checks the sum for 1 and 2', () => {
        let ans = (0, index_1.sum)(1, 2);
        (0, globals_1.expect)(ans).toBe(3);
    });
    (0, globals_1.it)('checks the sum for -1 and -2', () => {
        let ans = (0, index_1.sum)(-1, -2);
        (0, globals_1.expect)(ans).toBe(-3);
    });
    (0, globals_1.it)('checks the sum for 5 and -2', () => {
        let ans = (0, index_1.sum)(5, -2);
        (0, globals_1.expect)(ans).toBe(3);
    });
    (0, globals_1.it)('checks the sum for -5 and 5', () => {
        let ans = (0, index_1.sum)(-5, 5);
        (0, globals_1.expect)(ans).toBe(0);
    });
});
