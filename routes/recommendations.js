const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../recommendationLogic');

router.post('/recommend-jobs', async (req, res) => {
  try {
    const userProfile = req.body;
    const jobRecommendations = await getRecommendations(userProfile);
    res.json(jobRecommendations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
