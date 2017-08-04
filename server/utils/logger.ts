import * as winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';
import * as dateformat from 'dateformat';

const logDir = "log";
const env = process.env.NODE_ENV || 'development';

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);
//winston.emitErrs = true;
const tsFormat = () => (new Date()).toLocaleTimeString();
const dateString = dateformat(new Date(),"yyyymmdd");

if (!fs.existsSync(logDir)) {
  fs.mkdir(logDir);
}

const logFileName = `${logDir}/application-${dateString}.log`;
const logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({
      level: "debug",
      colorize: true,
      handleExceptions: true,
      json: false
    }),
    new winston.transports.File({
      filename: logFileName,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: "debug"
    })
  ],
  exceptionHandlers: [],
  exitOnError: false
});

logger.level = 'debug';
logger.info(`application logging started with level ${logger.level} with env of "${env}"`);

const stream = {
  write: function (message: string, encoding: string) {
    logger.info(message);
  }
}

export {
  logger, logFileName, stream
}


