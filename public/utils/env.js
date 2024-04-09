"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStart = exports.isDev = void 0;
exports.isDev = process.argv.some((str) => str == "--dev");
exports.isStart = process.argv.some((str) => str == "--start");
