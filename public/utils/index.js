"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseUrl = void 0;
const electron_1 = require("electron");
const path_1 = require("path");
exports.databaseUrl = "file:" + (0, path_1.join)(electron_1.app.getPath("userData"), "database.sqlite");
