"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const db = {
    createUser: (data) => electron_1.ipcRenderer.sendSync("createUser", data),
};
const sys = {
    chooseFiles: () => electron_1.ipcRenderer.sendSync("chooseFiles"),
};
process.once("loaded", () => {
    global.api = { ipcRenderer: electron_1.ipcRenderer, db, sys };
});
