const ExerciseLog = require('./ExerciseLogModel');
const Goal = require('./GoalsModel');
const Progress = require('./ProgressModel');

// Function to get exercise logs for the user
const getExerciseLogs = async (userId) => {
  try {
    return await ExerciseLog.find({ user: userId }).sort({ date: -1 }).exec();
  } catch (error) {
    throw new Error('Error fetching exercise logs');
  }
};

// Function to get goals for the user
const getUserGoals = async (userId) => {
  try {
    return await Goal.find({ user: userId }).exec();
  } catch (error) {
    throw new Error('Error fetching goals');
  }
};

// Function to get progress summary for the user
const getProgressSummary = async (userId) => {
  try {
    return await Progress.findOne({ user: userId }).exec();
  } catch (error) {
    throw new Error('Error fetching progress summary');
  }
};

module.exports = {
  getExerciseLogs,
  getUserGoals,
  getProgressSummary,
};
