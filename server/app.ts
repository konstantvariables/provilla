import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as fs from 'fs';
import * as rfs from 'rotating-file-stream';

import setRoutes from './routes';
import {logger, logFileName, stream as logStrem} from './utils/logger';

const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan({ "format": "default", "stream": logStrem }))
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', logger.error.bind(logger, 'mongo connection error:'));
db.once('open', () => {
  logger.info('Connected to MongoDB');

  setRoutes(app);

  app.get('/logs', function(req, res) {
    //res.json({path:path.resolve(logFileName)})
    res.sendFile(path.resolve(logFileName));
  });

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.listen(app.get('port'), () => {
    logger.info('provilla app server listening on port ' + app.get('port'));
  });

});

export { app };
