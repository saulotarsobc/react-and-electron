import { join, resolve } from "path";
// import { format } from "url";
import { BrowserWindow, app, ipcMain, IpcMainEvent, dialog } from "electron";

import { isDev, isStart } from "./utils/env";
import { getWinSettings, setWinSettings } from "./store";

const createWindow = () => {
  const winSize = getWinSettings();

  const mainWindow = new BrowserWindow({
    height: winSize.h,
    width: winSize.w,
    minHeight: 500,
    minWidth: 400,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, "preload.js"),
    },
  });

  mainWindow.on("resize", () => {
    setWinSettings(mainWindow.getSize());
  });

  mainWindow.setMenu(null);

  // open devtools
  // abre o devtools se estiver em modo de desenvolvimento
  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.loadURL(
    isStart || isDev ? `http://localhost:3000/` : resolveHtmlPath("index.html")
    // : format({
    //     pathname: join(__dirname, "index.html"),
    //     protocol: "file",
    //     slashes: true,
    //   })
  );
};

function resolveHtmlPath(htmlFileName: string) {
  return `file://${resolve(__dirname, htmlFileName)}`;
}

// Prepare the frontend once the app is ready
// Prepare o frontend quando o aplicativo estiver pronto
app.on("ready", async () => {
  createWindow();
});

// Quit the app once all windows are closed
// Saia do aplicativo quando todas as janelas estiverem fechadas
app.on("window-all-closed", app.quit);

/* ++++++++++ code ++++++++++ */
ipcMain.on("chooseFiles", (event: IpcMainEvent) => {
  dialog
    .showOpenDialog({ properties: ["openFile", "multiSelections"] })
    .then((result: any) => {
      event.returnValue = result;
    })
    .catch((err: Error) => {
      event.returnValue = err.message;
    });
});

ipcMain.on("createUser", (event: IpcMainEvent, _data: any) => {
  // prisma.user
  // .create({ data })
  // .then((data: any) => {
  //   event.returnValue = data;
  // })
  // .catch((e: Error) => {
  //   event.returnValue = e.message;
  // });
  event.returnValue = "e.message";
});
