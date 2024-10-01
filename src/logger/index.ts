import * as log4js from "log4js";

log4js.configure({
  appenders: {
    consoleOut: {
      type: "console",
      layout: {
        type: "pattern",
        pattern: "%d{yyyy-MM-dd hh:mm:ss} [%p] %m",
      },
    },
    fileOut: {
      type: "file",
      filename: `./logs/logger`,
      pattern: "yyyy-MM-dd.log",
      layout: {
        type: "pattern",
        pattern: "%d{yyyy-MM-dd hh:mm:ss} [%p] %m",
      },
      alwaysIncludePattern: true,
    },
    errorOut: {
      type: "file",
      filename: `./logs/error`,
      pattern: "yyyy-MM-dd.log",
      layout: {
        type: "pattern",
        pattern: "%d{yyyy-MM-dd hh:mm:ss} [%p] %m",
      },
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: {
      appenders: ["consoleOut", "fileOut"],
      level: "info",
    },
    error: {
      appenders: ["consoleOut", "errorOut"],
      level: "error",
    },
  },
});

const logger = log4js.getLogger();

export default logger;
