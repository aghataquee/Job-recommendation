const JobPostings = require('./models/JobPostings');

const getRecommendations = async (userProfile) => {
  const { skills, experience_level, preferences } = userProfile;
  const { desired_roles, locations, job_type } = preferences;

  const query = {
    job_title: { $in: desired_roles },
    location: { $in: locations },
    job_type: job_type,
    experience_level: experience_level,
    required_skills: { $in: skills },
  };

  const jobMatches = await JobPostings.find(query); 
  return jobMatches;
};

module.exports = { getRecommendations };
