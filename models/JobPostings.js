const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
  job_title: String,
  company: String,
  location: String,
  job_type: String,
  required_skills: [String],
  experience_level: String,
});

module.exports = mongoose.model('JobPosting', jobPostingSchema);
