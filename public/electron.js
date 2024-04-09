"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const url_1 = require("url");
const electron_1 = require("electron");
const env_1 = require("./utils/env");
const store_1 = require("./store");
const createWindow = () => {
    const winSize = (0, store_1.getWinSettings)();
    const mainWindow = new electron_1.BrowserWindow({
        height: winSize.h,
        width: winSize.w,
        minHeight: 500,
        minWidth: 400,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: (0, path_1.join)(__dirname, "preload.js"),
        },
    });
    mainWindow.on("resize", () => {
        (0, store_1.setWinSettings)(mainWindow.getSize());
    });
    mainWindow.setMenu(null);
    if (env_1.isDev)
        mainWindow.webContents.openDevTools();
    mainWindow.loadURL(env_1.isStart || env_1.isDev
        ? `http://localhost:3000/`
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, "../build/index.html"),
            protocol: "file:",
            slashes: true,
        }));
};
electron_1.app.on("ready", async () => {
    createWindow();
});
electron_1.app.on("window-all-closed", electron_1.app.quit);
electron_1.ipcMain.on("chooseFiles", (event) => {
    electron_1.dialog
        .showOpenDialog({ properties: ["openFile", "multiSelections"] })
        .then((result) => {
        event.returnValue = result;
    })
        .catch((err) => {
        event.returnValue = err.message;
    });
});
electron_1.ipcMain.on("createUser", (event, _data) => {
    event.returnValue = "e.message";
});
