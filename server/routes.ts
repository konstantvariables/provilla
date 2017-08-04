import * as express from 'express';

import JobCtrl from './controllers/job';
import UserCtrl from './controllers/user';
import Job from './models/job';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const jobCtrl = new JobCtrl();
  const userCtrl = new UserCtrl();

  // Jobs
  router.route('/jobs').get(jobCtrl.getAll);
  router.route('/jobs/count').get(jobCtrl.count);
  router.route('/job').post(jobCtrl.insert);
  router.route('/job/owner/:email').get(jobCtrl.ownersJobs);
  router.route('/job/:id').get(jobCtrl.get);
  router.route('/job/:id').put(jobCtrl.update);
  router.route('/job/:id').delete(jobCtrl.delete);
  router.route('/job*').get(jobCtrl.star);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  router.route('/user*').get(userCtrl.star);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
