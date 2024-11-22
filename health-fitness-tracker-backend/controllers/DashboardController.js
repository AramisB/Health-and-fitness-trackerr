const axios = require('axios');

const getDashboardData = async (req, res) => {
  try {
      const token = req.headers.authorization.split(' ')[1];

      // Fetch exercise logs
      const exerciseResponse = await axios.get(`https://seal-app-buzkz.ondigitalocean.app/api/log-exercise`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      console.log('Exercise Response:', exerciseResponse.data);
      const exercises = exerciseResponse.data.logs || [];

      // Fetch goals
      const goalsResponse = await axios.get(`https://seal-app-buzkz.ondigitalocean.app/api/goals`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      console.log('Goals Response:', goalsResponse.data);
      const goals = goalsResponse.data.goals || [];

      // Fetch progress
      const progressResponse = await axios.get(`https://seal-app-buzkz.ondigitalocean.app/api/progress`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      console.log('Progress Response:', progressResponse.data);
      const progress = progressResponse.data.progress || [];

      // Return the fetched data
      return res.status(200).json({
          success: true,
          data: {
              name: req.user.name,
              exercises: exercises,
              goals: goals,
              progress: progress,
          },
      });
  } catch (error) {
      console.error('Error fetching dashboard data:', error.response ? error.response.data : error.message);
      return res.status(500).json({
          success: false,
          message: 'Error fetching dashboard data',
      });
  }
};

module.exports = {
    getDashboardData,
};
