"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWinSettings = exports.getWinSettings = void 0;
const electron_store_1 = __importDefault(require("electron-store"));
const storage = new electron_store_1.default({});
const getWinSettings = () => {
    const defalt_bounds = { h: 600, w: 800 };
    const size = storage.get("win-size");
    if (size) {
        return size;
    }
    else {
        storage.set("win-size", defalt_bounds);
        return defalt_bounds;
    }
};
exports.getWinSettings = getWinSettings;
const setWinSettings = (sizes) => {
    const newSize = { w: sizes[0], h: sizes[1] };
    storage.set("win-size", newSize);
};
exports.setWinSettings = setWinSettings;
