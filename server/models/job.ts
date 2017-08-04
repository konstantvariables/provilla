import * as mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  name: String,
  detail: String,
  priority: String
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
