const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ExerciseLogRoutes = require('./routes/ExerciseLogRoutes');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const GoalsRoutes = require('./routes/GoalsRoutes');
const ProgressRoutes = require('./routes/ProgressRoutes');
const DashboardRoutes = require('./routes/DashboardRoutes');
require('dotenv').config();
const path = require('path');

const app = express();
const allowedOrigins = [
    'https://monkfish-app-od5cu.ondigitalocean.app',
];

// Connect Database
connectDB();

// Middleware
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
})); // Enable CORS
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api/log-exercise', ExerciseLogRoutes);
app.use('/api/goals', GoalsRoutes);
app.use('/api/progress', ProgressRoutes);
app.use('/api/dashboard', DashboardRoutes);

// Handle /api route
app.get('/api', (req, res) => {
    res.send('Welcome to the API of Health and Fitness Tracker!');
});

// Handle root route
app.get('/', (req, res) => {
    res.send('Welcome to the Health and Fitness Tracker API!');
});

// Serve static files from the React app (after build)
app.use(express.static(path.join(__dirname, 'health-fitness-tracker-frontend/build')));
// Catch-all route to serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'health-fitness-tracker-frontend/build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
