import Job from '../models/job';
import BaseCtrl from './base';
import {logger} from '../utils/logger'

export default class JobCtrl extends BaseCtrl {
  model = Job;

  ownersJobs = (req, res) => {
    logger.debug(req.body.ownerEmail);
    this.model.findOne({ ownerEmail: req.params.email }, (err, jobs) => {
      if (!jobs) {
        logger.debug("no jobs for owner " + req.params.email + " or error " + err);
        return res.sendStatus(200);
      }
      logger.debug(jobs)
      res.status(200).json(jobs);
    });
  };
}
